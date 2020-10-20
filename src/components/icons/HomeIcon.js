import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { colors } from '../../assets/styles/colors';

const HomeIcon = ({fillColor, strokeColor, width, height}) => {
  return (
    <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
      <Path d="M12 2L3 9V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H9V14H15V22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V9L12 2Z" fill={fillColor || 'none'} stroke={strokeColor || colors.Grey} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  )
}

export default HomeIcon;