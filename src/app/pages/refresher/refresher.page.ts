import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
doRefresh(e){
  console.log('Usuário solicitou atualização')

  setTimeout(()=> {
    console.log('Atualização concluida')
    e.target.complete()
  },2000)

  
}
}
