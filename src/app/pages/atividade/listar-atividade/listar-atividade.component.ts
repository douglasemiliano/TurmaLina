import { Component, inject } from '@angular/core';
import { CursoService } from '../../../services/curso.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ActivityButtonComponent } from '../../../components/activity-button/activity-button.component';

@Component({
  selector: 'app-listar-atividade',
  imports: [MatIconModule, CommonModule, ActivityButtonComponent],
  templateUrl: './listar-atividade.component.html',
  styleUrl: './listar-atividade.component.scss'
})
export class ListarAtividadeComponent {

  private cursoService = inject(CursoService);
  cursoAtual = this.cursoService.getCursoAtual();

  currentStep: number = 0; // Para controlar o progresso da trilhas
  atividades = [{id: 1, nome: "Apresentação", status: "concluido"}, {id: 2, nome: "Leitura digidia", status: "concluido"}, {id: 3, nome: "Produzir Artigo", status: "concluido"}, {id: 4, nome: "Seminário Design Thinking", status: "concluido"}, {id: 5, nome: "Projeto de Vida", status: "concluido"}];

  getPositionClass(index: number): string {
    const positions = ['item-left', 'item-middle', 'item-right', 'item-middle']; 
    return positions[index % positions.length];
  }
}


