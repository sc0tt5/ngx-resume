import { mockResume } from '@ngx-resume/shared/models';

import { resumeViewerSelectors } from './viewer.selectors';

describe('resumeViewerSelectors', () => {
  describe('selectHeader', () => {
    it('selectHeader should return the header of the resume', () => {
      expect(resumeViewerSelectors.selectHeader.projector(mockResume)).toEqual(mockResume.header);
    });
  });

  describe('selectIntro', () => {
    it('selectIntro should return the intro of the resume', () => {
      expect(resumeViewerSelectors.selectIntro.projector(mockResume)).toEqual(mockResume.intro);
    });
  });

  describe('selectSections', () => {
    it('selectSections should return the sections of the resume', () => {
      expect(resumeViewerSelectors.selectSections.projector(mockResume)).toEqual(mockResume.sections);
    });
  });

  describe('selectSidebar', () => {
    it('selectSidebar should return the sidebar of the resume', () => {
      expect(resumeViewerSelectors.selectSidebar.projector(mockResume)).toEqual(mockResume.sideBar);
    });
  });
});
