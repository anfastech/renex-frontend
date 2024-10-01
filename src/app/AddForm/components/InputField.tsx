import React from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: "text" | "number" | "textarea";
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-medium mb-2">{label}</h4>
      {type === "textarea" ? (
        <textarea className="px-4 py-2 border border-gray-300 rounded-md w-full" rows={5} placeholder={placeholder}></textarea>
      ) : (
        <input type={type} className="px-4 py-2 border border-gray-300 rounded-md w-full" placeholder={placeholder} />
      )}
    </div>
  );
};

export default InputField;
