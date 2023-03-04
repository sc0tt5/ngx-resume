import { Item } from '../item/item';
import { List } from '../list/list';

export const enum ListType {
  EDUCATION = 'education',
  EXPERIENCE = 'experience',
  HEADER = 'header',
  INTRO = 'intro',
  LINKS = 'links',
  RATING = 'rating'
}

export interface Section {
  listType: ListType;
  title: string;
  icon?: string;
  items?: Item[]; // todo: merge with list
  list?: List[];
  text?: string;
}
