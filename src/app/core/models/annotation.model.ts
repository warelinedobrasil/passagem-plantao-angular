export interface Annotation {
  id: number;
  patientId: string;
  type: 'enfermeiro' | 'tecnico';
  timestamp: string;
  text: string;
}
