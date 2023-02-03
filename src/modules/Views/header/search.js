import "./style.css";
import { SearchLogo } from "../../../assets/headerLogo";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
// import usePrevious from "../../hooks/UsePrevious";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("1");
  const [queryInterval, setQueryInterval] = useState(null);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 5;
  const loading = open && options.length === 0;

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  useEffect(() => {
    // const prevQuery = usePrevious(searchQuery);
    clearTimeout(queryInterval);
    // console.log("prevQuery", prevQuery);

    const interval = setTimeout(async () => {
      const data = await fetchDataByQuery(searchQuery);
      console.log("data", data);
    }, 1000);
    setQueryInterval(interval);
  }, [searchQuery]);

  const fetchDataByQuery = async (query) => {
    try {
      return await fetch(
        `'https://jsonplaceholder.typicode.com/posts?userId=${query}'`
      ).then((response) => response.json());
    } catch (error) {
      console.error("[failed at fetchDataByQuery]", { error });
    }
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
        getOptionLabel={(option) => option.year + " - " + option.title}
        filterOptions={(x) => x}
        loading={loading}
        noOptionsText="No result found!"
        renderInput={(params) => (
          <TextField
            {...params}
            value={searchQuery}
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
              setSearchQuery(event.target.value);
            }}
          />
        )}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
