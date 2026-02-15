import { Component, computed, inject, input, output, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { resumeData } from '../../data/resume.data';
import type { ResumeData, Theme } from '../../models/resume.model';
import { ResumeHeaderComponent } from '../../components/resume-header/resume-header.component';
import { ResumeSectionComponent } from '../../components/resume-section/resume-section.component';
import { SkillBadgeComponent } from '../../components/skill-badge/skill-badge.component';
import { ExperienceItemComponent } from '../../components/experience-item/experience-item.component';
import { ProjectItemComponent } from '../../components/project-item/project-item.component';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.scss',
  imports: [
    ResumeHeaderComponent,
    ResumeSectionComponent,
    SkillBadgeComponent,
    ExperienceItemComponent,
    ProjectItemComponent,
  ],
})
export class ResumePageComponent {
  private readonly doc = inject(DOCUMENT);

  readonly theme = input.required<Theme>();
  readonly themeChange = output<Theme>();

  readonly data = signal<ResumeData>(resumeData);

  print(): void {
    this.doc.defaultView?.print();
  }

  readonly header = computed(() => this.data().header);
  readonly aboutMe = computed(() => this.data().aboutMe);
  readonly skills = computed(() => this.data().skills);
  readonly experience = computed(() => this.data().experience);
  readonly projects = computed(() => this.data().projects);
  readonly education = computed(() => this.data().education);
  readonly additionalInfo = computed(() => this.data().additionalInfo);

  toggleTheme(): void {
    this.themeChange.emit(this.theme() === 'dark' ? 'light' : 'dark');
  }
}
