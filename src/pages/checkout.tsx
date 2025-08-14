import { useCartStore } from "@/lib/stores/useCartStore";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { CustomerData, RecipientData } from "@/types/types";

interface FormData {
  customer: CustomerData;
  recipient: RecipientData;
}

const Checkout = () => {
  const router = useRouter();
  const { cart, clearCart } = useCartStore();
  const [formData, setFormData] = useState<FormData>({
    customer: {
      fullName: "",
      address: "",
      phone: "",
      email: "",
    },
    recipient: {
      fullName: "",
      address: "",
      phone: "",
      province: "",
      notes: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".") as [
      keyof FormData,
      keyof FormData[keyof FormData]
    ]; // Divide el nombre en sección y campo
    if (section in formData && field in formData[section]) {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataToSend = {
      customer: {
        fullname: formData.customer.fullName,
        email: formData.customer.email,
        phone: formData.customer.phone,
        address: formData.customer.address,
      },
      recipient: {
        fullname: formData.recipient.fullName,
        phone: formData.recipient.phone,
        address: formData.recipient.address,
        province: formData.recipient.province,
        notes: formData.recipient.notes,
      },
      products: cart.map((product) => ({
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      })),
    };
    try {
      const response = await axios.post(
        "https://127.0.0.1:8000/api/create/order",
        dataToSend
      );
      if (response.status === 201) {
        router.push("/confirm");
      }
      console.log("Respuesta de la API:", response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start"
    >
      <div className="w-full flex-row space-y-4 md:space-y-6">
        {/* Customer Details Block */}
        <div className="p-3.5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10 pb-20">
          <h3 className="text-xl md:text-2xl font-bold text-black">
            Detalles del Cliente
          </h3>
          {["fullName", "email", "phone", "address"].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block mb-1" htmlFor={`customer${field}`}>
                {field === "fullName"
                  ? "Nombre y Apellidos"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={`customer.${field}`}
                id={`customer${field}`}
                value={formData.customer[field as keyof CustomerData]}
                onChange={handleChange}
                required
                className="border rounded w-full py-2 px-3"
              />
            </div>
          ))}
        </div>

        {/* Recipient Details Block */}
        <div className="w-full p-3.5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10 pb-20">
          <h3 className="text-xl md:text-2xl font-bold text-black">
            Datos del Destinatario
          </h3>
          {["fullName", "address", "phone", "province", "notes"].map(
            (field) => (
              <div className="mb-4" key={field}>
                <label className="block mb-1" htmlFor={`recipient${field}`}>
                  {field === "fullName"
                    ? "Nombre y Apellidos"
                    : field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type="text"
                  name={`recipient.${field}`}
                  id={`recipient${field}`}
                  value={formData.recipient[field as keyof RecipientData]}
                  onChange={handleChange}
                  required={field !== "notes"} // Notas son opcionales
                  className="border rounded w-full py-2 px-3"
                />
              </div>
            )
          )}
        </div>
      </div>

      <div className="w-full lg:max-w-[505px] p-5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
        <h3 className="text-xl md:text-2xl font-bold text-black">
          Resumen de tu Pedido
        </h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="flex justify-start">Producto</th>
              <th className="text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <span>
                    {product.title} (x{product.quantity})
                  </span>
                </td>
                <td className="text-right">
                  <strong>{product.price * product?.quantity}$</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr className="border-t-black/10" />
        <p>
          Aceptamos pagos por vía Zelle. Haga su compra y consulte las
          instrucciones de pago. La orden no será confirmada hasta que se
          realice el pago.
        </p>
        <button
          type="submit"
          className="bg-black w-full rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all"
        >
          Realizar el pedido
        </button>
      </div>
    </form>
  );
};

export default Checkout;
