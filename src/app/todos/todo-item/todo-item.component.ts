import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../models/Todo';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('editInput') editInput: ElementRef;

  checkComplete: FormControl;
  editText: FormControl;
  editing: boolean;

  constructor() {
    this.editing = false;
  }

  ngOnInit(): void {
    this.checkComplete = new FormControl(this.todo.state);
    this.editText = new FormControl(this.todo.text, Validators.required);
  }

  edit() {
    this.editing = true;
    setTimeout(() => {
      this.editInput.nativeElement.focus();
    }, 1);
  }

  endEdition() {
    this.editing = false;

    this.todo.text = this.editText.value;
  }

}
