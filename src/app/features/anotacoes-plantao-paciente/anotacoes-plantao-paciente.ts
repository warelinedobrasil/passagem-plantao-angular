import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   // importa NgIf, NgFor etc.
import { PlantaoService } from '../../core/services/plantao';
import { Annotation } from '../../core/models/annotation.model';
import { Patient } from '../../core/models/paciente.model';

@Component({
  selector: 'app-anotacoes-plantao-paciente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anotacoes-plantao-paciente.html',
  styleUrl: './anotacoes-plantao-paciente.scss'
})

export class AnotacoesPlantaoPaciente implements OnInit {
  patient: Patient | null = null;
  annotations: Annotation[] = [];

  constructor(private plantaoService: PlantaoService) {}

  ngOnInit() {
    this.plantaoService.getCurrentPatient().subscribe(p => {
      this.patient = p;
      if (p) this.annotations = this.plantaoService.getAnnotations(p.id);
    });
  }
}
