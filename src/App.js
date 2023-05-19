import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './rahenajat.webp';
import bible from './Bible.jpg';
import prasing from './PrasingGod.jpg';
import way from "./Way.jpg";
import testimony1 from "./Testimony.jpg";
import birth1 from "./Birth1.jpg";
import scroll from "./scrollb.jpg";
import jou from "./jou.jpg";
import sermon from "./sermon.jpg";
import attri from "./Attrib1.jpg";
import pro from "./Pro1.jpg";

import {CardGroup, Card, Button,Navbar ,Nav,NavDropdown, Container  } from 'react-bootstrap';
import ResizablePlayer from './components/ResizablePlayer';
import React, { useState } from 'react';
import './App.css';


function App() {
  const [currentLanguage, setCurrentLanguage] = useState('اردو(Urdu)');
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

  const salvation= {
    "English" : "Way of salvation",
    "हिंदुस्तानी उर्दू(Hindustani Urdu)"   : "राह-ए निजात",
    "اردو(Urdu)"    : "راہِ نجات"
  }

  const testimony= {
    "English" : "Events of those who attained salvation",
    "हिंदुस्तानी उर्दू(Hindustani Urdu)"   : "राह निजात हासिल करने वालों के वाक़ियात।",
    "اردو(Urdu)"    : "راہ نجات حاصل کرنے والوں کے واقعات۔"
  }

  const birth= {
    "English" : "Birth",
    "हिंदुस्तानी उर्दू(Hindustani Urdu)"   : "पैदाइश",
    "اردو(Urdu)"    : "پیدائش"
  }

  const sacrifice= {
    "English" : "Sacrifice from Torah, Psalms, Prophets and Gospel",
    "हिंदुस्तानी उर्दू(Hindustani Urdu)"   : "तौरात, ज़बूर, सहाइफ़-ए अंबिया और इंजील से क़ुर्बानी",
    "اردو(Urdu)"    : "توریت زبور صحائف انبیاء اور انجیلِ سے قربانی۔ "
  }

  const journey = {
    "English" : "For a spiritual journey",
    "हिंदुस्तानी उर्दू(Hindustani Urdu)"   : "रूहानी सफ़र के लिए",
    "اردو(Urdu)"    : "روحانی سفر کے لئے."  
  }

  const popular = {
    "English" : "Popular Sermons",
    "हिंदुस्तानी उर्दू(Hindustani Urdu)"   : "मकबूल ख़ुतबात",
    "اردو(Urdu)"    : "مقبول خطبات "  
  }

  const attributes = {
    "English" : "Attributes of Christ",
    "हिंदुस्तानी उर्दू(Hindustani Urdu)"   : "सिफ़ात-ए मसीह",
    "اردو(Urdu)"    : "صفات مسیح"  
  }

  const prophets = {
    "English" : "Events of the Prophets",
    "हिंदुस्तानी उर्दू(Hindustani Urdu)"   : "नबियों के वाक़ियात",
    "اردو(Urdu)"    : "نبیوں کے واقعات "  
  }




  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
  };
  return (
   <>
    <Navbar className='navbar-brand' collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home"><img src={logo}  weign="40" height="40" alt="logo" />RaheNajat.Life</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" >
        
      </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="https://rahenajat.projct.site/">{holybook[currentLanguage]}</Nav.Link>
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
    
      <div id="home"><br/><br/></div>
    <ResizablePlayer  
        url='https://www.youtube.com/embed/5byLqmIo8Zw?autoplay=1&playlist=5byLqmIo8Zw&loop=1' 
        resizePercentage={0.7}
      />

    
    <br/><br/>
    <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
      {text1[currentLanguage]}
    </h2>
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
    <Button href='https://rahenajat.projct.site/' variant="success">{holybook[currentLanguage]}</Button>
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
  <Card.Img variant="top" src={way} />
  <Card.Body>
    {/*<Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>*/}
    <Button variant="success">{salvation[currentLanguage]}</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', margin: '2rem 2rem'  }}>
  <Card.Img variant="top" src={testimony1} />
  <Card.Body>
    {/*<Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>*/}
    <Button variant="success">{testimony[currentLanguage]}</Button>
  </Card.Body>
</Card>
</CardGroup>


</Card>



<div id="sermons"><br/><br/><br/></div>
    <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
      {sermons[currentLanguage]}
    </h2>
    <Card style={{   margin: '2rem 2rem' }}>

<CardGroup>  
<Card style={{ width: '18rem', margin: '2rem 2rem'  }}>
  <Card.Img variant="top" src={birth1} />
  <Card.Body>
    {/*<Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>*/}
    <Button variant="success">{birth[currentLanguage]}</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', margin: '2rem 2rem'  }}>
  <Card.Img variant="top" src={scroll} />
  <Card.Body>
    {/*<Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>*/}
    <Button variant="success">{sacrifice[currentLanguage]}</Button>
  </Card.Body>
</Card>
</CardGroup>
<CardGroup>  
<Card style={{ width: '18rem', margin: '2rem 2rem'  }}>
  <Card.Img variant="top" src={jou} />
  <Card.Body>
    {/*<Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>*/}
    <Button variant="success">{journey[currentLanguage]}</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', margin: '2rem 2rem'  }}>
  <Card.Img variant="top" src={sermon} />
  <Card.Body>
    {/*<Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>*/}
    <Button variant="success">{popular[currentLanguage]}</Button>
  </Card.Body>
</Card>
</CardGroup>

<CardGroup>  
<Card style={{ width: '18rem', margin: '2rem 2rem'  }}>
  <Card.Img variant="top" src={attri} />
  <Card.Body>
    {/*<Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>*/}
    <Button variant="success">{attributes[currentLanguage]}</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', margin: '2rem 2rem'  }}>
  <Card.Img variant="top" src={pro} />
  <Card.Body>
    {/*<Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>*/}
    <Button variant="success">{prophets[currentLanguage]}</Button>
  </Card.Body>
</Card>
</CardGroup>


</Card>
    
    </>
      
    
  );
}

export default App;
