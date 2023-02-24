import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Formulario de registro';
  cancion: string = "";
  autor: string = "";
  formato: string = "";
  strSalida: string = "";
  @ViewChild("salida")
  sal!: ElementRef;

  


  mostrar() {

    this.strSalida +=
      "<p><b>Cancion: " +
      this.cancion +
      "</b>" +
      "<p><b>Autor: " +
      this.autor +
      "</b>" +
      "<p><b>Formato: " +
      this.formato +
      "</b><hr>";

    this.sal.nativeElement.innerHTML = this.strSalida;

    this.cancion = "";
    this.autor = "";
    this.formato = "";
  }
}
