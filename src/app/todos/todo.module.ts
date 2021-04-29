import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FiltrosPipe } from '../pipes/filtros.pipe';


@NgModule({
  declarations: [TodoAddComponent, TodoFooterComponent, TodoItemComponent, TodoListComponent, TodoPageComponent, FiltrosPipe],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [TodoPageComponent]
})
export class TodoModule { }
 