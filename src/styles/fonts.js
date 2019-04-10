import { css } from '@emotion/core';

import RobotoRegularFont from './../assets/fonts/Roboto/Roboto-Regular-webfont.woff';
import RobotoBoldFont from './../assets/fonts/Roboto/Roboto-Bold-webfont.woff';
import RobotoMediumFont from './../assets/fonts/Roboto/Roboto-Medium-webfont.woff';
import RobotoLightFont from './../assets/fonts/Roboto/Roboto-Light-webfont.woff';
import RobotoCondensedRegularFont from './../assets/fonts/Roboto_Condensed/RobotoCondensed-Regular-webfont.woff';
import RobotoCondensedBoldFont from './../assets/fonts/Roboto_Condensed/RobotoCondensed-Bold-webfont.woff';
import RobotoCondensedLightFont from './../assets/fonts/Roboto_Condensed/RobotoCondensed-Light-webfont.woff';

const fonts = css`
  /* Roboto */
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegularFont}) format('woff');
    font-weight: normal;
    font-style: 400;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBoldFont}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLightFont}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMediumFont}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  /* Roboto Condensed */
  @font-face {
    font-family: 'Roboto Condensed';
    src: url(${RobotoCondensedRegularFont}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto Condensed';
    src: url(${RobotoCondensedBoldFont}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto Condensed';
    src: url(${RobotoCondensedLightFont}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`;

export { fonts };
