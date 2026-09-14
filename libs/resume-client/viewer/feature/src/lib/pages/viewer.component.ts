import { Component, inject, input, OnInit } from '@angular/core';
import { Resume } from '@resume/shared/types';

import { Title } from '@angular/platform-browser';
import { MainComponent } from '../components/main/main.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  imports: [MainComponent, SidebarComponent],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent implements OnInit {
  readonly resume = input.required<Resume>();

  private readonly titleService = inject(Title);

  ngOnInit(): void {
    this.updateDocumentTitle();
  }

  private buildFullName(): string {
    const resume = this.resume();
    if (resume) {
      const { firstname, lastname } = resume.sidebar.header;
      return `${firstname} ${lastname}`;
    }
    return '';
  }

  private updateDocumentTitle(): void {
    const fullName = this.buildFullName();
    if (fullName) {
      this.titleService.setTitle(`Resume - ${fullName}`);
    }
  }
}
