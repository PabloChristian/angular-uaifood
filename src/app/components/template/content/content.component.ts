import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido/pedido.service';
import { Bebida } from './bebida.model';
import { dadosproduto } from './dados-produto.model';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  produtosArray: dadosproduto[] = [];
  bebidasArray: Bebida[] = [];

  constructor(private produtosService: ProdutosService, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.getprodutos();
  }

  getprodutos() {
    this.produtosService.getProdutos().subscribe(data => {
      this.produtosArray = data.produtos;
      this.bebidasArray = data.bebidas;
    });
  }

  addProdutoPedido(id: number) {
    this.produtosArray.forEach((value)=> {
      if(value.id === id){
        this.pedidoService.getPedidoValues(value.name, value.price);
        this.pedidoService.openSnackBar('Produto adicionado!');
      }
    });
  }

  addBebidaPedido(id: number) {
    this.bebidasArray.forEach((value)=> {
      if(value.id === id){
        this.pedidoService.getPedidoValues(`${value.name} ${value.volume}`, value.price);
        this.pedidoService.openSnackBar('Bebida adicionada!');
      }
    });
  }
}

