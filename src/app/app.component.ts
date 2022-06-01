import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value = 0;
  counter(data) {
    if (data == 'add') {
      this.value++;
    } else {
      if (this.value === 0) {
        return;
      }
      this.value--;
    }
  }
}
