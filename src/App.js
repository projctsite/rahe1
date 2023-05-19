import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './rahenajat.webp';
import bible from './Bible.jpg';
import prasing from './PrasingGod.jpg';

import {CardGroup, Card, Button,Navbar ,Nav,NavDropdown, Container  } from 'react-bootstrap';
import ResizablePlayer from './components/ResizablePlayer';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const holybook = {
    "English" : "HOLY BOOK",
    "हिंदुस्तानी उर्दू(Hindustani Urdu)"   : "किताब ए मुकद्दस",
    "اردو(Urdu)"    : "کتاب مقدس"
  }

  const sermons = {
    "English" : "SERMONS",
    "हिंदुस्तानी उर्दू(Hindustani Urdu)"   : "ख़ुतबात",
    "اردو(Urdu)"    : "خطبات"
  }

  const contact = {
    "English" : "CONTACT",
    "हिंदुस्तानी उर्दू(Hindustani Urdu)"   : "राब्ता",
    "اردو(Urdu)"    : "رابطہ"
  }

  const text1 ={
    "English" : "What do you want to find here?",
    "हिंदुस्तानी उर्दू(Hindustani Urdu)"   : "आप यहां क्या तलाश करना चाहते हैं",
    "اردو(Urdu)"    : "آپ یہاں کیا تلاش کرنا چاہتے ہیں؟"
  }

  const praisingGod= {
    "English" : "Praising God",
    "हिंदुस्तानी उर्दू(Hindustani Urdu)"   : "ख़ुदा की तारीफ़",
    "اردو(Urdu)"    : "خدا کی تعریف"
  }


  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
  };
  return (
   <>
    <Navbar className='navbar-brand' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={logo}  weign="40" height="40" alt="logo" />RaheNajat.Life</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" >
        
      </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="#holybook">{holybook[currentLanguage]}</Nav.Link>
            <Nav.Link href="#sermons">{sermons[currentLanguage]}</Nav.Link>
            <Nav.Link href="#contact">{contact[currentLanguage]}</Nav.Link>

          </Nav>
          <Nav>

            <NavDropdown title={currentLanguage} id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => handleLanguageChange('اردو(Urdu)')}>اردو</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLanguageChange('हिंदुस्तानी उर्दू(Hindustani Urdu)')}>
                हिंदुस्तानी उर्दू
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleLanguageChange('English')}>
              English
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      
    <ResizablePlayer  
        url='https://www.youtube.com/embed/5byLqmIo8Zw?autoplay=1&playlist=5byLqmIo8Zw&loop=1' 
        resizePercentage={0.7}
      />

    <br/><br/>
    <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
      {text1[currentLanguage]}
    </h2>
    <Container className="d-flex justify-content-center">
    <Card style={{   margin: '2rem 2rem' }}>

    <CardGroup>  
    <Card style={{ width: '18rem', margin: '2rem 2rem'  }}>
      <Card.Img variant="top" src={bible} />
      <Card.Body>
        {/*<Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>*/}
        <Button variant="success">{holybook[currentLanguage]}</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin: '2rem 2rem'  }}>
      <Card.Img variant="top" src={prasing} />
      <Card.Body>
        {/*<Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>*/}
        <Button variant="success">{praisingGod[currentLanguage]}</Button>
      </Card.Body>
    </Card>
    </CardGroup>
    <CardGroup>  
    <Card style={{ width: '18rem', margin: '2rem 2rem'  }}>
      <Card.Img variant="top" src={bible} />
      <Card.Body>
        {/*<Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>*/}
        <Button variant="success">{holybook[currentLanguage]}</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin: '2rem 2rem'  }}>
      <Card.Img variant="top" src={bible} />
      <Card.Body>
        {/*<Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>*/}
        <Button variant="success">{holybook[currentLanguage]}</Button>
      </Card.Body>
    </Card>
    </CardGroup>


    </Card>
    </Container>
    </>
      
    
  );
}

export default App;
