import React from "react"
import{Carousel} from "react-bootstrap"


export default function  BootstrapCarousel() {
    

    return (
      <div>
 <Carousel variant="dark">
  <Carousel.Item>
    <img
      style={{height: 500}}
      className="d-block "
      src="https://www.seguroweb.com.ar/wp-content/uploads/bfi_thumb/AAEAAQAAAAAAAAOIAAAAJDZmYjA2Y2U2LTNlNmMtNDNjMC1hYTFhLTVlNTVhNmVkZTIxNg-30hsjfctvsectkbhorxatm.png"
      alt="Portada"
    />
    <Carousel.Caption>
      <h5>Accesorios para Celulares</h5>
      <p>A mejor precio</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{height: 500}}
      className="d-block"
      src="https://hardzone.es/app/uploads-hardzone.es/2022/01/Newskill-Seth-portada.jpg"
      alt="Segunda portada"
    />
    <Carousel.Caption>
      <h5>Auriculares a mejor precio</h5>
      <p>Solo en Jams-accesories.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{height: 500}}
      className="d-block "
      src="https://seryhumano.com/web/wp-content/uploads/2014/08/accesorios-android.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Productos de Confianza</h5>
      <p>Con solo un click</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

)
}
