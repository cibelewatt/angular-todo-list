import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  inputText="";
  editText = "";
  _list: any= [];

  //como faz para usar o construtor??

  constructor() {
  }

  ngOnInit(): void {
  }

  addElement() {
    if (this.inputText == '') {
    }
    else {
        this._list.push(this.inputText);
        this.inputText = '';
    }
  }

  removeElement(index: number) {
    this._list.splice(index, 1);
  }

  //para a funcao de edicao basta clicar em cima do texto q deseja editar
}
