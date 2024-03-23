import { mockBullet } from '../item/item.mock';

import { List } from './list';

export const mockList: List = {
  from: 'test from',
  to: 'test to',
  title: 'test title',
  place: 'test place',
  location: 'test location',
  bullets: [mockBullet]
};
