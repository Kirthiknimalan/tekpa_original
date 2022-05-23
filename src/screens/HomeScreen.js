import React from 'react'
import {Row,Col,Carousel} from 'react-bootstrap'
import Product from '../components/Product'
import {products} from '../products'
import './home.css'
const HomeScreen = () => {
  return (
    <div>
      <div className='container mw-100' >
      <div className="home1">
        <Row className=""> 
           <Col md={4} className="justify-content-center row align-items-center">
            <div className="">
                <img className="img-responsive center-block d-block mx-auto" src="/images/home1.jfif" alt='home' width="300" height="300"/>
            </div>             
          </Col>
          <Col md={8} className="justify-content-center row align-items-center">
           <div className="col-xs-1 text-center align-middle my-5 home1">
                <h2>Dyes,Pigments,Specialites and Fast developing Salts</h2>
                <h6>We are in Business of Colours Since 1980 and Best wholesale seller in Ind</h6>
           </div>             
          </Col>
        </Row>
      </div> 
        <Row>
         <Col md={6} sm={12} className="justify-content-center row align-items-center">
            <div className="col-xs-1 text-center align-middle my-5">
                        <h1 className='fw-2 lh-lg'>The Summer sale is <span className="mark">ON</span> 
                        <br/>30% Discount on Bulk purchases, seize the occasion!!</h1>
                        <a href='/cart' className='btn btn-outline-dark text-uppercase my-5'>buy now</a>
            </div>
        </Col>
        <Col md={6}>
          <Carousel className="justify-content-center mt-20">
          <Carousel.Item className="text-center" interval={1400}>
              <img
                className="img-responsive center-block d-block mx-auto"
                src="/images/slider1.jfif"
                alt="First slide"
                width="300"
                height="400"
              />
          </Carousel.Item>
          <Carousel.Item interval={1400}>
            <img
              className="img-responsive center-block d-block mx-auto"
              src="/images/slider2.jfif"
              alt="Second slide"
              width="300"
                height="400"
            />
          </Carousel.Item>
          <Carousel.Item interval={1400}>
            <img
              className="img-responsive center-block d-block mx-auto"
              src="/images/slider3.jfif"
              alt="Third slide"
              width="300"
                height="400"
            />
          </Carousel.Item>
        </Carousel>
        </Col>
        </Row>
      </div>
      <div>
        <h1> Top Products</h1>
        <Row>
            {products.map(product=> (
                <Col key={product._id} sm={9} md={6} lg={4} xl={3}>
                  <Product  product ={product}/>
                </Col>
            ))}
        </Row>
      </div> 
    </div>
  )
}

export default HomeScreen