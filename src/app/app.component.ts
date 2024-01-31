import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
 // calculator.ts
 screenValue: string = '';

  onButtonClick(value: string): void {
    if (value === 'all-clear') {
      this.screenValue = '';
    } else if (value === '=') {
      try {
        this.screenValue = eval(this.screenValue);
      } catch (error) {
        this.screenValue = 'Error';
      }
    } else {
      this.screenValue += value;
    }
  }

}
