import { IconData } from '.';

export interface SelectItemData<T = string> {
  value: T;
  name: string;
  description?: string;
  icon?: IconData;
  tooltip?: string;
  disabled?: boolean;
  selected?: boolean;
  nodeOrder?: number;
  content?: Array<string>;
  tag?: boolean;
  link?: string;
}
