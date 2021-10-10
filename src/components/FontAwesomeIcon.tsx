import React from 'react';

import { Icon, IconProps } from '@mui/material';

export type FontAwesomeIconProps = IconProps & {
  stylePrefix: 'fas' | 'fab';
  iconName: string;
};

const FontAwesomeIcon: React.VFC<FontAwesomeIconProps> = (props) => {
  return (
    <Icon
      baseClassName={props.stylePrefix}
      className={props.iconName}
      color={props.color}
      sx={props.sx}
    />
  );
};

export default FontAwesomeIcon;
