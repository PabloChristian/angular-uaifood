import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {

  nome: string = '';
  numero: string = '';
  rua: string = '';
  bairro: string = '';
  complemento: string = '';
  troco: string = '';

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
  }

  concluirPedido(): void {
    let texto = `*Nome:* ${this.nome};\n*Bairro:* ${this.bairro};\n*Rua:* ${this.rua};\n*Número:* ${this.numero};\n*Complemento:* ${this.complemento};\n*Troco para:* ${this.troco}\n\n`;
    let textoURI = encodeURIComponent(texto);

    window.open(`https://api.whatsapp.com/send?phone=5585996455918&text=${textoURI}${this.pedidoService.pedidoURI}`);
    
  }
}
