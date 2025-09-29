import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaoService } from '../../core/services/plantao';
import { Patient } from '../../core/models/paciente.model';
import { PopooverPacientesPlantao } from '../popover-pacientes-plantao/popover-pacientes-plantao';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, PopooverPacientesPlantao],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class Navigation implements OnInit {
  patients: Patient[] = [];
  current: Patient | null = null;
  currentIndex = 0;

  constructor(private plantaoService: PlantaoService) {}

  ngOnInit() {
    this.patients = this.plantaoService.getPatients();

    this.plantaoService.getCurrentPatient().subscribe(p => {
      this.current = p;
      if (p) {
        this.currentIndex = this.patients.findIndex(x => x.id === p.id);
      }
    });
  }

  prev() {
    if (this.currentIndex > 0) {
      const prevPatient = this.patients[this.currentIndex - 1];
      this.plantaoService.setCurrentPatient(prevPatient.id);
    }
  }

  next() {
    if (this.currentIndex < this.patients.length - 1) {
      const nextPatient = this.patients[this.currentIndex + 1];
      this.plantaoService.setCurrentPatient(nextPatient.id);
    }
  }
}
