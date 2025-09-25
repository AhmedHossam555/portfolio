import { Component, signal } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
   activities = signal(['Coding', 'Reading', 'Crafting', 'Problem Solving', 'Team Management']);
}
