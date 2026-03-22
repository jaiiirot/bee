export const CHATBOT_OPTIONS = [
  "¿Cómo comprar?",
  "Medios de pago",
  "Envíos",
  "Garantía",
  "Ubicación",
];

export const CHATBOT_DATA = [
  {
    keywords: [
      "pago",
      "pagar",
      "seña",
      "tarjeta",
      "transferencia",
      "efectivo",
      "medios de pago",
    ],
    response:
      "**¡Aceptamos varias formas de pago!** 💳\n\nPodés abonar tu pedido mediante:\n• **Tarjeta de crédito o débito**\n• **Transferencia bancaria**\n• **Efectivo** (Rapipago / PagoFácil)\n\nPara confirmar y arrancar tu pedido requerimos una **seña del 50%**. El resto lo abonás tranquilamente al momento de la entrega.",
  },
  {
    keywords: [
      "envio",
      "envío",
      "domicilio",
      "entrega",
      "sucursal",
      "retiro",
      "envíos",
    ],
    response:
      "**📦 Sobre nuestras entregas:**\n\n• **Retiro gratis:** Podés pasar a buscar tu pedido directo por nuestro taller.\n• **Envíos:** Ofrecemos envío estándar o exprés a todo el país (por correo).\n\n*Nota:* La gestión del envío corre por tu cuenta, Bee Mendoza no se responsabiliza por demoras una vez despachado el paquete.",
  },
  {
    keywords: [
      "comprar",
      "pasos",
      "proceso",
      "presupuesto",
      "pedido",
      "¿cómo comprar?",
    ],
    response:
      "**¡Hacer tu pedido es súper fácil!** 🛒\n\n**1.** Elegí tu producto en nuestro catálogo.\n**2.** Completá la solicitud de presupuesto.\n**3.** Nos contactamos con vos para definir los detalles.\n**4.** Abonás la seña del 50%.\n**5.** ¡Iniciamos la fabricación!\n\n*(No hace falta crearte una cuenta en la web para comprar)*.",
  },
  {
    keywords: [
      "garantia",
      "garantía",
      "cambio",
      "devolucion",
      "reembolso",
      "falla",
    ],
    response:
      "**🤝 Nuestra Garantía:**\n\nTe damos **1 año de garantía de fabricación**.\nSi tu producto presenta alguna falla en la confección o en el estampado, avisanos dentro del plazo establecido. \n\n*Aclaración:* Una vez iniciada la producción (tras la seña), no se pueden realizar modificaciones en pedidos personalizados.",
  },
  {
    keywords: ["requisito", "edad", "legal", "empresa", "mayor"],
    response:
      "**⚖️ Requisitos para contratar:**\n\nNuestros servicios están disponibles para personas mayores de **18 años**. \nSi representás a un colegio, club o empresa, tenés que contar con la autorización y capacidad legal para realizar compras a nombre de esa institución.",
  },
  {
    keywords: [
      "ubicacion",
      "ubicación",
      "donde",
      "dónde",
      "direccion",
      "dirección",
      "local",
      "taller",
      "horario",
    ],
    response:
      "**📍 Dónde encontrarnos:**\n\nNuestro taller está ubicado en **La Colonia, Junín, Mendoza**.\n\n**Horarios de atención:**\nLunes a Viernes de **9:00 a 13:00 hs** y de **15:00 a 17:00 hs**.",
  },
  {
    keywords: ["tiempo", "demora", "tardan", "fabricación", "tiempos"],
    response:
      "**⏱️ Tiempos de Producción:**\n\nLos tiempos varían según el tipo de producto y la cantidad del lote. Una vez confirmada la seña y el diseño, tu pedido entra a taller. Escribinos por WhatsApp con tu idea para darte una fecha de entrega precisa.",
  },
  {
    keywords: [
      "hola",
      "buenas",
      "buen dia",
      "buenas tardes",
      "buenas noches",
      "saludos",
    ],
    response:
      "¡Hola! 👋 Qué bueno verte por acá.\n\nSoy el asistente virtual de **Bee Mendoza**. Podés preguntarme sobre pagos, envíos, garantías, tiempos o cómo hacer tu pedido.",
  },
];

export const FALLBACK_RESPONSE =
  "¡Ups! No tengo la respuesta exacta para eso. 🤔\n\nPero no te preocupes, tocá el botón de WhatsApp al final de la página o escribinos por el formulario de contacto para que un integrante del equipo te asesore personalmente. 🐝";
