import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const Layout = (props) => {
    return(
  <Container>
 {props.children}
  </Container>
)
    }
export default  Layout;