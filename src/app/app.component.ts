import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminDashboard';
  
  sidebar:boolean=true
  sideBarOpen(){
    this.sidebar=!this.sidebar
  }
}
