import { mockItem } from '../item/item.mock';
import { mockList } from '../list/list.mock';
import { ListType, Section } from '../section/section';

import { mockHeader } from './../header/header.mock';
import { Sidebar } from './sidebar';

export const mockSidebarList: Section = {
  title: 'test title',
  listType: ListType.EDUCATION,
  items: [mockItem],
  list: [mockList]
};

export const mockSidebar: Sidebar = {
  header: mockHeader,
  sections: [mockSidebarList]
};
