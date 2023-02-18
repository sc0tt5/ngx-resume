import { Header } from '../header/header';
import { Section } from '../section/section';
import { Sidebar } from '../sidebar/sidebar';

export interface Resume {
  header: Header;
  sections: Section[];
  intro: string;
  sideBar: Sidebar[];
}
