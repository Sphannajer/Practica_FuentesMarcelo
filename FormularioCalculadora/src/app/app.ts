import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  numero: { numeroUno: number, numeroDos: number, resultado: number }[] = [];

  nuevoNumero = {
    numeroUno: 0,
    numeroDos: 0,
    resultado: 0,
  }


  sumar() {
    const resultado = this.nuevoNumero.numeroUno + this.nuevoNumero.numeroDos;
    this.agregarResultado(this.nuevoNumero.numeroUno, this.nuevoNumero.numeroDos, resultado);
    this.nuevoNumero = {
      numeroUno: 0,
      numeroDos: 0,
      resultado: 0,
    }
  }


  resta() {
    const resultado = this.nuevoNumero.numeroUno - this.nuevoNumero.numeroDos;
    this.agregarResultado(this.nuevoNumero.numeroUno, this.nuevoNumero.numeroDos, resultado);
    this.nuevoNumero = {
      numeroUno: 0,
      numeroDos: 0,
      resultado: 0,
    }
  }


  multi() {
    const resultado = this.nuevoNumero.numeroUno * this.nuevoNumero.numeroDos;
    this.agregarResultado(this.nuevoNumero.numeroUno, this.nuevoNumero.numeroDos, resultado);
    this.nuevoNumero = {
      numeroUno: 0,
      numeroDos: 0,
      resultado: 0,
    }
  }


  raiz() {
    if (this.nuevoNumero.numeroUno < 0) {
      alert("No se puede calcular la raíz cuadrada de un número negativo.");
      return;
    }
    const resultado = Math.sqrt(this.nuevoNumero.numeroUno);
    this.agregarResultado(this.nuevoNumero.numeroUno, 0, resultado);
    this.nuevoNumero = {
      numeroUno: 0,
      numeroDos: 0,
      resultado: 0,
    }
  }

  private agregarResultado(num1: number, num2: number, resultado: number):void {
    this.numero.push({
      numeroUno: num1,
      numeroDos: num2,
      resultado: resultado
    });
  }
}

