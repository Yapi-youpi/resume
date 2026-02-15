import { Component, input } from '@angular/core';

@Component({
  selector: 'app-resume-section',
  standalone: true,
  templateUrl: './resume-section.component.html',
  styleUrl: './resume-section.component.scss',
})
export class ResumeSectionComponent {
  readonly title = input.required<string>();
}
