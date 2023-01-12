import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignIn.css'
import googleLogo from '../../assets/4394274_google_logo_logos_icon.png';
import fbLogo from '../../assets/211901_facebook_social_icon.png';
import linkedInLogo from '../../assets/6214710_linkedin_logo_icon.png';
import twitterLogo from '../../assets/6214703_bird_logo_twitter_icon.png';
import signInPicture from '../../assets/Illustration.png';
import { useNavigate } from 'react-router-dom';

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginValidation, setLoginValidation] = useState({
    emailCheck: true,
    passwordCheck: true
  });

  const navigate = useNavigate();

  const handleSignIn = () => {
    if (email !== "" && password !== "") {
      setLoginValidation(
        {
          emailCheck: true,
          passwordCheck: true
        }
      );
      navigate('/homepage')
    } else {
      setLoginValidation(
        {
          emailCheck: email === "" ? false : true,
          passwordCheck: password === "" ? false : true
        }
      );
    }
  }

  return (
    <Container>
      <Row className='sign-in-section'>
        <Col xs={12} md={4}>
          <div>
            <h3 className='signIn-text'>Sign In</h3>
          </div>
          <div className='signIn-text'>
            {/* eslint-disable-next-line */}
            New user? <a href="#">Create an account</a>
          </div>
          <div>
            <Form style={{marginTop:'5%'}}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='square border border-dark rounded-0' type="email" placeholder="Username or email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!loginValidation.emailCheck && (
                  <span className='text-danger'>Please enter email</span>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className='square border border-dark rounded-0' type="password" placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {!loginValidation.passwordCheck && (
                  <span className='text-danger'>Please enter password</span>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me signed in" />
              </Form.Group>
              <Button className="w-100 square border border-dark rounded-0" variant="dark" type="button"
                onClick={handleSignIn}
              >
                Sign In
              </Button>
            </Form>
          </div>
          <div style={{ width: "100%", height: "20px", borderBottom: "1px solid black", textAlign: "center", marginTop:'5%' }}>
            <span style={{ fontSize: "15px", backgroundColor: "#F3F5F6", padding: "0 10px" }}>
              Or Sign In with
            </span>
          </div>
          <div>
            <Row className='logo-row'>
              <Col>
                <span>
                  <img className="logo-round" src={googleLogo} alt="google-logo" />
                </span>
              </Col>
              <Col>
                <span>
                  <img className="logo-round" src={fbLogo} alt="fb-logo" />
                </span>
              </Col>
              <Col>
                <span>
                  <img className="logo-round" src={linkedInLogo} alt="linkedIn-logo" />
                </span>
              </Col>
              <Col>
                <span>
                  <img className="logo-round" src={twitterLogo} alt="twitter-logo" />
                </span>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={12} md={4}></Col>
        <Col xs={12} md={4} className="signInPic-section">
          <img src={signInPicture} alt="sign-in-logo" />
        </Col>
      </Row>
    </Container>
  )
}

export default SignIn