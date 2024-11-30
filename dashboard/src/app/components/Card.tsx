import React from "react";

type CardProps = {
    title: string;
    content: React.ReactNode;
};

const Card = ({ title, content }: CardProps) => {
    return (
        <div className="card bg-white shadow-apple">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <div className="text-gray-600">{content}</div>
        </div>
    );
};

export default Card;