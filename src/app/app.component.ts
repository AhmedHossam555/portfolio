import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { FadeInDirective } from './shared/direction/fade-in.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, AboutComponent, ProjectsComponent, ContactComponent, FooterComponent,FadeInDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
