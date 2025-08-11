// pages/confirm.js

import React from "react";

const ConfirmPage = () => {
  return (
    <div className="flex flex-col justify-center h-screen bg-gray-100 p-5">
      <h1 className="text-4xl font-bold mb-4">¡Pedido Confirmado!</h1>
      <p className="text-lg text-center mb-4">
        Gracias por tu compra. Tu pedido ha sido procesado con éxito.
      </p>
      <ul className="grid sm:grid-cols-4">
        <li className="w-full">
          Número de pedido: <strong>numero</strong>
        </li>
        <li>
          Fecha: <strong>fecha</strong>
        </li>
        <li>
          Total:{" "}
          <strong>
            <span>
              <bdi>
                total<span>$</span>
              </bdi>
            </span>
          </strong>
        </li>
        <li>
          Método de pago:{" "}
          <strong>Pagos para clientes de EEUU por vía Zelle</strong>
        </li>
      </ul>
      <p className="text-md text-gray-600">
        Recibirás un correo electrónico de confirmación en breve.
      </p>
      <p>
        <span className="text-red-600">
          Para los pagos en USD debe tener en cuenta el cambio monetario, el
          precio en USD sale reflejado en los detalles
        </span>
      </p>
      <p>
        <b>Instrucciones Postventa:</b>
      </p>
      <p>
        <b>Confirmación de Pedido:</b>
        <br />
        Una vez realizado tu pedido, recibirás un correo electrónico con la
        confirmación del mismo y los detalles de tu compra.
      </p>
      <p>
        <b>Proceder al pago:</b>
        <br />
        Realizar la transferencia a la cuenta:
        <br />
        ejemplo@empresa.com
      </p>
      <p>nombre de cuenta: Pedro Navaja</p>
      <p>
        Una vez realizada la transferencia envíe una captura a nuestro WhatsApp
        al número{" "}
        <a href="https://wa.me/13055466008" target="_blank">
          +1 305 546-6008
        </a>
      </p>
      <p>
        <b>Verificación y Contacto:</b>
        <br />
        Puede contactar por WhatsApp al número{" "}
        <a href="https://wa.me/13055466008" target="_blank">
          +1 305 546-6008
        </a>
        , o nuestro equipo de administración te contactará dentro de las
        próximas 24 horas para verificar la información del pedido y el pago.
      </p>
      <p>
        <b>Confirmación de Pago y Finalización:</b>
        <br />
        Una vez realizado el pago, tu compra se considerará completada.
      </p>
      <p>
        <b>Atención al Cliente:</b>
        <br />
        Si tienes alguna pregunta o inquietud, nuestro equipo de atención al
        cliente está a tu disposición para asistirte en todo momento.
        Contáctanos a través de nuestros canales de soporte.
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-1/2 items-center"
      >
        Regresar a la tienda
      </button>
    </div>
  );
};

export default ConfirmPage;
