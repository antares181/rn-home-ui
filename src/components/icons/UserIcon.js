import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { colors } from '../../assets/styles/colors';

const UserIcon = ({fillColor, strokeColor, width, height}) => {
  return (
    <Svg width={width || 24} height={height || 24} viewBox="0 0 24 24">
      <Path  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" fill={fillColor || 'none'} stroke={strokeColor || colors.Grey} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path  d="M20 19V21H4V19C4 17.9391 4.42143 16.9217 5.17157 16.1716C5.92172 15.4214 6.93913 15 8 15H16C17.0609 15 18.0783 15.4214 18.8284 16.1716C19.5786 16.9217 20 17.9391 20 19Z" fill={fillColor || 'none'} stroke={strokeColor || colors.Grey} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" fill={fillColor || 'none'} stroke={strokeColor || colors.Grey} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path  d="M20 19V21H4V19C4 17.9391 4.42143 16.9217 5.17157 16.1716C5.92172 15.4214 6.93913 15 8 15H16C17.0609 15 18.0783 15.4214 18.8284 16.1716C19.5786 16.9217 20 17.9391 20 19Z" fill={fillColor || 'none'} stroke={strokeColor || colors.Grey} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  )
}

export default UserIcon;