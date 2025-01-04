import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',

})
export class HeaderComponent {
  private _plat = inject(PLATFORM_ID);
  ngOnInit() {
  if(isPlatformBrowser(this._plat)){
    document.querySelectorAll(".hid").forEach((ele)=>{
      ele.classList.add('show_hid')
    })
  }
  }
  onToggle(){
    const toggle = document.querySelector(".toggle") as HTMLElement;
    toggle.classList.toggle('active');
    const aside = document.querySelector(".aside") as HTMLElement;
    aside.classList.toggle('hidden');
    const body = document.body as HTMLElement;    body.classList.toggle('layer')
  }
}
