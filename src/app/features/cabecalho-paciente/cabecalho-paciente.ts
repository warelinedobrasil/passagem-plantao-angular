import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   // importa NgIf, NgFor etc.
import { PlantaoService } from '../../core/services/plantao';
import { Patient } from '../../core/models/paciente.model';

@Component({
  selector: 'app-cabecalho-paciente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecalho-paciente.html',
  styleUrl: './cabecalho-paciente.scss'
})

export class CabecalhoPaciente implements OnInit {
  patient: Patient | null = null;

  constructor(private plantaoService: PlantaoService) {}

  ngOnInit() {
    this.plantaoService.getCurrentPatient().subscribe(p => this.patient = p);
  }
}
