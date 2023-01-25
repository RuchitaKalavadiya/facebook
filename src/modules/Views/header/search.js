import "./style.css";
import { SearchLogo } from "../../../assets/headerLogo";
import { TextField } from "@mui/material";

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
