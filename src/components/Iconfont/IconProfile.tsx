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

let IconProfile: FunctionComponent<Props> = ({ size=18, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M503.053017 535.46522c131.505898 0 238.513898-103.536814 238.50522-230.851254 0-127.305763-106.999322-230.851254-238.50522-230.851254-131.505898 0-238.50522 103.580203-238.50522 230.851254s106.999322 230.851254 238.50522 230.851254z m98.286644 22.224272H422.634305C256.564068 557.689492 121.491525 688.336271 121.491525 848.974102v17.286508c0 83.976678 132.911729 83.976678 301.14278 83.976678h178.705356c161.609763 0 301.168814 0 301.168814-83.976678v-17.286508c0-160.603119-135.098576-291.28461-301.168814-291.28461z"
        fill={getIconColor(color, 0, '#A0A0A0')}
      />
    </Svg>
  );
};

IconProfile = React.memo ? React.memo(IconProfile) : IconProfile;

export default IconProfile;
