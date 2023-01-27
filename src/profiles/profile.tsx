import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState<any>();
  const url = "https://api.github.com/users/nyeka";

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await axios.get(`${url}`);
        setProfile(user.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [url]);

  return (
    <Box>
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 2,
          padding: "20px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "gray",
          }}
        >
          Welcome to my Dapp
        </Typography>
        <a href={profile?.html_url}>
          <Avatar
            alt="nyeka"
            src={profile?.avatar_url}
            sx={{
              width: 100,
              height: 100,
            }}
          />
        </a>
        <Typography
          variant="h5"
          sx={{
            color: "gray",
          }}
        >
          fundMe Dapps by {profile?.login}
        </Typography>
        <Typography
          sx={{
            color: "gray",
          }}
        >
          this Dapps is about funding a project and get paid back with interest
          in a short period of time
        </Typography>
        <Typography
          sx={{
            color: "gray",
          }}
        >
          this dapps smart contract is created using solidity language and
          deployed on the ethereum blockchain
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;
