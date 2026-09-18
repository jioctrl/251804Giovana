import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-detalhe-component',
  standalone: false,
  templateUrl: './produto-detalhe-component.html',
  styleUrl: './produto-detalhe-component.css',
  
})
export class ProdutoDetalheComponent {
  produto!: Produto;

  produtos: Produto[] = [
    { id: 1, nome: 'Produto 1', preco: 10.99, descricao: 'Descrição do Produto 1', emEstoque: true },
    { id: 2, nome: 'Produto 2', preco: 19.99, descricao: 'Descrição do Produto 2', emEstoque: false },
    { id: 3, nome: 'Produto 3', preco: 5.99, descricao: 'Descrição do Produto 3', emEstoque: true },
    { id: 4, nome: 'Produto 4', preco: 15.49, descricao: 'Descrição do Produto 4', emEstoque: true },
    { id: 5, nome: 'Produto 5', preco: 8.75, descricao: 'Descrição do Produto 5', emEstoque: false },
    { id: 6, nome: 'Produto 6', preco: 12.99, descricao: 'Descrição do Produto 6', emEstoque: true },
    { id: 7, nome: 'Produto 7', preco: 22.50, descricao: 'Descrição do Produto 7', emEstoque: true },
    { id: 8, nome: 'Produto 8', preco: 18.00, descricao: 'Descrição do Produto 8', emEstoque: false }
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.produtos.find(produto => produto.id === id)!;
  }
}