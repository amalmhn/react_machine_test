import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomePage.css'
import Footer from '../Footer/Footer';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

function HomePage() {

    const [countryDetails, setCountryDetails] = useState([])

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all?fields=name,region,flag')
            .then((res) => {
                let response = res.data;
                setCountryDetails(response);
                // let response = 
            }).catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <>
            {countryDetails.length === 0 ? (
                <Spinner
                    animation="grow"
                    role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <div>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="#"><strong>Countries</strong></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                ></Nav>
                                <Form className="d-flex">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >
                                        <Nav.Link href="#">All</Nav.Link>
                                        <Nav.Link href="#">Asia</Nav.Link>
                                        <Nav.Link href="#">Europe</Nav.Link>
                                    </Nav>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Container>
                        <Row style={{marginTop:'5%'}}>
                            {countryDetails?.map((country, index) => {
                                return (
                                    <Col xs={12} md={6} className="country-section">
                                        <div className='d-flex'>
                                            <img
                                                className='flag-img'
                                                src={country.flag} alt="flag" />
                                            <div className='county-details'>
                                                <h5>{country.name}</h5><br />
                                                <span>{country.region}</span>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                    <div style={countryDetails?.length === 0 ? { marginTop: '25%' } : { marginTop: '0px' }}>
                        <Footer />
                    </div>
                </div>
            )}
        </>
    )
}

export default HomePage