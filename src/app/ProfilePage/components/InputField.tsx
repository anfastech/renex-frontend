// InputField.tsx
import React from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: "text" | "textarea"; // You can add more types if needed
  disabled?: boolean; // New prop for disabling the input
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text", // Default to 'text' input type
  disabled = false, // Default to not disabled
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled} // Set disabled prop here
          className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${
            disabled ? "bg-gray-200 cursor-not-allowed" : ""
          }`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled} // Set disabled prop here
          className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${
            disabled ? "bg-gray-200 cursor-not-allowed" : ""
          }`}
        />
      )}
    </div>
  );
};

export default InputField;
