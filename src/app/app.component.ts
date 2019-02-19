import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  open = true;
  title = 'qiqo-state';
  toggle() { this.open = !this.open; }
}
