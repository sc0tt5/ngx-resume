import { Header } from './header.model';
import { Section } from './section.model';

export class Resume {
    header: Header;
    sections: Section[];
    intro: string;
    sideBar: any;
}
