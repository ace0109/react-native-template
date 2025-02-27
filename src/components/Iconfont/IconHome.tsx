/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconHome: FunctionComponent<Props> = ({ size=18, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1100 1024" width={size} height={size} {...rest}>
      <Path
        d="M93.28586336 487.33822016H53.61256546a53.61256384 53.61256384 0 0 1-34.31204033-94.35811539L446.0565448 37.52879639a160.83769696 160.83769696 0 0 1 205.87225097 0l428.900523 355.45130884a53.61256384 53.61256384 0 0 1-34.31204163 94.89424062h-39.6732982a26.80628266 26.80628266 0 0 0-26.80628332 26.80628221v348.48167548a160.83769696 160.83769696 0 0 1-160.83769563 160.83769598h-53.61256517a107.22513086 107.22513086 0 0 1-107.22513093-107.22513107v-160.8376958a107.22513086 107.22513086 0 0 0-107.22513096-107.22513127 107.22513086 107.22513086 0 0 0-107.22513007 107.22513127v160.8376958a107.22513086 107.22513086 0 0 1-107.22513232 107.22513107h-53.61256477a160.83769696 160.83769696 0 0 1-160.83769719-160.83769548V514.14450324a26.80628266 26.80628266 0 0 0-28.95078522-26.80628308z"
        fill={getIconColor(color, 0, '#81838F')}
      />
    </Svg>
  );
};

IconHome = React.memo ? React.memo(IconHome) : IconHome;

export default IconHome;
