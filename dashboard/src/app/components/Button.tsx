type ButtonProps = {
    label: string;
    onClick: () => void;
};

const Button = ({label, onClick}: ButtonProps) => (
    <button
        onClick={onClick}
        className="bg-apple-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-200"
    >
        {label}
    </button>
);

export default Button;