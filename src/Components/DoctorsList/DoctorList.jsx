import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CardComponent from '../CardComponent/CardComponent';
import axios from 'axios';

function DoctorList() {
    const [doctors,setDoctors] = useState([])
    const fetchData = async()=>{
        const response = await axios.get('http://localhost:3001/doctors');
        setDoctors(response.data);
    }
    console.log(doctors);
    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='bg-light'>
        <Container className='py-4'>
        <Row>
            {doctors.map(item=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <CardComponent doctor = {item} />
            </Col>
            )
            )}
        </Row>
        </Container>
    </div>
  )
}

export default DoctorList