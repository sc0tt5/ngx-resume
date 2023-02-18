import { mockHeader } from '../header/header.mock';
import { mockSection } from '../section/section.mock';
import { mockSidebar } from '../sidebar/sidebar.mock';

import { Resume } from './resume';

export const mockResume: Resume = {
  header: mockHeader,
  sections: [mockSection],
  intro: 'Test Intro',
  sideBar: [mockSidebar]
};
