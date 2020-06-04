import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css"

class RenderCarousel extends React.Component {
render () {
return <Carousel className = "carousel">
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images-na.ssl-images-amazon.com/images/I/61uSj5vDrqL._AC_UL1000_.jpg"
      alt="First slide"
    />
    <Carousel.Caption className = "caption">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.arstechnica.net/wp-content/uploads/2020/03/LEGO-Super-Mario_red-760x380.jpg"
      alt="Third slide"
    />

    <Carousel.Caption className = "caption">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.shopironons.com/image/cache/data/product/princess-peach-super-mario-t-shirt-iron-on-transfer-decal-3-728-800x800.jpg"
      alt="Third slide"
    />

    <Carousel.Caption className = "caption">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
}
}
  export default RenderCarousel
  