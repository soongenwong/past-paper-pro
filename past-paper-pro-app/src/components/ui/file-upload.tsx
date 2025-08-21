"use client";

import React, { useState, useCallback } from "react";
import { Upload, X, FileText, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface FileUploadProps {
  onFileUpload?: (files: File[]) => void;
  maxFiles?: number;
  acceptedFileTypes?: string[];
  maxFileSizeMB?: number;
}

export function FileUpload({ 
  onFileUpload, 
  maxFiles = 5,
  acceptedFileTypes = ['.pdf', '.docx', '.txt'],
  maxFileSizeMB = 10
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);

  const validateFile = (file: File): string | null => {
    // Check file type
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!acceptedFileTypes.includes(fileExtension)) {
      return `File type ${fileExtension} is not supported. Please upload ${acceptedFileTypes.join(', ')} files.`;
    }

    // Check file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxFileSizeMB) {
      return `File size (${fileSizeMB.toFixed(1)}MB) exceeds maximum allowed size of ${maxFileSizeMB}MB.`;
    }

    return null;
  };

  const handleFiles = useCallback((fileList: FileList) => {
    const newErrors: string[] = [];
    const validFiles: File[] = [];

    Array.from(fileList).forEach(file => {
      const error = validateFile(file);
      if (error) {
        newErrors.push(error);
      } else if (files.length + validFiles.length < maxFiles) {
        validFiles.push(file);
      } else {
        newErrors.push(`Maximum ${maxFiles} files allowed. Some files were not added.`);
      }
    });

    setErrors(newErrors);
    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
    }
  }, [files.length, maxFiles, maxFileSizeMB, acceptedFileTypes]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  }, [handleFiles]);

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    setUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setFiles([]);
          onFileUpload?.(files);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="w-full space-y-4">
      {/* Drop Zone */}
      <Card 
        className={`border-2 border-dashed transition-colors cursor-pointer ${
          dragActive 
            ? 'border-orange-400 bg-orange-50' 
            : 'border-orange-200 hover:border-orange-300'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
          <input
            type="file"
            multiple
            accept={acceptedFileTypes.join(',')}
            onChange={handleChange}
            className="hidden"
            id="file-upload"
          />
          
          <Upload className={`h-12 w-12 mb-4 ${dragActive ? 'text-orange-500' : 'text-orange-400'}`} />
          
          <h3 className="text-lg font-semibold mb-2">
            {dragActive ? 'Drop files here' : 'Upload Past Papers'}
          </h3>
          
          <p className="text-gray-600 mb-4">
            Drag and drop your files here, or{' '}
            <label htmlFor="file-upload" className="text-orange-600 hover:text-orange-700 cursor-pointer font-medium">
              browse to choose files
            </label>
          </p>
          
          <div className="text-sm text-gray-500 space-y-1">
            <p>Supported formats: {acceptedFileTypes.join(', ')}</p>
            <p>Maximum file size: {maxFileSizeMB}MB</p>
            <p>Maximum {maxFiles} files allowed</p>
          </div>
        </CardContent>
      </Card>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="space-y-2">
          {errors.map((error, index) => (
            <div key={index} className="flex items-center space-x-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          ))}
        </div>
      )}

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Selected Files</h4>
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-xs text-gray-600">{formatFileSize(file.size)}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFile(index)}
                className="text-gray-500 hover:text-red-600"
                disabled={uploading}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Upload Progress */}
      {uploading && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Uploading files...</span>
            <span>{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} className="w-full" />
        </div>
      )}

      {/* Upload Button */}
      {files.length > 0 && !uploading && (
        <Button 
          onClick={handleUpload}
          className="w-full bg-orange-600 hover:bg-orange-700"
        >
          Upload {files.length} file{files.length > 1 ? 's' : ''}
        </Button>
      )}
    </div>
  );
}
