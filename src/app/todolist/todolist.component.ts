import { Component, OnInit } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }

}
