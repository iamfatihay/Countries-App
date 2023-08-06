import React from 'react';
import { Container } from 'react-bootstrap';
import resim from '../../img/notFound.jpeg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate=useNavigate()

  return (
    <Container className='d-flex flex-column justify-content-center align-items-center mt-5'>
      <img className='mt-5' src={resim} alt="img" width="600px"/>
      <button className="btn btn-primary" onClick={()=>navigate("/")} > HOME </button>
    </Container>
  )
}

export default NotFound