// Notification.tsx
import React from 'react';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded shadow-lg transition-transform transform duration-300">
      <p>{message}</p>
      <button onClick={onClose} className="mt-2 text-sm underline">
        Close
      </button>
    </div>
  );
};

export default Notification;