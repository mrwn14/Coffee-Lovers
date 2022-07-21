
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
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';


function App() {
  const { t, i18n } = useTranslation();

  function handleChangeLng(theLang) {
    i18n.changeLanguage(theLang);
    localStorage.setItem("lng", theLang);
  };
  function myFunction() {
    alert("Hello! I am an alert box!");
  }
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="sticky-top">
        <Container>
          <Navbar.Brand href="#home">Coffee Lovers ☕️</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">{t("home")}</Nav.Link>
            <Nav.Link href="#1">Coffee</Nav.Link>
            <Nav.Link href="#2">Machines</Nav.Link>
          </Nav>
        </Container>
        <Translate handleLang={handleChangeLng}></Translate>
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
      <div id="1" className="brews">
        <Card className="brew">
          <Card.Img src={Rectangle5} className="images" />
          <Card.Body className="testing text-white">
            <Card.Title>Espresso, The classic</Card.Title>
            <Card.Text>{t("espresso")}</Card.Text>
            <Button>
              <a href="https://www.baristainstitute.com/blog/jori-korhonen/february-2020/9-steps-how-make-perfect-espresso" className="azerty text-white" target="_blank">Click For Method</a>
            </Button>
          </Card.Body>
        </Card>
        <Card className="brew">
          <Card.Img src={Rectangle6} className="images" />
          <Card.Body className="testing text-white">
            <Card.Title>Filter Coffee, brewed</Card.Title>
            <Card.Text>{t("brewedd")}</Card.Text>
            <Button>
              <a href="https://www.vegrecipesofindia.com/filter-coffee-recipe/" className="azerty text-white" target="_blank">Click For Method</a>
            </Button>
          </Card.Body>
        </Card>
        <Card className="brew">
          <Card.Img src={Rectangle7} className="images" />
          <Card.Body className="testing text-white">
            <Card.Title>Moka Pot</Card.Title>
            <Card.Text>{t("mokapot")}</Card.Text>
            <Button>
              <a href="https://bluebottlecoffee.com/brew-guides/bialetti-moka-pot" className="azerty text-white" target="_blank">Click For Method</a>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <Carousel></Carousel>
      <div id="2"></div>
      <BMachines></BMachines>
      <div className="forms">
        <h1>Feedback and Recommendation</h1>
        <MDBInput className="text-white" label='Email input' id='typeEmail' type='email' />
        <MDBTextArea label='Message' id='textAreaExample' rows={4} />
        <button onClick={() => alert("Thanks for your feedback! We will contact you regarding this and let you know if we decide to implement it.")}>
        Submit
        </button>
      </div>


    </div>
  );
}

export default App;
