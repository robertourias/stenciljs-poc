import { Component } from '@stencil/core';

@Component({
  tag: 'todo-container',
  styleUrl: "todo-container.css",
  shadow: true
})
export class TodoComponent {

    render() {
        return (<app-todo></app-todo>);
    }
}