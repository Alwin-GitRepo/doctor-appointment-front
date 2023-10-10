import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

function DoctorView() {
    const {id} = useParams();
    const [doctors,setDoctors] = useState({})
    const fetchData = async() =>{
        const {data} = await axios.get(`http://localhost:3001/doctors/${id}`);
        setDoctors(data);
        // console.log(data);
    }
    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div>
        <Container>
      <Row>
        <Col sm={12} md={6} className='d-flex align-items-center'>
        <Card className='p-5' style={{ width: '90%' }}>
      <Card.Body>
        <Card.Title className='fs-3 text-primary fw-bolder'>{doctors.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-success">{doctors.specialty}</Card.Subtitle>
        <Card.Text>
            {doctors.address}
        </Card.Text>
        <Card.Link href="#" style={{textDecoration:'none'}} className='text-danger'>{doctors.phone}</Card.Link> <br />
        <Card.Link href="#" style={{textDecoration:'none'}} className='text-warning'>{doctors.email}</Card.Link>
      </Card.Body>
    </Card>
        </Col>

        <Col sm={12} md={6} className='py-5' style={{height:'75vh'}}>
        <ListGroup className='p-5 mt-5'>
      <ListGroup.Item active variant='warning mt-4'>{doctors.name}</ListGroup.Item>
      <ListGroup.Item><span className='text-danger fw-bold'>specialty :</span> {doctors.specialty}</ListGroup.Item>
      <ListGroup.Item><span className='text-danger fw-bold'>Address :</span>{doctors.address}</ListGroup.Item>
      <ListGroup.Item><span className='text-danger fw-bold'>Working Hours :</span> {doctors.available_hours}</ListGroup.Item>
      <ListGroup.Item><span className='text-danger fw-bold'>Rating :</span> {doctors.rating}</ListGroup.Item>
    </ListGroup>
        </Col>

      </Row>
    </Container>
    </div>
  )
}

export default DoctorView