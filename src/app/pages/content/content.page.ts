import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
logScrollStart(){
  console.log("Scroll iniciado")
}
logScrollEnd(){
  console.log('Scroll parou')
}
logScrolling(e){
console.log(e)
}
}
