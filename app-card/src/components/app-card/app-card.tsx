import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'app-card',
  styleUrl: 'app-card.css',
  shadow: true,
})
export class AppCard {

  @Prop() titulo: string;
  @Prop() tipo: string;

  render() {
    if(this.tipo === 'option') {
      return (
        <div>
          { this.titulo ? <h2>{this.titulo}</h2> : '' }
          Card de Opção
        </div>
      );
    } else {
      return (
        <div>
          { this.titulo ? <h2>{this.titulo}</h2> : '' }
          Card de Informação
        </div>
      );
    }
  }
}
