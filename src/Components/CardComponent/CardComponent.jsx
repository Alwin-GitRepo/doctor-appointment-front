import React from 'react'
import Card from 'react-bootstrap/Card';
import './CardComponent.css'
import { Link } from 'react-router-dom';
import DoctorView from '../DoctorView/DoctorView';

function CardComponent(doctor) {
  return (
    <div>
      <Link to={`/view/${doctor.doctor.id}`} style={{textDecoration:'none'}}>
        <Card  style={{ width: '95%' }}>
      {/* <Card.Img variant="top" src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=996&t=st=1696267014~exp=1696267614~hmac=98e5feb2c7bb05e57d26249cd60334cbcc1c407c54833be8e30b9481ee1c665f" /> */}
      {/* <Card.Img variant="top" src="https://img.freepik.com/free-vector/man-doctor-woman-nurse-stand-with-patient-card-medical-staff-uniform-study-discuss-examination-result-make-note-therapist-giving-treatment-recommendation-prescription-putting-signature_575670-1316.jpg?w=740&t=st=1696269798~exp=1696270398~hmac=22f0dbab288eabdd6bd046d4fa2e1aa48c8474242a00a3037e9de36bc2ff6b79" /> */}
      {/* <Card.Img variant="top" src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=740&t=st=1696270078~exp=1696270678~hmac=95da432bcb0de34f6691da382b6bd1f2fe12de7d5d84bb48e447030f5dbdb77f" /> */}
      <Card.Body>
        <Card.Title className='text-light bg-warning p-2 text-center'>{doctor.doctor.name}</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Speciality:  {doctor.doctor.specialty}</Card.Subtitle> */}
        <Card.Text>
            <span className='text-danger fw-bold'>Speciality:</span> {doctor.doctor.specialty} <br />
            <span className='text-danger fw-bold'>Hospital:</span> {doctor.doctor.hospital}  <br />
            <span className='text-danger fw-bold'>Address: </span>{doctor.doctor.address}
        </Card.Text>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
    </Card>
      </Link>
    </div>
  )
}

export default CardComponent