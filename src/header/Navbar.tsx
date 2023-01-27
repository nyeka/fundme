import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { connectWeb3 } from "../utils/connect";

const Navbar = () => {
  useEffect(() => {
    if (localStorage.getItem("btn") === "connected") {
      localStorage.setItem("address", window.ethereum.selectedAddress);
      console.log("connected");
    } else {
      console.log("not connected");
    }
  }, []);
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
