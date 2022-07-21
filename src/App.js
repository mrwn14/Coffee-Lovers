
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Rectangle5 from './images/Rectangle 5.png'; 
import Rectangle6 from './images/Rectangle 6.png';
import Rectangle7 from './images/Rectangle 7.png'
import "./index.css";
import Carousel from "./components/Carousel.js";
import "./components/MDBAccordion";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import BMachines from './components/MDBAccordion';
import "./components/i18next";
import Translate from './components/translate';
import { useTranslation } from 'react-i18next';


function App() {
  const { t, i18n } = useTranslation();

    function handleChangeLng(theLang) {
        i18n.changeLanguage(theLang);
        localStorage.setItem("lng", theLang);
    }; 
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="sticky-top">
        <Container>
          <Navbar.Brand href="#home">Coffee Lovers ☕️</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        <Translate handleLang= {handleChangeLng}></Translate>
      </Navbar>
      {/* Lead page */}
      <div className="content position-relative text-center align-items-center">
        <div className="mainPage position-absolute top-50 start-50 translate-middle text-white">
          <h1 className="py-1">Coffee Lovers</h1>
          <h1 className="py-5">{t("whoareWe")}</h1>
          <Button>Get Started</Button>
        </div>
      </div>
      {/* cards page*/}
      <div className="brews">
        <Card className="brew">
          <Card.Img src={Rectangle5} className="images" />
          <Card.Body className="testing text-white">
            <Card.Title>Espresso, The classic</Card.Title>
            <Card.Text>If you want something done right you've got to do it yourself. For many of us, a cup of coffee is one of our most enjoyed rituals of the day. Having your own espresso machine gives you the chance to turn those everyday coffee grinds into an aromatic delight from the comfort of your own kitchen. These machines specialize in concentrated coffee that’s far more flavourful and full-bodied than the product of a standard drip coffee maker.</Card.Text>
            <Button>Click Here</Button>
          </Card.Body>
        </Card>
        <Card className="brew">
          <Card.Img src={Rectangle6} className="images" />
          <Card.Body className="testing text-white">
            <Card.Title>Filter Coffee, brewed</Card.Title>
            <Card.Text>Traditional filter coffee makers have stood the test of time for their convenience and ability to brew large quantities of classic American-style coffee. Drip coffee makers are different from pour over and other types of coffee machines in that they're manual — the user gets to choose the heat of the water and brew the coffee. Plus, with today's rising coffee prices, nothing beats a homemade filter coffee.</Card.Text>
            <Button>Click Here</Button>
          </Card.Body>
        </Card>
        <Card className="brew">
          <Card.Img src={Rectangle7} className="images"/>
          <Card.Body className="testing text-white">
            <Card.Title>Moka Pot</Card.Title>
            <Card.Text>The moka pot is a stove-top or electric coffee maker that brews coffee by passing boiling water pressurised by steam through ground coffee. Spreading from Italy, the moka pot is today most commonly used in Europe and in Latin America.</Card.Text>
            <Button>Click Here</Button>
          </Card.Body>
        </Card>
      </div>
      <Carousel></Carousel>
      <BMachines></BMachines>
    </div>
  );
}

export default App;
