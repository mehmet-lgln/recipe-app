import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  childDataforParent = 'parent data from child component'

  @Input() parentDataforChild: string = ''
  @Output() passingData = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  passData(){
    this.passingData.emit(this.childDataforParent)
  }

}
