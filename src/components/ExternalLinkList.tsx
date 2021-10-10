import React from 'react';

import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import FontAwesomeIcon from '@/components/FontAwesomeIcon';
import Link from '@/components/Link';
import { ExternalLink } from '@/data/links';
import useFontawesome from '@/hooks/useFontawesome';

interface ExternalLinkListProps {
  links: ExternalLink[];
}

const ExternalLinkList: React.VFC<ExternalLinkListProps> = (props) => {
  useFontawesome();

  return (
    <Grid container>
      {props.links.map((link) => {
        return (
          <Grid item xs={6} key={link.label}>
            <ListItem disablePadding>
              <ListItemButton component={Link} href={link.url}>
                <ListItemIcon>
                  <FontAwesomeIcon
                    stylePrefix={link.stylePrefix}
                    iconName={link.iconName}
                  />
                </ListItemIcon>
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ExternalLinkList;
