import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[]=[];
  constructor() {
    // this.localItem=JSON.parse(localStorage.getItem("todos") || '{}');
    // if(this.localItem==null){
    //   this.todos=[];
    // }
    // else{
    //   this.todos=this.localItem;
    // }
    const localItem = localStorage.getItem('todos');
this.todos = localItem !== null ? JSON.parse(localItem) : [];

   }
 
  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  markDoneTodo(todo : Todo){
    const index=this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
