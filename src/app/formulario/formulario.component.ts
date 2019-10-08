import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Persona } from "../persona.model";
import { PersonasService } from '../persona.service';

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  // @Output() personaCreada = new EventEmitter<Persona>();
  // nombreInput: string;
  // apellidoInput: string;
  @ViewChild("nombreInput", { static: false }) nombreInput: ElementRef;
  @ViewChild("apellidoInput", { static: false }) apellidoInput: ElementRef;
  constructor(private personasService: PersonasService) {}

  ngOnInit() {}

  onAgregarPersona() {
    const _persona = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value
    );
    // this.personas.push(_persona)
    // this.personaCreada.emit(_persona);
    this.personasService.agregarPersona(_persona)
  }
}
