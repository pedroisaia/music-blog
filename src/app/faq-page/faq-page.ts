import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [CommonModule],
  template:
  `
    <div class="faq-container">
      <h2>DÚVIDAS FREQUENTES</h2>

      <div class="faq-list">
        
        @for (faq of faqs; track faq.question; let i = $index) {
          <div class="faq-item" [class.is-active]="activeIndex() === i">
            
            <button 
              class="faq-question" 
              (click)="toggleFaq(i)" 
              [attr.aria-expanded]="activeIndex() === i"
            >
              <span>{{ faq.question }}</span>
              
              <span class="icon-indicator"></span>
            </button>

            <div class="faq-answer-wrapper">
              <div class="faq-answer-inner">
                <p>{{ faq.answer }}</p>
              </div>
            </div>

          </div>
        }

      </div>
    </div>
  `,
  styles:
  `
    .faq-container {
      background: linear-gradient(to bottom,  #fafaeb 0%, #B8BAAD 80%);
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      height: 120vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    h2 {
      text-align: center;
      font-size: 2.5rem;
      color: #111;
      margin-bottom: 5rem;
      margin-top: 10rem;
      font-family: 'Bebas Neue', sans-serif;
      font-weight: 600;
      letter-spacing: -2px;
    }

    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .faq-item {
      background: #A5CEC7;
      border-radius: 16px;
      overflow: hidden;
      transition: background-color 0.3s ease;
      margin-right: 12rem;
      margin-left: 12rem;
    }

    .faq-item.is-active {
      background: #D9D9D9;
      box-shadow: 0 10px 25px rgba(0,0,0,0.05); /* Highlight the open item */
    }

    .faq-question {
      width: 100%;
      height: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem;
      background: transparent;
      border: none;
      font-family: 'Helvetica Neue', sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      color: #333;
      cursor: pointer;
      text-align: left;
      outline: none;
    }

    .icon-indicator {
      position: relative;
      width: 16px;
      height: 16px;
    }

    .icon-indicator::before,
    .icon-indicator::after {
      content: '';
      position: absolute;
      background-color: #555;
      transition: transform 0.3s ease;
    }
      
    .icon-indicator::before {
      top: 7px; left: 0; width: 16px; height: 2px;
    }

    .icon-indicator::after {
      top: 0; left: 7px; width: 2px; height: 16px;
    }

    .faq-item.is-active .icon-indicator::after {
      transform: rotate(90deg);
    }

    .faq-answer-wrapper {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .faq-item.is-active .faq-answer-wrapper {
      grid-template-rows: 1fr;
    }

    .faq-answer-inner {
      overflow: hidden;
    }

    .faq-answer-inner p {
      padding: 0 2rem 2rem 2rem;
      margin: 0;
      color: #555;
      line-height: 1.6;
      font-weight: 300;
      font-family: 'Helvetica Neue', sans-serif;
      font-size: 1.5rem;
    }
  `,
})

export class FaqPage {
  // 1. The Dataset (Your Key-Value Store)
  faqs = [
    { 
      question: "What materials do you use in your products?", 
      answer: "We prioritize 100% organic and sustainable materials, ensuring our leaves are sourced ethically from local farms." 
    },
    { 
      question: "How long does shipping take?", 
      answer: "Standard shipping takes 3-5 business days. Expedited shipping is available at checkout for 1-2 day delivery." 
    },
    { 
      question: "Can I return a product?", 
      answer: "Absolutely! We offer a 30-day money-back guarantee for all unused items in their original packaging." 
    },
    { 
      question: "Do you ship internationally?", 
      answer: "Currently, we only ship within the country, but we are expanding our logistics pipeline soon!" 
    },
    {
      question: "Is your packaging eco-friendly?",
      answer: "Yes! Sustainability is our core value. All of our packaging is 100% biodegradable, plastic-free, and made from post-consumer recycled materials."
    },
    {
      question: "How do I care for my items to make them last?",
      answer: "To preserve the natural color and texture of your leaves, keep them in a cool, dry place away from direct, harsh sunlight and excess moisture."
    },
    {
      question: "How can I track my order?",
      answer: "As soon as your package leaves our warehouse, you will receive an automated email containing a tracking link so you can follow its journey in real-time."
    },
    {
      question: "Do you offer wholesale or bulk pricing?",
      answer: "We certainly do! If you are planning a large event or want to stock our products in your retail shop, please reach out to our support team for bulk discount rates."
    }
  ];

  // 2. The State Tracker (Null means all are closed)
  activeIndex = signal<number | null>(null);

  // 3. The Toggle Action
  toggleFaq(index: number) {
    // If the clicked index is already open, close it (set to null). Otherwise, open it.
    this.activeIndex.update(current => current === index ? null : index);
  }
}