import { Component, input } from '@angular/core';
import type { ExperienceItemData } from '../../models/resume.model';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss',
})
export class ExperienceItemComponent {
  readonly data = input.required<ExperienceItemData>();
}
