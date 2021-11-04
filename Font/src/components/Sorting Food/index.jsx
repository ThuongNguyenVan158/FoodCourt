import * as React from "react";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SortingFood() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box style={{ marginTop: 30 }}>
      <FormControl sx={{ m: 1, minWidth: 500 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>SORTING</em>
          </MenuItem>
          <MenuItem value={10}>Price</MenuItem>
          <MenuItem value={20}>Rating</MenuItem>
          <MenuItem value={30}>Order Quantity</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
