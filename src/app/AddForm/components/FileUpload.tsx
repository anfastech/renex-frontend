import React from "react";

interface FileUploadProps {
  label: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ label }) => {
  return (
    <div className="mb-6">
      <h4 className="text-xl font-medium mb-4">{label}</h4>
      <input type="file" multiple className="w-full border border-gray-300 rounded-md p-2" />
    </div>
  );
};

export default FileUpload;
