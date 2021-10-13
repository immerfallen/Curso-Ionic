import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {


  nome: string = ''
  pessoas: any
  pessoasFiltradas: any
  constructor() {
    this.pessoas = [
      {id: 1, idade: 13, nome: "Paulo"},
      {id: 2, idade: 23, nome: "Paula"},
      {id: 3, idade: 49, nome: "Joao"},
      {id: 4, idade: 25, nome: "Silvio"},
      {id: 5, idade: 96, nome: "Ricardo"},
      {id: 6, idade: 22, nome: "Joana"},
      {id: 7, idade: 36, nome: "Joy"},
      {id: 8, idade: 33, nome: "Pe de pano"},
      {id: 9, idade: 42, nome: "Loucura"},      
    ]
    this.pessoasFiltradas = this.pessoas
   }

  ngOnInit() {
  }

  filtrarItens(e){
    this.nome = e.target.value.toLowerCase()
    console.log(this.nome)
    this.pessoasFiltradas = this.filtrarPessoas(this.nome)
  }

  filtrarPessoas(nome){
    this.pessoasFiltradas = this.pessoas
    return this.pessoasFiltradas.filter((item)=>{
      return item.nome.toLowerCase().includes(nome.toLowerCase())
    })
  }

}
