import { Component, signal, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { REVIEWS } from '../review.data';

@Component({
  selector: 'app-collection-page',
  imports: [RouterModule, CurrencyPipe, FormsModule],
  template: `
    <div class="shop-container">
      <aside class="sidebar">
        <div class="filter-group">
          <input 
            type="text" 
            placeholder="search..." 
            [ngModel]="searchTerm()" 
            (ngModelChange)="updateSearch($event)"
            class="search-input"
          >
        </div>

        <div class="filter-group">
          <h3 class="filter-title">Genre</h3>
          <div class="filter-options">
            @for (genre of genres; track genre) {
              <button 
                class="filter-btn" 
                [class.active]="selectedGenre() === genre"
                (click)="toggleGenre(genre)">
                {{ genre }}
              </button>
            }
          </div>
        </div>

        <div class="filter-group">
          <h3 class="filter-title">Decade</h3>
          <select class="filter-select" [ngModel]="selectedDecade() || ''" (change)="selectDecade($event)">
            <option value="">All Decades</option>
            @for (decade of decades; track decade) {
              <option [value]="decade">{{ decade }}</option>
            }
          </select>

          @if (selectedDecade()) {
          <div class="filter-group">
            <h3 class="filter-title">Year</h3>
            <select class="filter-select" [ngModel]="selectedYear() || ''" (change)="selectYear($event)">
              <option value="">All Years</option>
              @for (year of availableYears(); track year) {
                <option [value]="year">{{ year }}</option>
              }
            </select>
          </div>
          }

        </div>
        
        <div class="filter-group">
          <h3 class="filter-title">Country</h3>
          <div class="filter-options">
            @for (country of countries; track country) {
              <button 
                class="filter-btn" 
                [class.active]="selectedCountry() === country"
                (click)="toggleCountry(country)">
                {{ country }}
              </button>
            }
          </div>
        </div>
      </aside>

      <div class="main-content">
        <div class="blog-list">
          @for (review of paginatedReviews(); track review.id) {
            <div class="blog-post" (click)="selectedReview.set(review)" [class.active]="selectedReview() === review">
              <div class="post-content">
                <h3 class="post-title">{{ review.name }}</h3>
                <p class="post-description">
                  {{ review.description || 'A brief explanation of the review goes here.' }}
                </p>
                
                <div class="post-meta">
                  <span class="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    {{ review.date || 'Oct 24, 2023' }}
                  </span>
                  <div class="meta-actions">
                    <button class="icon-btn" (click)="$event.preventDefault(); $event.stopPropagation()">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                    <button class="icon-btn" (click)="$event.preventDefault(); $event.stopPropagation()">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <div class="post-image">
                <img [src]="review.image" [alt]="review.name" loading="lazy">
              </div>
            </div>
          }

          @if (totalPages() > 1) {
            <div class="pagination">
              <button 
                class="page-btn" 
                [disabled]="currentPage() === 1"
                (click)="changePage(currentPage() - 1)"
              >
                Previous
              </button>
              
              <span class="page-info">
                Page {{ currentPage() }} of {{ totalPages() }}
              </span>
              <button 
                class="page-btn" 
                [disabled]="currentPage() === totalPages()"
                (click)="changePage(currentPage() + 1)"
              >
                Next
              </button>
            </div>
          }
        </div>

        @if (selectedReview(); as review) {
          <div class="preview-pane">
            <div class="preview-card">
              <div class="preview-image">
                <img [src]="review.image" [alt]="review.name">
              </div>
              <div class="preview-content">
                <h2>{{ review.name }}</h2>
                <div class="preview-meta">
                  <span>{{ review.date }}</span>
                  <span>{{ review.price | currency:'BRL' }}</span>
                </div>
                <p>{{ review.description }}</p>
                <div class="preview-genres">
                  @for (genre of review.genres.split(', '); track genre) {
                    <span class="genre-tag">{{ genre }}</span>
                  }
                </div>
                <a [routerLink]="['/collection-page', review.id]" class="read-more-btn">
                  Read Full Review
                </a>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles:
  `
    .shop-container {
      background: linear-gradient(to bottom,  #000000 0%, #1a1a1a 100%);
      display: flex;
      flex-direction: row;
      position: absolute;
      min-height: 100%;
      width: 100vw;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
      padding: 8rem 2rem;
      align-items: center;
    }

    .sidebar {
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid black;
      box-shadow: 0px 0px 0px 2px white, 0px 5px 0px 2px white;
      border-radius: 20px;
      
      width: 260px;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      
      flex-shrink: 0;
      position: absolute;
      top: 8rem;
      overflow-y: auto;
    }

    .main-content {
      flex: 1;
      margin-left: -200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: calc(100vh - 0.8rem);
      
    }

    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .filter-title {
      font-family: 'IBM Plex Mono', monospace;
      color: #888;
      font-size: 0.9rem;
      text-transform: uppercase;
      margin: 0;
      letter-spacing: 1px;
    }

    .filter-options {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .filter-btn {
      background-color: rgba(255, 255, 255, 0.03);
      border: 1px solid #333;
      color: #888;
      padding: 0.5rem 1rem;
      border-radius: 16px;
      cursor: pointer;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.85rem;
      transition: all 0.2s ease;
    }

    .filter-btn:hover {
      background-color: rgba(255, 255, 255, 0.08);
      color: white;
      transform: translateY(-2px);
    }

    .filter-btn.active {
      background-color: black;
      border: 1px solid black;
      color: white;
      box-shadow: 0px 0px 0px 2px white, 0px 4px 0px 2px white;
      transform: translateY(-2px);
    }

    .filter-select {
      width: 100%;
      background-color: rgba(255, 255, 255, 0.03);
      border: 1px solid #333;
      color: #888;
      padding: 0.5rem;
      border-radius: 8px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.9rem;
      cursor: pointer;
    }

    .search-input {
      width: 100%;
      background: transparent;
      border: none;
      border-bottom: 1px solid #333;
      padding: 1rem 0;
      padding: 0.5rem 0;
      color: white;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 1.2rem;
      font-size: 1rem;
    } 

    .search-input:focus {
      outline: none;
      border-bottom: 1px solid #fff;
    }

    .blog-list {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 1.5rem;
    }

    .blog-post {
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem;
      border: 1px solid #333;
      border-radius: 16px;
      padding: 1.5rem;
      background-color: rgba(255, 255, 255, 0.03);
      transition: background-color 0.3s ease, transform 0.3s ease;
      overflow: hidden;
      cursor: pointer;
    }

    .blog-post:hover {
      background-color: rgba(255, 255, 255, 0.08);
      transform: translateY(-2px);
    }

    .blog-post.active {
      border-color: #fff;
      background-color: rgba(255, 255, 255, 0.08);
      box-shadow: 0px 0px 0px 2px white, 0px 4px 0px 2px white;
      transform: translateY(-2px);
    }

    .post-title {
      font-size: 1.5rem;
      font-weight: 500;
      margin: -0.5rem 0 0.5rem 0;
      color: #f0f0f0;
      font-family: 'IBM Plex Mono', monospace;
      text-transform: lowercase;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .post-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }

    .post-description {
      font-size: 1rem;
      color: #888;
      line-height: 1.4;
      margin: 0;
      font-family: sans-serif;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .post-image {
      width: 120px;
      height: 120px;
      aspect-ratio: 1 / 1;
      background-color: #1a1a1a;
      overflow: hidden;
      border-radius: 8px;
      flex-shrink: 0;
    }

    .post-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .blog-post:hover .post-image img {
      transform: scale(1.05);
    }

    .post-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      bottom: -0.5rem;
      position: relative;
      overflow: visible;
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.2rem;
      color: #888;
      font-family: 'IBM Plex Mono', monospace;
    }

    .meta-actions {
      display: flex;
      gap: 1rem;
    }

    .icon-btn {
      background: none;
      border: none;
      padding: 0;
      color: #888;
      cursor: pointer;
      transition: color 0.2s ease;
      display: flex;
      align-items: center;
    }

    .icon-btn:hover {
      color: #fff;
    }

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-top: 3rem;
      font-family: 'IBM Plex Mono', monospace;
      color: #888;
    }

    .page-btn {
      background: transparent;
      border: 1px solid #333;
      color: #f0f0f0;
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: all 0.2s ease;
      border-radius: 4px;
    }

    .page-btn:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.1);
      border-color: #666;
    }

    .page-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      border-color: #222;
      color: #444;
    }
    
    .page-info {
        font-size: 0.9rem;
    }

    .preview-pane {
      flex: 1; 
      margin-top: 0; 
      position: sticky; 
      top: 0;
      padding: 2rem;
      border: 1px solid #333;
      border-radius: 16px;
      background-color: rgba(255, 255, 255, 0.03);
      box-shadow: 0px 0px 0px 2px white, 0px 5px 0px 2px white;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .preview-pane:hover {
      background-color: rgba(255, 255, 255, 0.08);
      transform: translateY(-2px);
    }
    
    .preview-card {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }

    .preview-image {
      width: 200px;
      height: 200px;
      background-color: #1a1a1a;
      border-radius: 12px;
      overflow: hidden;
      flex-shrink: 0;
    }

    .preview-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    } 

    .read-more-btn {
      display: inline-block;
      background: white;
      color: black;
      padding: 0.8rem 1.5rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      margin-top: 1rem;
      transition: transform 0.2s;
    }

    .read-more-btn:hover {
      transform: scale(1.05);
    }
  `,
})
export class CollectionPage {
  reviews = signal(REVIEWS);
  searchTerm = signal('');
  selectedGenre = signal<string | null>(null);
  selectedDecade = signal<string | null>(null);
  selectedYear = signal<string | null>(null);
  selectedCountry = signal<string | null>(null);
  selectedReview = signal<any | null>(null);

  currentPage = signal(1);
  itemsPerPage = 5;

  genres = ['Rock', 'Pop', 'Jazz', 'Electronic', 'Hip Hop', 'Indie', 'Folk'];
  decades = ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];
  countries = ['USA', 'UK', 'Brazil', 'Japan', 'Germany', 'France', 'Canada'];

  availableYears = computed(() => {
    const decade = this.selectedDecade();
    if (!decade) return [];
    const start = parseInt(decade.replace('s', ''), 10);
    return Array.from({ length: 10 }, (_, i) => (start + i).toString());
  });

  filteredReviews = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const genre = this.selectedGenre();
    const decade = this.selectedDecade();
    const year = this.selectedYear();
    const country = this.selectedCountry();

    return this.reviews().filter((review: any) => {
      const matchesSearch = review.name.toLowerCase().includes(term);
      const matchesGenre = !genre || review.genres.includes(genre);
      const matchesDecade = !decade || review.date.startsWith(decade.slice(0, 3));
      const matchesYear = !year || review.date.startsWith(year);
      const matchesCountry = !country || review.country === country;

      return matchesSearch && matchesGenre && matchesDecade && matchesYear && matchesCountry;
    });
  });

  paginatedReviews = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage;
    return this.filteredReviews().slice(startIndex, startIndex + this.itemsPerPage);
  });

  totalPages = computed(() => {
    return Math.ceil(this.filteredReviews().length / this.itemsPerPage);
  });

  updateSearch(term: string) {
    this.searchTerm.set(term);
    this.currentPage.set(1);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  toggleGenre(genre: string) {
    this.selectedGenre.update(v => v === genre ? null : genre);
    this.currentPage.set(1);
  }

  selectDecade(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    this.selectedDecade.set(val === '' ? null : val);
    this.selectedYear.set(null);
    this.currentPage.set(1);
  }

  selectYear(event: Event) {
    const val = (event.target as HTMLSelectElement).value;
    this.selectedYear.set(val === '' ? null : val);
    this.currentPage.set(1);
  }

  toggleCountry(country: string) {
    this.selectedCountry.update(v => v === country ? null : country);
    this.currentPage.set(1);
  }

  toggleReview(review: any) {
    if (this.selectedReview() === review) {
      this.selectedReview.set(null);
    } else {
      this.selectedReview.set(review);
    }
  }
}