import {Platform,useColorScheme} from 'react-native';
import React, {FC} from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from './colors';

interface Props {
  color?: string;
  name: string;
  size: number;
  material?: boolean;
}
const platformName = Platform.OS,
    platformAbr: 'md' | 'ios' = platformName === 'android' ? 'md' : 'ios';

const Icon: FC<Props> = ({
  color, material, size, name}
) => {
  const theme: any = useColorScheme()
  return (
    material ?
  <MaterialIcons 
  name={name} 
  size={size || 20} 
   color={color || colors[theme].text} />:
   <IonIcons
   name={platformAbr + ['-' + name]}
   size={size || 20}
   color={color 
       // ||
       //  colors.defaultIcon
       }
/>
)} 

export default Icon;
