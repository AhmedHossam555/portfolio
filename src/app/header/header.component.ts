import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  onToggle(){
    const toggle = document.querySelector(".toggle") as HTMLElement;
    toggle.classList.toggle('active');
    const aside = document.querySelector(".aside") as HTMLElement;
    aside.classList.toggle('hidden');
    const body = document.body as HTMLElement;
    body.classList.toggle('layer')
  }
}
