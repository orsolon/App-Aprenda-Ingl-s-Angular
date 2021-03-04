import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

 @Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  
 

  @Input() public tentativas: number

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true), new Coracao(true), 
    new Coracao(true), new Coracao(true), new Coracao(true), new Coracao(true), 
  ]
  
  constructor() { 
    console.log(this.coracoes)
    
  }
  
  ngOnChanges() {
    //this.tentativas
    //this.coracoes.length
    if(this.tentativas !==this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice -1].cheio = false
    }
    console.log('tentativas recebidas do paile', this.tentativas)
  } 
  

  ngOnInit(): void {
    
  }

}
