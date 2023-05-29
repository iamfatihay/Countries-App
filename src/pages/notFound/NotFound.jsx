import React from 'react';
import { Container } from 'react-bootstrap';
import resim from '../../img/notFound.jpeg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate=useNavigate()

  return (
    <Container className='d-flex justify-content-center align-items-center mt-5'>
      <img src={resim} alt="" width="400px" />
      <button className="btn btn-danger" onClick={()=>navigate("/")} > HOME </button>
    </Container>
  )
}

export default NotFound