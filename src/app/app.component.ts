import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hkt-app';

  ngOnInit() {
    this.isMobileMenu();
  }

  isMobileMenu() {
    setTimeout(() => {
      if (window && window.innerWidth > 991) {
        console.log(window.innerWidth);
  
        return false;
      }
      return true;
    }, 1000);
    
  }
}
