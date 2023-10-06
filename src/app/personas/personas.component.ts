import { Component } from "@angular/core";

@Component({
  selector: "app-personas",
  templateUrl: "./personas.component.html",
  styleUrls: ["./personas.component.css"]
})
export class PersonasComponent{

  deshabilitar = false;

  mensaje: string = 'No se ha agregado ninguna persona'
  titulo = 'Escriba su titulo';
  mostrar = false;

  agregarPersona(){

    this.mensaje = 'Persona agregada';
    this.mostrar = true;

  }

  


  //Este metodo fue utilizado para usar event binding
  //modificarTitulo(event: Event){
  //console.log("Entrando al metodo modificar titulo")
  //this.titulo = (<HTMLInputElement>event.target).value;
  //}

}

