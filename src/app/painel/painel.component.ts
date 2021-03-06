import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  public resposta: string = ''

  //se o usuario acertar vai para fase seguinte e cada rodada vai abrir uma nova frase
  public rodada: number = 0 //vai de 0 até array.length
  public rodadaFrase: Frase //exibe a frase da rodada

  public progresso: number = 0
  
  //criiar o atributo de tentativas
  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()
  
  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit(): void { 
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }

  public verificarResposta(): void {
    // console.log(this.tentativas)
    if(this.rodadaFrase.frasePtBr == this.resposta){
     
      //trocar a pergunta da rodada
        this.rodada++
      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)
     
      //
      if(this.rodada === 4 )
      {
        this.encerrarJogo.emit('vitória')
        // alert('Conclui as traduçãoes com sucesso!!!')
      }
      
      //atualiza o objeto frase da rodada
      this.atualizaRodada()
      
    } else {
      //diminuir a variavel tentatvivas
      this.tentativas--
      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota')
        // alert('Você perdeu todas as tentaivas')
      }
      
    }
    
    // console.log(this.tentativas)
  }

  public atualizaRodada(): void {
    //define a frase da rodada com base em alguma logica
    this.rodadaFrase = this.frases[this.rodada]
    //limpa a resposta
    this.resposta = " "
  }

}
