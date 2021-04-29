import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../models/Todo';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

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

  constructor(private store: Store<AppState>) {
    this.editing = false;
  }

  ngOnInit(): void {
    this.checkComplete = new FormControl(this.todo.state);
    this.editText = new FormControl(this.todo.text, Validators.required);

    this.checkComplete.valueChanges.subscribe(value => {
      this.store.dispatch(actions.cambiarEstado({ id: this.todo.id }));
    })
  }

  edit() {
    this.editing = true;
    setTimeout(() => {
      this.editInput.nativeElement.focus();
    }, 1);
  }

  endEdition() {
    this.editing = false;
    if (this.editText.invalid) {
      this.editText.setValue(this.todo.text);
      return;
    }
    if (this.todo.text === this.editText.value) { return; }
    this.store.dispatch(actions.editarTexto({ id: this.todo.id, text: this.editText.value }))
    // this.todo.text = this.editText.value;
  }

  deleteText() {
    this.store.dispatch(actions.borrarTexto({ id: this.todo.id }))
  }

}
