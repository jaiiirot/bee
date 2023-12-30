import React, { useContext } from "react";
import ContextCheckout, { ContextCheckoutInformacion } from "../context/ContextCheckout";
const MensajeWhatsapp = ({ datosCompra, producto }) => {
  
  const {setInformacion}= useContext(ContextCheckoutInformacion)

  const numeroWhatsApp =
    "51950011434"; /* Numero del dueño del emprendimiento */

  const enviarWhatsApp = () => {
    let mensaje =
      "Hola, mi nombre es *" +
      datosCompra.usuario +
      "* quisiera solicitar un presupuesto. Estos son mis datos:";

    if (datosCompra.email) mensaje += "\n*Email:* " + datosCompra.email;
    if (datosCompra.phone) mensaje += "\n*Teléfono:* " + datosCompra.phone;
    if (producto) mensaje += "\n*Producto:* " + producto;
    if (datosCompra.tela) mensaje += "\n*Tela:* " + datosCompra.tela;
    if (datosCompra.disenioPropio)
      mensaje += "\n*Diseño Propio:* " + datosCompra.disenioPropio;
    if (datosCompra.descripcionDisenio)
      mensaje += "\n*Descripción diseño:* " + datosCompra.descripcionDisenio;
    if (datosCompra.cantidadDePrendas)
      mensaje +=
        "\n*Cantidad de prendas por talle:* " + datosCompra.cantidadDePrendas;
    if (datosCompra.cantidadObjetos)
      mensaje += "\n*Cantidad de objetos:* " + datosCompra.cantidadObjetos;
    if (datosCompra.medioDePago)
      mensaje += "\n*Medio de pago:* " + datosCompra.medioDePago;
    if (datosCompra.metodoDeEnvio)
      mensaje += "\n*Método de envío:* " + datosCompra.metodoDeEnvio;

    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensaje
    )}`;

    setInformacion(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`)

    window.open(enlaceWhatsApp, "_blank");
  };

  enviarWhatsApp();

  return (
    <>
      {(() => {
        window.location.href = "/checkout";
      })()}
    </>
  );
};

export default MensajeWhatsapp;