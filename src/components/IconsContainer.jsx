import { Box, Typography } from "@mui/material";
import whatsappIcon from "../assets/whatsapp.svg";
import emailIcon from "../assets/email.svg";
import twitterIcon from "../assets/twitter.svg";
import redditIcon from "../assets/reddit.svg";
import discordIcon from "../assets/discord.svg";
import telegramIcon from "../assets/telegram.svg";

const url = "https://www.google.com"
const message = "Veni%20a%20googlearte%20algo%20pá"

const platforms = [
  { icon: whatsappIcon, title: "Whatsapp", href: `https://api.whatsapp.com/send?text=${url}${message}`},
  { icon: emailIcon, title: "Email",href: "" },
  { icon: twitterIcon, title: "Twitter", href: ""  },
  { icon: redditIcon, title: "Reddit", href: ""  },
  { icon: discordIcon, title: "Discord", href: ""  },
  { icon: telegramIcon, title: "Telegram", href: `tg:msg_url?url=${url}&text=${message}`  },
];

const css = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    rowGap: "10px",
    width: "100%",
    mb: "20px",
  },
  link: { display: "flex", flexDirection: "column", color: "#fff", textDecoration: "none"},
};
export default function IconsContainer() {
  return (
    <Box sx={css.container}>
      {platforms.map((platform) => (
        <Box
          href={platform.href}
          sx={css.link}
          component="a"
        >
          <Box
            component="img"
            alt={platform.title + "icon"}
            src={platform.icon}
            sx={{ width: "73px", margin: "0 auto 2px auto" }}
          />
          <Typography
            sx={css.text}
            fontFamily="Inter"
            variant="subtitle1"
            fontWeight="500"
            textAlign="center"
          >
            {platform.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
