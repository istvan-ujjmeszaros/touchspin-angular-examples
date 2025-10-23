import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TouchSpinVanillaComponent } from '@touchspin/angular/vanilla';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TouchSpinVanillaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test-angular-20');
  value1 = 10;
}
