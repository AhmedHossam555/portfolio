import { isPlatformBrowser } from '@angular/common';
import { Directive, inject, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true
})
export class FadeInDirective {
  private _plat = inject(PLATFORM_ID);
  constructor() { 
  }
  ngOnInit() {
    if(isPlatformBrowser(this._plat)){
      const observe = new IntersectionObserver((entries)=>{
        entries.forEach((entrie)=>{
          if(entrie.isIntersecting){
            entrie.target.classList.add('show')
          }
        })
      })
      document.querySelectorAll(".hiddens").forEach((ele)=> observe.observe(ele))
    }

  }

}
