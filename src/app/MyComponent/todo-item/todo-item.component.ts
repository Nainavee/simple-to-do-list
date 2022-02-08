import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo;
  @Output() deleteEvent: EventEmitter <Todo> =new EventEmitter();
  @Output() checkEvent: EventEmitter <Todo> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo){
    this.deleteEvent.emit(todo);
  }
  onCheckboxClick(todo : Todo){
    this.checkEvent.emit(todo);
  }


}
