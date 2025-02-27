/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconProfile from './IconProfile';
import IconHome from './IconHome';
export { default as IconProfile } from './IconProfile';
export { default as IconHome } from './IconHome';

export type IconNames = 'profile' | 'home';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'profile':
      return <IconProfile key="1" {...rest} />;
    case 'home':
      return <IconHome key="2" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
