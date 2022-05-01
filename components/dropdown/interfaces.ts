import { ReactText } from "react";

export interface ListItem {
  id?: ReactText;
  title: string;
  icon?: string;
  onPress?: () => void;
}

export interface DropdownProps {
  isOpen?: boolean;
  handleTrigger?: () => void;
  list?: ListItem[];
}
