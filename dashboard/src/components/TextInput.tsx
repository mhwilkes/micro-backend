// components/TextInput.tsx

type TextInputProps = {
    label: string;
    placeholder: string;
};

const TextInput = ({ label, placeholder }: TextInputProps) => (
    <div className="flex flex-col space-y-1">
        <label className="text-gray-600">{label}</label>
        <input
            type="text"
            placeholder={placeholder}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
    </div>
);

export default TextInput;