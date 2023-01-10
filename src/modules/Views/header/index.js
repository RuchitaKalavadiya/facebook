import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import Facebook from "../../../assets/facebook.png";
import { Message, Notification } from "../../../assets/headerLogo.jsx";
import user from "../../../assets/user.jpg";
import Search from '../header/search'

export default function Header() {
  return (
    <>
      <Container fluid className="facebook-header-wrapper">
        <Container fluid>
          <Row className="facebook-header-row">
            <Col lg>
              <div className="">
                <img src={Facebook} className="facebook-logo" />
              </div>
            </Col>
            <Col>
              <Search />
            </Col>
            <Col className="text-end">
              <div className="facebook-header-icons">
                <div className="facebook-header-icon-wrapper">
                  <div className="facebook-header-icon">
                    <Message />
                  </div>
                </div>
                <div className="facebook-header-icon-wrapper">
                  <div className="facebook-header-icon">
                    <Notification />
                  </div>
                </div>
                <div className="facebook-header-icon-wrapper">
                  <img src={user} className="facebook-header-user" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
