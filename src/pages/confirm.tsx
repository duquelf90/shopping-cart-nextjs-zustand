// pages/confirm.js

import React from 'react';

const ConfirmPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">¡Pedido Confirmado!</h1>
      <p className="text-lg text-center mb-4">
        Gracias por tu compra. Tu pedido ha sido procesado con éxito.
      </p>
      <p className="text-md text-gray-600">
        Recibirás un correo electrónico de confirmación en breve.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Regresar a la tienda
      </button>
    </div>
  );
};

export default ConfirmPage;