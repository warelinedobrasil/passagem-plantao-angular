import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Patient } from '../models/paciente.model';
import { Annotation } from '../models/annotation.model';
import { HistoryEntry } from '../models/history.model';

@Injectable({ providedIn: 'root' })
export class PlantaoService {
  // Pacientes mockados
  private patients: Patient[] = [
    { id: 'p1', name: 'Camila de Souza', age: 45, bed: 'A4', diagnosis: 'Hipertensão arterial' },
    { id: 'p2', name: 'Pedro Henrique', age: 35, bed: 'B2', diagnosis: 'Trauma abdominal' },
    { id: 'p3', name: 'Ana Costa', age: 28, bed: 'C5', diagnosis: 'Pós-operatório apendicectomia' }
  ];

  // Anotações mockadas
  private annotations: Annotation[] = [
    { id: 1, patientId: 'p1', type: 'enfermeiro', timestamp: '2025-09-28 16:00', text: 'USG realizado, aguardando laudo.' },
    { id: 2, patientId: 'p1', type: 'tecnico', timestamp: '2025-09-28 13:25', text: 'Paciente apresentou queda ao ir ao banheiro, sem maiores lesões.' },
    { id: 3, patientId: 'p2', type: 'enfermeiro', timestamp: '2025-09-27 10:00', text: 'Curativo abdominal trocado, evolução estável.' }
  ];

  // Histórico mockado
  private history: HistoryEntry[] = [
    { id: 1, patientId: 'p1', date: '2025-09-20', summary: 'Alta da UTI, transferida para enfermaria.' },
    { id: 2, patientId: 'p1', date: '2025-09-18', summary: 'Internação por crise hipertensiva.' },
    { id: 3, patientId: 'p2', date: '2025-09-22', summary: 'Pós-operatório sem intercorrências.' }
  ];

  // Paciente atual
  private currentPatient$ = new BehaviorSubject<Patient>(this.patients[0]);

  getPatients() {
    return this.patients;
  }

  getCurrentPatient() {
    return this.currentPatient$.asObservable();
  }

  setCurrentPatient(id: string) {
    const found = this.patients.find(p => p.id === id);
    if (found) {
      this.currentPatient$.next(found);
    }
  }

  getAnnotations(patientId: string) {
    return this.annotations.filter(a => a.patientId === patientId);
  }

  getHistory(patientId: string) {
    return this.history.filter(h => h.patientId === patientId);
  }
}
