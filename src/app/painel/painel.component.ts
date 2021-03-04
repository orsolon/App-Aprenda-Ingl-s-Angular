import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = "Traduza a frase:"
  public resposta: string

  //se o usuario acertar vai para fase seguinte e cada rodada vai abrir uma nova frase
  public rodada: number = 0 //vai de 0 até array.length
  public rodadaFrase: Frase //exibe a frase da rodada

  public progresso: number = 0
  
  constructor() { 
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase) }

  ngOnInit(): void { 
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }

  public verificarResposta(): void {
    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert('A traducao esta correta')
      //trocar a pergunta da rodada
        this.rodada++
      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      console.log(this.progresso)
      //atualiza o objeto frase da rodada
        this.rodadaFrase = this.frases[this.rodada]
    } else {
      alert('A traducão está errada')
    }
    
    
  }

}
