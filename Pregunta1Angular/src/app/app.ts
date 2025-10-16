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
  item: { nombre: string, apellido: string, edad: number, correo: string }[] = [];
  nuevoItem = {
    nombre: '',
    apellido: '',
    edad: 1,
    correo: ''
  }

  guardar() {
    if (this.nuevoItem.nombre.trim() && this.nuevoItem.apellido.trim() && this.nuevoItem.edad > 0 && this.nuevoItem.correo.trim()) {
      this.item.push({ ...this.nuevoItem })
      this.nuevoItem = {
        nombre: '',
        apellido: '',
        edad: 1,
        correo: ''
      }
    }
  }


  eliminar(i: number) {
    this.item.splice(i, 1);
  }
}
