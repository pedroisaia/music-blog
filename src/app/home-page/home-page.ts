import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  template: 
  `
    <div class="home-container">
      <h1>Bem-vindo à Leaves Shop!</h1>
      <p>Explore nossa coleção de produtos inspirados na natureza e encontre o que combina com você.</p>
    </div>
  `,
  styles: [
    `
      
      .home-container {
        background: radial-gradient(circle at center, #fafaeb 0%, #B8BAAD 40%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* Fill the entire window */
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      
    `,
  ],
  })
export class HomePage {

}