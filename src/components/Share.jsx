import { Box, Typography, Button } from "@mui/material";
import IconsContainer from "./IconsContainer";

const css = {
  button: {
    background: "#cf8681",
    fontWeight: "600",
    fontSize: "16px",
    fontFamily: "Inter",
    textTransform: "capitalize",
    "&:hover": { background: "#905f5c" },
  },
  linkContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    background: "#272727",
    borderRadius: "5px",
    p: "5px",
    m: "0 10px 0 10px",
  },
};

export default function Share({setModal}) {
  return (
    <Box
      sx={{
        background: "rgba(0,0,0,.4)",
        width: "100vw",
        height: "92.7vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => setModal(false)}
    >
      <Box
        sx={{
          background: "#0F0F0F",
          borderRadius: "10px",
          color: "#fff",
          letterSpacing: "0em",
          p: "10px 0 15px 0",
          width: "97.5vw",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{ mb: "20px", p: "0 20px 0 20px" }}
        >
          Share
        </Typography>
        <IconsContainer />
        <Box sx={css.linkContainer}>
          <Typography fontFamily="Inter">
            partcuts.com/partcut/1dsF13fa!L
          </Typography>
          <Button
            variant="contianed"
            sx={css.button}
            onClick={() =>  navigator.clipboard.writeText("partcuts.com/partcut/1dsF13fa!L")}
          >
            Copy
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
