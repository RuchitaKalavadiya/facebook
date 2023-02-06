import "./style.css";
import { SearchLogo } from "../../../assets/headerLogo";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [queryInterval, setQueryInterval] = useState(null);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const limit = 5;
  let history = useNavigate();

  useEffect(() => {
    setOptions([]);
  }, []);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const onQueryChange = async (query) => {
    clearTimeout(queryInterval);
    const interval = setTimeout(async () => {
      const data = await fetchDataByQuery(query);
      setOptions([...data]);
      console.log("data", data);
    }, 1000);

    setQueryInterval(interval);
  };

  const fetchDataByQuery = async (query) => {
    try {
      setLoading(true);
      return await fetch(
        "https://jsonplaceholder.typicode.com/posts?userId=" +
          query +
          "&_limit=" +
          limit
      ).then((response) => response.json());
    } catch (error) {
      console.error("[failed at fetchDataByQuery]", { error });
    } finally {
      setLoading(false);
    }
  };

  const onOptionChange = (event, value) => {
    const { userId } = value;
    history("/search/top?q=" + userId);
    // from here we will continew our next flow of searching
  };

  return (
    <>
      <Autocomplete
        className="autocomplete-search-wrapper"
        id="autocomplete-search"
        fullWidth
        open={open}
        options={options}
        popupIcon={null}
        clearOnBlur={false}
        disableClearable
        getOptionLabel={(option) => option.title} // change this template
        filterOptions={(x) => x}
        loading={loading}
        noOptionsText="No result found!"
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            className="facebook-search-field"
            sx={{ outlineColor: "transparent" }}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <div className="facebooke-seach-icon">
                  <SearchLogo />
                </div>
              ),
            }}
            onChange={(event) => {
              onQueryChange(event.target.value);
            }}
          />
        )}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        onChange={onOptionChange}
      />
    </>
  );
}
