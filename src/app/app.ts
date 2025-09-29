import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// importa todos os componentes que você usa no app.html
import { Navigation } from './features/navigation/navigation';
import { CabecalhoPaciente } from './features/cabecalho-paciente/cabecalho-paciente';
import { AnotacoesPlantaoPaciente } from './features/anotacoes-plantao-paciente/anotacoes-plantao-paciente';
import { EditorTextosAnotacoes } from './features/editor-textos-anotacoes/editor-textos-anotacoes';
import { HistoricoOutrosPlantoes } from './features/historico-outros-plantoes/historico-outros-plantoes';
import { Footer } from './core/layout/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Navigation,
    CabecalhoPaciente,
    AnotacoesPlantaoPaciente,
    EditorTextosAnotacoes,
    HistoricoOutrosPlantoes,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
