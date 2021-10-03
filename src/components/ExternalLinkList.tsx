import { ExternalLink } from '@/data/links';
import React from 'react';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from '@/components/Link';

interface ExternalLinkListProps {
  links: ExternalLink[]
}

const ExternalLinkList: React.VFC<ExternalLinkListProps> = (props) => {
  return (
    <Grid container>
      {props.links.map(link => {
        const LinkIcon = link.icon;
        return (
          <Grid item xs={6} key={link.label}>
            <ListItem disablePadding>
              <ListItemButton component={Link} href={link.url}>
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          </Grid>
        );
      })}
    </Grid>
  )
}

export default ExternalLinkList;
