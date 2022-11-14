import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentData = 'parent data from parent component';
  parentDataforChild = 'child data from parent component';
  childData = ''

  onPassingData($event: string){
    this.childData = $event
  }
}
