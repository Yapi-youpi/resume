import { Component, input } from '@angular/core';
import type { ResumeHeaderData } from '../../models/resume.model';

@Component({
  selector: 'app-resume-header',
  standalone: true,
  templateUrl: './resume-header.component.html',
  styleUrl: './resume-header.component.scss',
})
export class ResumeHeaderComponent {
  readonly data = input.required<ResumeHeaderData>();
}
