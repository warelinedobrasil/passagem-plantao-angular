import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   // importa NgIf, NgFor etc.
import { PlantaoService } from '../../core/services/plantao';
import { HistoryEntry } from '../../core/models/history.model';
import { Patient } from '../../core/models/paciente.model';

@Component({
  selector: 'app-historico-outros-plantoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historico-outros-plantoes.html',
  styleUrl: './historico-outros-plantoes.scss'
})
export class HistoricoOutrosPlantoes implements OnInit {
  patient: Patient | null = null;
  history: HistoryEntry[] = [];

  constructor(private plantaoService: PlantaoService) {}

  ngOnInit() {
    this.plantaoService.getCurrentPatient().subscribe(p => {
      this.patient = p;
      if (p) this.history = this.plantaoService.getHistory(p.id);
    });
  }
}
