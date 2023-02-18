import { Item } from '../item/item';

export interface Sidebar {
  title: string;
  listType: string;
  items: Item[];
}
