import React from "react";
import { Button } from "@mui/material";
import Withdraw from "../utils/withdraw";
import { Box } from "@mui/material";

const WithdrawFund = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Button variant="contained" onClick={Withdraw}>
          Withdraw
        </Button>
      </Box>
    </Box>
  );
};

export default WithdrawFund;
