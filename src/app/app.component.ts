import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, AboutComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
