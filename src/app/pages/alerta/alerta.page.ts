import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async alert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: ['OK']
    })
    await alert.present()
  }

  async multiple() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    })
    await alert.present()
  }

  async confirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'This <strong>text</strong>!!!',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm cancel: blah')
        }
      }, {
        text: 'okay',
        handler: () => {
          console.log('Confirm okay')
        }
      }]
    })
    await alert.present()
  }

  async prompt() {
    const alert = await this.alertCtrl.create({
      header: 'Acesso restrito!',
      inputs: [{
        name: 'email',
        type: 'text',
        placeholder: 'Informe seu E-mail'
      },
      {
        name: 'senha',
        type: 'password',
        id: 'password',
        value: 'hello',
        placeholder: 'Informe sua senha',
      },      
    ],
    buttons: [
      {        
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm cancel: blah')
          }
        }, {
          text: 'okay',
          handler: (form) => {
            console.log(form)
          }
        }      
    ]
    })
    await alert.present()
  }
}
