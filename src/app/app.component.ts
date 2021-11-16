import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input';
  now: Date = new Date();

  refresh(value: string) {
    this.title = value;
  }
}
