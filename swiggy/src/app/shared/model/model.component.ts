import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {
  @Input()opened: boolean = false
  @Output() closed = new EventEmitter<boolean>()

  CloseModel(){
    this.opened = false
    this.closed.emit(this.opened)
  }
}
