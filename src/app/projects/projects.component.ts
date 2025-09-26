import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

    projects = signal([{  
      title: 'LeadGen (Landing Page)',
      img: 'assets/projects/leadgen.png',
      alt: 'leadgen',
      website: 'https://lead-gen-ruddy.vercel.app/',
      repo: 'https://github.com/AhmedHossam555/LeadGen.git',
      delay: '600ms'
    },
    {
      title: 'Trendzy (Ecommerce App)',
      img: 'assets/projects/Trendzy.png',
      alt: 'trendzy',
      website: 'https://ecommerce-kohl-iota.vercel.app',
      repo: 'https://github.com/AhmedHossam555/Ecommerce.git',
      delay: '650ms'
    },
    {
      title: 'Note App',
      img: 'assets/projects/note-app.png',
      alt: 'noteapp',
      website: 'https://note-app-bay-three.vercel.app',
      repo: 'https://github.com/AhmedHossam555/note-app.git',
      delay: '700ms'
    },
    {
      title: 'Social App',
      img: 'assets/projects/social.png',
      alt: 'social',
      website: 'https://social-app-ten-ruddy.vercel.app',
      repo: 'https://github.com/AhmedHossam555/social-app.git',
      delay: '750ms'
    },
    {
      title: 'Fresh (Ecommerce App)',
      img: 'assets/projects/freshcard.png',
      alt: 'fresh',
      website: 'https://e-commerce-six-woad.vercel.app',
      repo: 'https://github.com/AhmedHossam555/e-commerce.git',
      delay: '780ms'
    },
    {
      title: 'Gravity Landing Page',
      img: 'assets/projects/gravity.png',
      alt: 'gravity',
      website: 'https://gravity-smoky.vercel.app',
      repo: 'https://github.com/AhmedHossam555/gravity.git',
      delay: '800ms'
    },
    {
      title: 'OOP-Game-War',
      img: 'assets/projects/game_war.png',
      alt: 'gamewar',
      website: 'https://oop-war-game.vercel.app/',
      repo: 'https://github.com/AhmedHossam555/OOP-War-Game.git',
      delay: '830ms'
    }
  ]);

}
