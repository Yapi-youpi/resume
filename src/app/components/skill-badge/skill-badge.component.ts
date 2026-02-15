import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  templateUrl: './skill-badge.component.html',
  styleUrl: './skill-badge.component.scss',
})
export class SkillBadgeComponent {
  readonly label = input.required<string>();
}
