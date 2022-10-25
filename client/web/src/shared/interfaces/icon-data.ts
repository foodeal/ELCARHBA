import { CSSProperties } from 'react';
import { SxProps } from '@mui/system';

declare type FontSize = 'inherit' | 'large' | 'medium' | 'small';
declare type ColorType = 'inherit' | 'primary' | 'secondary' | 'action' | 'error' | 'disabled';
declare type Prefix = 'material' | 'elcarhba';

export interface IconData {
  name: string;
  prefix: Prefix;
  fontSize?: FontSize;
  type?: ColorType;
  color?: string;
  className?: string;
  style?: CSSProperties;
  sx?: SxProps;
}
