import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-about-page',
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  template: 
  `
    <div class="about-container">
      <h1>SOBRE MIM</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec arcu nec sapien dictum
      cursus vel at mauris. Integer sed neque in lacus  tempus vehicula id vitae dolor. 
      Vestibulum porta vitae risus et  consectetur. Fusce nec sollicitudin erat, non maximus leo.
      </p>
      
      <div class="carousel-viewport">
        <div class="carousel-track">
          
          @for (img of displayImages; track $index) {
            <div class="slide-panel">
              <img [src]="img" alt="Gallery panel">
            </div>
          }

        </div>
      </div>

      <p>
      Fusce porttitor ligula id nisi dictum, in pretium lacus hendrerit. Morbi laoreet mattis erat, vel placerat diam volutpat eget. 
      Nulla finibus a  libero ac interdum. Nullam convallis sed augue sed lacinia. Mauris  libero purus, blandit quis turpis semper, 
      laoreet finibus mi. Maecenas  gravida dolor sed posuere rutrum. Donec nec eros elit. Proin id  dignissim neque, id maximus sapien.
      </p>
      <p>
      Nullam sed dignissim quam, a imperdiet nisl. Fusce finibus tortor sed mi eleifend maximus.
      Morbi vitae imperdiet turpis. Aliquam quam ipsum,  euismod nec euismod molestie, faucibus id magna.
      In enim ex, posuere in  tempus at, malesuada eget tortor. Suspendisse
      </p>

      <div class="hero-footer">
        <img 
          src="https://picsum.photos/id/1050/1920/1080" 
          alt="A beautiful large showcase of our shop" 
          loading="lazy" 
        />
      </div>

      <p>
      Aenean in blandit felis, in aliquet felis. Aliquam vel turpis vitae neque consectetur laoreet in sed magna. 
      Morbi consequat eros euismod libero suscipit, vel efficitur dui rhoncus. Aenean sagittis dictum justo, nec vulputate nulla
      euismod a. Vestibulum ligula nunc, vehicula quis gravida et, suscipit sed massa. Duis eros elit, cursus eget condimentum sit amet,
      vestibulum nec nisi. Suspendisse sit amet lorem maximus, cursus nunc eu, consequat elit. Fusce auctor est non sem vehicula 
      dictum. Aenean vehicula, lacus eu posuere pellentesque, risus purus posuere eros, nec facilisis leo neque in justo. Phasellus
      ultricies bibendum turpis, ut pellentesque orci dignissim ut. In hac habitasse platea dictumst. In varius pellentesque est, 
      sed interdum neque maximus eget. Phasellus suscipit tempus lorem, ac tristique sem faucibus a. Mauris maximus ligula non nibh 
      pulvinar, non blandit purus maximus. 
      </p>

      <div class="action-links">
        <a href="https://instagram.com/sua_loja" target="_blank" rel="noopener" class="btn instagram-btn">
          <i class="fa-brands fa-instagram"></i> Siga nosso Instagram
        </a>
        <a href="https://suanewsletter.com" target="_blank" rel="noopener" class="btn newsletter-btn">
          Assine a Newsletter
        </a>
      </div>
      
    </div>
  `,
  styles: [
    `
      .about-container {
        background: radial-gradient(circle at center, #fafaeb 0%, #B8BAAD 40%);
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 100%;
        height: 215vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      .about-container h1 {
        text-align: left;
        margin-top: 100px;
        margin-left: 150px;
        font-size: 40px;
        font-weight: 600;
        letter-spacing: -2px;
        margin-bottom: -5px;
        font-family: 'Bebas Neue', sans-serif;
      }

      .about-container p {
        font-size: 19px;
        text-align: left;
        margin-left: 150px;
        margin-right: 100px;
        margin-bottom: 20px;
        font-family: 'Helvetica Neue', sans-serif;
      }

      .carousel-viewport {
        
        position: relative;
        width: 100vw;
        margin-left: calc(-50vw + 50%);
        margin-top: 0;
        margin-bottom: 20px;
        background: #111;
      }

      .carousel-track {
        display: flex;
        width: max-content;
        animation: scrollPanel 200s linear infinite;
      }

      .carousel-track:hover {
        animation-play-state: paused;
      }

      .slide-panel {
        flex: 0 0 500px;
        width: 500px;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .slide-panel img {
        width: 100%;
        height: 400px; 
        display: block;
        
        object-fit: cover;
        object-position: center; 


        border-right: 2px solid #222;
      }

      @keyframes scrollPanel {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .hero-footer {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 800px;
        margin-left: 25%;
        margin-top: 20px;
        margin-bottom: 20px;
      }

      .hero-footer img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      .action-links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem; /* Espaço entre os botões */
        margin-top: 4rem; /* Distância do texto acima */
        flex-wrap: wrap; /* Se a tela for muito pequena (celular), eles quebram de linha */
        margin-bottom: 20px;
      }

      .btn {
        display: inline-block;
        padding: 0.8rem 2rem;
        border-radius: 50px; /* Formato de pílula arredondada */
        font-size: 1rem;
        font-weight: 600;
        text-decoration: none; /* Remove o sublinhado padrão dos links */
        transition: all 0.3s ease; /* Animação suave */
        box-shadow: 0 4px 15px rgba(0,0,0,0.1); /* Sombrinha elegante */
      }

      .btn:hover {
        transform: translateY(-3px); /* Levanta o botão um pouquinho */
        box-shadow: 0 8px 25px rgba(0,0,0,0.2); /* Aumenta a sombra */
      }

      .instagram-btn {
        background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
        color: white;
      }

      .newsletter-btn {
        background-color: #222;
        color: white;
        border: 2px solid #222;
      }

      .newsletter-btn:hover {
        background-color: transparent;
        color: #222; /* Inverte as cores no hover */
      }
    `,
  ],
})
export class AboutPage {

  private baseImages = [
    'https://picsum.photos/id/1018/800/600',
    'https://picsum.photos/id/1015/800/600',
    'https://picsum.photos/id/1019/800/600',
    'https://picsum.photos/id/1016/800/600',
    'https://picsum.photos/id/1011/800/600'
  ];

  displayImages = [...this.baseImages, ...this.baseImages];
}