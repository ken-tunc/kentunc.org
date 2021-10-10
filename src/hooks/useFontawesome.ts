import React from 'react';

// @ts-ignore
import { loadCSS } from 'fg-loadcss';

/**
 * ref. https://mui.com/components/icons/#font-awesome-2
 */
const useFontawesome = () => {
  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
      // Inject before JSS
      document.querySelector('#font-awesome-css') || document.head.firstChild
    );

    return () => {
      node.parentNode!.removeChild(node);
    };
  }, []);
};

export default useFontawesome;
