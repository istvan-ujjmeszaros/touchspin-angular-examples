import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TouchSpinVanillaComponent } from '@touchspin/angular/vanilla';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TouchSpinVanillaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular-19';
  value1 = 10;
}
