import { Component, input } from '@angular/core';
import type { ProjectItemData } from '../../models/resume.model';

@Component({
  selector: 'app-project-item',
  standalone: true,
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss',
})
export class ProjectItemComponent {
  readonly data = input.required<ProjectItemData>();
}
