import { mockList } from '../list/list.mock';

import { ListType, Section } from './section';

export const mockSection: Section = {
  listType: ListType.EDUCATION,
  title: 'test title',
  icon: 'test icon',
  list: [mockList]
};
