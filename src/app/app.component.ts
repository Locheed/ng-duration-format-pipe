import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private test_value_ms = 0;
  private test_value_seconds = 0;

ngOnInit() {
  setInterval(() => {
      this.test_value_ms += 1000;
      this.test_value_seconds++;
    }, 1000);
  }
}
