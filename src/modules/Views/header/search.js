import "./style.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { SearchLogo } from "../../../assets/headerLogo";
export default function Search() {
  return (
    <>
      <InputGroup className="facebook-search-field-wrapper">
        <div className="facebooke-seach-icon">
          <SearchLogo />
        </div>
        <Form.Control
          type="text"
          className="form-control facebook-search-field"
          placeholder="Search Facebook"
        />
      </InputGroup>
    </>
  );
}
