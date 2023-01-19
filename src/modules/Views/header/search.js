import "./style.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { SearchLogo } from "../../../assets/headerLogo";
import { TextField, InputAdornment } from "@mui/material";

export default function Search() {
  return (
    <>
      <TextField
        placeholder="Search Facebook"
        fullWidth
        className="facebook-search-field"
        variant="outlined"
        id="outlined-basic"
        size="small"
        InputProps={{
          startAdornment: (
            <div className="facebooke-seach-icon">
              <SearchLogo />
            </div>
          ),
        }}
        sx={{ outlineColor: "transparent" }}
      />
    </>
  );
}
