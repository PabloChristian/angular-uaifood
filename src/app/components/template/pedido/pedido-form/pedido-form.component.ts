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
    let texto = `Olá! sou o ${this.nome}, acabei de realizar o pedido. Segue os dados:;\nBairro: ${this.bairro};\nRua: ${this.rua};\nNúmero: ${this.numero};\nComplemento: ${this.complemento};\nTroco para: ${this.troco}\n\n`;
    let textoURI = encodeURIComponent(texto);

    window.open(`https://api.whatsapp.com/send?phone=5531999079989&text=${textoURI}${this.pedidoService.pedidoURI}`);
    
  }
}
