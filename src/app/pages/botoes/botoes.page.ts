import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular'

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.page.html',
  styleUrls: ['./botoes.page.scss'],
})
export class BotoesPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  irParaHome(){
    this.nav.navigateForward('home')
  }

}
