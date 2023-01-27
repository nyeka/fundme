import React from "react";
import Fundme from "../components/fundme";
import { Box } from "@mui/material";
import WithdrawFund from "../components/withdraw";

const Push = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Fundme />
      <WithdrawFund />
    </Box>
  );
};

export default Push;
