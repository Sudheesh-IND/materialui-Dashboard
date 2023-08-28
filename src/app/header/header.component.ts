import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
   
    
  }
  //user defines event when we create an event the event emitter works
  @Output()toggle=new EventEmitter()
  menuIconClicked(){
      this.toggle.emit()
  }

}
