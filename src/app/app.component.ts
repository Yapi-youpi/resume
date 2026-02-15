import { Component, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import type { Theme } from './models/resume.model';

const THEME_KEY = 'resume-theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResumePageComponent],
  template: `<app-resume-page [theme]="theme()" (themeChange)="setTheme($event)" />`,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
      }
    `,
  ],
})
export class AppComponent {
  private readonly doc = inject(DOCUMENT);

  readonly theme = signal<Theme>(this.readStoredTheme());

  constructor() {
    effect(() => {
      const t = this.theme();
      this.doc.documentElement.setAttribute('data-theme', t);
      this.doc.defaultView?.localStorage?.setItem(THEME_KEY, t);
    });
  }

  setTheme(value: Theme): void {
    this.theme.set(value);
  }

  private readStoredTheme(): Theme {
    if (this.doc.defaultView?.localStorage) {
      const stored = this.doc.defaultView.localStorage.getItem(THEME_KEY);
      if (stored === 'light' || stored === 'dark') return stored;
    }
    return 'light';
  }
}
