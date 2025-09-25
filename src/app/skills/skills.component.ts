import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

    skills: WritableSignal<string[]> = signal([
    'HTML',
    'CSS',
    'SCSS',
    'Bootstrap',
    'Tailwind CSS',
    'JavaScript',
    'TypeScript',
    'jQuery',
    'Angular (Angular 2+)',
    'NgRx',
    'RxJS',
    'Karma',
    'Git',
    'Vercel',
    'Figma',
  ]);

}
