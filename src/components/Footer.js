import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
const Footer = () => {
  return (
    <div> 
     <footer>
        <Container>
            <Row>
                <Col className='text-center my-4'> 
                Copyright &#169; Tekpa Dyes and Chemicals Pyt Ltd.
                </Col>
            </Row>
        </Container>
     </footer>
    </div> 
  )
}

export default Footer