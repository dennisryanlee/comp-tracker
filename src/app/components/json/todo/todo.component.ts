import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../header/header.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css', '../../../app.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;

  constructor() {}

  ngOnInit(): void {}
}
