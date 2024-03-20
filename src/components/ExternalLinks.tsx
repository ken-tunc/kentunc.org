import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ReactNode } from "react";

type Link = {
  label: string;
  url: string;
  component: ReactNode;
};

const links: Link[] = [
  {
    label: "GitHub",
    url: "https://github.com/ken-tunc",
    component: <GitHubIcon />,
  },
  {
    label: "X",
    url: "https://x.com/ken_tunc",
    component: <XIcon />,
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/people/%E7%94%B0%E5%8F%A3-%E5%81%A5%E4%BB%8B/100006489850788/",
    component: <FacebookIcon />,
  },
  {
    label: "Email",
    url: "mailto:tunc.adfuisses.53@gmail.com",
    component: <EmailIcon />,
  },
] as const;

export const ExternalLinks: React.FC = () => {
  return (
    <Grid container>
      {links.map((link) => (
        <Grid item xs={6} key={link.label}>
          <ListItem disablePadding>
            <ListItemButton component="a" href={link.url} target="_blank">
              <ListItemIcon>{link.component}</ListItemIcon>
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        </Grid>
      ))}
    </Grid>
  );
};
