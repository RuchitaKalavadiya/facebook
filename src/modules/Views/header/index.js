import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import Facebook from "../../../assets/facebook.png";

export default function Header() {
  return (
    <>
      <Container fluid className="facebook-header-wrapper">
        <header>
          <Row>
            <Col>
              <div className="">
                <img src={Facebook} className="facebook-logo" />
              </div>
            </Col>
          </Row>
        </header>
      </Container>
    </>
  );
}
