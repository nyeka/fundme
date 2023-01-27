import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { connectWeb3 } from "../utils/connect";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <Typography>{localStorage.getItem("address")}</Typography>
      {localStorage.getItem("btn") === "connected" ? (
        <Button>Connected</Button>
      ) : (
        <Button variant="contained" onClick={connectWeb3}>
          connect address
        </Button>
      )}
    </Box>
  );
};

export default Navbar;
