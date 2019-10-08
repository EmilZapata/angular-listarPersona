import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Persona } from "../persona.model";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();
  // nombreInput: string;
  // apellidoInput: string;
  @ViewChild("nombreInput") nombreInput: ElementRef;
  @ViewChild("apellidoInput") apellidoInput: ElementRef;
  constructor() {}

  ngOnInit() {}

  onAgregarPersona() {
    let _persona = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value
    );
    // this.personas.push(_persona)
    this.personaCreada.emit(_persona);
  }
}
