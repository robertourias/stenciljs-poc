import { Component, Prop } from "@stencil/core";

@Component({
  tag: "app-todo",
  styleUrl: "app-todo.css",
  shadow: true
})
export class AppCard {
  @Prop()
  tarefas: Array<{ feito: boolean; descricao: string }> = [];

  render() {
    return (
      <div class="todo">
        <h2 class="titulo">TODO list</h2>
        <div class="input">
          <div>
            <label class="input--descricao">Nova tarefa</label>
            <input type="text" class="input--campo" />
          </div>
          <button class="input--botao">Adicionar</button>
        </div>
        <div class="lista">
          {this.tarefas.length > 0 ? (
            this.tarefas.map(tarefa => (
              <div class="tarefa">
                <div>
                  <input type="checkbox" class="tarefa--alterar" />
                  <label class="tarefa--descricao">{tarefa.descricao}</label>
                </div>
                <button class="tarefa--excluir">Excluir</button>
              </div>
            ))
          ) : (
            <h2 class="lista--vazia">Você não possui tarefas!</h2>
          )}
        </div>
      </div>
    );
  }
}
