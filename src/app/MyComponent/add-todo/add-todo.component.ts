import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addEvent: EventEmitter < Todo > =new EventEmitter();
  title: string="";
  desc: string="";
  constructor() {

   }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo=
    {
    title: this.title,
    desc: this.desc,
    active:true
  };
  this.title="";
  this.desc="";
    this.addEvent.emit(todo);
  }

}
