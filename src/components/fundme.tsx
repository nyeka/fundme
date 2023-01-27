import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import FormDialog from "../dialog/modal";

const Fundme = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        marginTop: "50px",
      }}
    >
      {open && <FormDialog open={open} close={handleClose} />}
      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Button variant="contained" onClick={handleClickOpen}>
          Fund
        </Button>
      </Box>
    </Box>
  );
};

export default Fundme;
