import React from 'react';

type Props = {
  title: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const TextInput: React.FC<Props> = ({
  title,
  placeholder,
  value,
  onChange,
}) => {
  const lowerCaseTitle = title.toLowerCase();

  return (
    <div>
      <div className="my-4">
        <input
          type="text"
          name={lowerCaseTitle}
          id={lowerCaseTitle}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder={placeholder}
          autoFocus={true}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TextInput;
