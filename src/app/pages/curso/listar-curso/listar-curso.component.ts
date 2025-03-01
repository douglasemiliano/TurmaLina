import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-curso',
  imports: [],
  templateUrl: './listar-curso.component.html',
  styleUrl: './listar-curso.component.scss'
})
export class ListarCursoComponent {

  cursos = [{id: 1, nome: "Matemática", section: "1", descricao: "Um curso de matemática voltado para gamificação", codigoAcesso: "1234567890", status: "ACTIVE"}, 
    {id: 2, nome: "Português", section: "2", descricao: "Um curso de português voltado para pratica de redação", codigoAcesso: "1234567890", status: "ACTIVE"}, 
    {id: 3, nome: "História", section: "3", descricao: "Um curso de história voltado para antiguidade", codigoAcesso: "1234567890", status: "ACTIVE"},
    {id: 4, nome: "Geografia", section: "4", descricao: "Um curso de geografia voltado para geologia", codigoAcesso: "1234567890", status: "ACTIVE"},
    {id: 5, nome: "Programação", section: "5", descricao: "Um curso de programação voltado para a lógica de programação", codigoAcesso: "1234567890", status: "ACTIVE"},
    {id: 6, nome: "Química", section: "6", descricao: "Um curso de química voltado para a química orgânica", codigoAcesso: "1234567890", status: "ACTIVE"  }]

  entrarNoCurso(curso: any) {
    console.log(curso);
  }

}
