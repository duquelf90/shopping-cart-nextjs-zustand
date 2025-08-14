import React from "react";

const ConfirmPage = () => {
  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0 py-5">
        <div className="flex flex-col justify-center p-5">
          <h1 className="text-4xl font-bold mb-4 text-center">
            ¡Pedido Confirmado!
          </h1>
          <div className="pb-5">
            <p className="text-lg text-center mb-4">
              Gracias por tu compra. Tu pedido ha sido procesado con éxito.
            </p>
            <ul className="grid sm:grid-cols-4 mb-5 [ul:li:span:mr-2]">
              <li className="flex md:flex-col w-full">
                Número de pedido: <strong className="ml-2">numero</strong>
              </li>
              <li className="flex md:flex-col w-full">
                Fecha: <strong className="ml-2">fecha</strong>
              </li>
              <li className="flex md:flex-col w-full">
                Total:{" "}
                <strong className="ml-2">
                  <span>
                    total<span>$</span>
                  </span>
                </strong>
              </li>
              <li className="flex flex-col w-full">
                Método de pago:{" "}
                <strong>Pagos para clientes de EEUU por vía Zelle</strong>
              </li>
            </ul>
            <p className="text-md text-gray-600">
              Recibirás un correo electrónico de confirmación en breve.
            </p>
            <p>
              <span className="text-red-600">
                Para los pagos en USD debe tener en cuenta el cambio monetario,
                el precio en USD sale reflejado en los detalles
              </span>
            </p>
            <p>
              <b>Instrucciones Postventa:</b>
            </p>
            <p>
              <b>Confirmación de Pedido:</b>
              <br />
              Una vez realizado tu pedido, recibirás un correo electrónico con
              la confirmación del mismo y los detalles de tu compra.
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
              Una vez realizada la transferencia envíe una captura a nuestro
              WhatsApp al número{" "}
              <a
                href="https://wa.me/13055466008"
                target="_blank"
                rel="noopener"
              >
                +1 305 546-6008
              </a>
            </p>
            <p>
              <b>Verificación y Contacto:</b>
              <br />
              Puede contactar por WhatsApp al número{" "}
              <a
                href="https://wa.me/13055466008"
                target="_blank"
                rel="noopener"
              >
                +1 305 546-6008
              </a>
              , o nuestro equipo de administración te contactará dentro de las
              próximas 24 horas para verificar la información del pedido y el
              pago.
            </p>
            <p>
              <b>Confirmación de Pago y Finalización:</b>
              <br />
              Una vez realizado el pago, tu compra se considerará completada.
            </p>
            <p>
              <b>Atención al Cliente:</b>
              <br />
              Si tienes alguna pregunta o inquietud, nuestro equipo de atención
              al cliente está a tu disposición para asistirte en todo momento.
              Contáctanos a través de nuestros canales de soporte.
            </p>
          </div>

          <button
            onClick={() => (window.location.href = "/")}
            className="mx-auto bg-black w-1/2 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all"
          >
            Regresar a la tienda
          </button>
        </div>
      </div>
    </main>
  );
};

export default ConfirmPage;
