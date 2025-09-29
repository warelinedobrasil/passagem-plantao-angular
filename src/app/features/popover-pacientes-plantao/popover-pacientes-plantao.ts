import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaoService } from '../../core/services/plantao';
import { Patient } from '../../core/models/paciente.model';

@Component({
  selector: 'popover-pacientes-plantao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popover-pacientes-plantao.html',
  styleUrls: ['./popover-pacientes-plantao.scss']
})
export class PopooverPacientesPlantao implements OnInit {
  patients: Patient[] = [];
  visible = false;
  currentId: string | null = null;

  constructor(private plantaoService: PlantaoService) {}

  ngOnInit() {
    this.patients = this.plantaoService.getPatients();
    this.plantaoService.getCurrentPatient().subscribe(p => {
      this.currentId = p?.id ?? null;
    });
  }

  toggle() {
    this.visible = !this.visible;
  }

  selectPatient(id: string) {
    this.plantaoService.setCurrentPatient(id);
    this.visible = false; // fecha o popover
  }
}
