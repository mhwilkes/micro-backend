import React, { ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  title: string;
  content: ReactNode;
  onClose: () => void;
};

const Modal = ({ isOpen, title, content, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6 relative">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="text-gray-600">{content}</div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;