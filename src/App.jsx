import React, { useState } from "react";
import "./App.css";
import { Box, Typography, Button } from "@mui/material";
import useBreakpoint from "./hooks/useBreakpoint";
import Share from "./components/Share";
const App = () => {
  const matches = useBreakpoint("sm");
  const [modal, setModal] = useState(false);

  const title = "Something";
  const text = "Hello, please come visit my website";
  const url = "www.website.com.br";

  // const canonical = document.querySelector("link[rel=canonical]");
  // let url = canonical ? canonical.href : document.location.href;
  // const shareDetails = { url, title, text };
  const shareData = {
    url: `https://share.toogoodtogo.com/store/1006/milestones/meals-saved/`,
  };
  if (!navigator.canShare) {
    alert("navigator.canShare() not supported.");
  } else if (navigator.canShare(shareData)) {
    alert(
      "navigator.canShare() supported. We can use navigator.share() to send the data."
    );
  } else {
    alert("Specified data cannot be shared.");
  }

  const handleShareButton = () => {
    // Check if navigator.share is supported by the browser
    if (navigator.share) {
      console.log("Congrats! Your browser supports Web Share API");
      navigator
        .share({
          url: `https://share.toogoodtogo.com/store/1006/milestones/meals-saved/`,
        })
        .then(() => {
          console.log("Sharing successfull");
        })
        .catch(() => {
          console.log("Sharing failed");
        });
    } else {
      console.log("Sorry! Your browser does not support Web Share API");
    }
  };

  return (
    <Box>
      {!matches ? (
        <Button variant="contained" onClick={handleShareButton}>
          SHARE
        </Button>
      ) : (
        <Button variant="contained" onClick={() => setModal(true)}>
          SHARE
        </Button>
      )}
      {modal && <Share setModal={setModal} />}
    </Box>
  );
};

export default App;
