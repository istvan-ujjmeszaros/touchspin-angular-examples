import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TouchSpinVanillaComponent } from '@touchspin/angular/vanilla';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TouchSpinVanillaComponent],
  template: `
    <div class="container">
      <h1>TouchSpin Angular Test</h1>

      <div class="demo">
        <h2>Basic Spinner</h2>
        <touch-spin
          name="value1"
          [(ngModel)]="value1"
          [min]="0"
          [max]="100"
          [step]="1">
        </touch-spin>
        <p>Value: {{ value1 }}</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }
    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 2rem;
    }
    .demo {
      margin: 2rem 0;
      padding: 1.5rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: #f9f9f9;
    }
    .demo h2 {
      margin-bottom: 1rem;
      color: #555;
      font-size: 1.2rem;
    }
    .demo p {
      margin-top: 1rem;
      color: #666;
      font-weight: 500;
    }
  `]
})
export class AppComponent {
  value1 = 10;
  value2 = 25.50;
}
