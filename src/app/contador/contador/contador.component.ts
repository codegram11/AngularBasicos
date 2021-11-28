import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
    <h3>La base es <strong>{{base}}</strong></h3>
    <hr>
    <br><br>
    <button (click)="acumulado(+base)">+{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumulado(-base)">-{{base}}</button>
    <br><br>
    <hr>
    `
})


export class ContadorComponent{
    title:string= 'Contador app';
    numero:number=10;
    base:number=5;
   
  
    acumulado(valor:number){
      this.numero+=valor;
    }
}