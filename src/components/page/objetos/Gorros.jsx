import React from "react";
import ObjetosPedidosCompraList from "../../pedidoCompra/ObjetosPedidosCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import img1Gorros from "../../../assets/img/gorros1.jpg";
import img2Gorros from "../../../assets/img/gorros2.jpg";
import img3Gorros from "../../../assets/img/gorros3.jpg";
import img4Gorros from "../../../assets/img/gorros4.jpg";
import imagen1 from "../../../assets/img/gorros1-mobile.jpg";
import imagen2 from "../../../assets/img/gorros2-mobile.jpg";
import imagen3 from "../../../assets/img/gorros3-mobile.jpg";
import imagen4 from "../../../assets/img/gorros4-mobile.jpg";

const Gorros = () => {
    
    const informacionProducto = [
      {
        titulo: "GORROS",
        imagenes: {
          imagen1: img1Gorros,
          imagen2: img2Gorros,
          imagen3: img3Gorros,
          imagen4: img4Gorros,
          
        },
        imagenesMobile: {
          imagen1: imagen1,
          imagen2: imagen2,
          imagen3: imagen3,
          imagen4: imagen4,
        },
        descripcion: [
          {
            type: "p",
            content:
              "Nuestro merchandising personalizado está pensado para resaltar la identidad de tu marca y/o evento especial. Creamos piezas únicas que destacan y comunican tu mensaje de manera distintiva.",
          },
          {
            type: "p",
            content:
              "Disponibles en una variedad de colores, formas y tamaños, te brindamos una amplia gama de opciones de diseño para personalizar tus artículos según tus preferencias.",
          },
        ],
      },
    ];
  
    // Convierte el objeto de imágenes en un array de valores
    const imagenesArray = Object.values(informacionProducto[0].imagenes);
    /* const parrafosArray = Object.values(informacionProducto[0].descripcion); */
    const imagenesMobileArray = Object.values(
      informacionProducto[0].imagenesMobile
    );

    return (
      <div>
        <CreadorSecciones
          titulo={informacionProducto[0].titulo}
          imagenes={imagenesArray}
          imagenesMobile={imagenesMobileArray}
          descripcion={informacionProducto[0].descripcion}
          caruselEnDesktop="Gorros"
          caruselMobile= ""
        />
  
        
        <div className="section-presupuesto-objetos" id="pedidoCompraList">
          <ObjetosPedidosCompraList titulo= {informacionProducto[0].titulo} />
        </div>
      </div>
    );
}

export default Gorros