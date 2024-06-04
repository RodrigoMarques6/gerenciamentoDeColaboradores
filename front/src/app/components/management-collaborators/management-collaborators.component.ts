import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../interfaces/collaborators.interface';
import { ColaboradoresService } from '../../services/colaboradores.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-management-collaborators',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './management-collaborators.component.html',
  styleUrls: ['./management-collaborators.component.css'],
})
export class ManagementCollaboratorsComponent implements OnInit {
  colaboradores: Colaborador[] = [];
  tabela: MatTableDataSource<Colaborador>;
  displayedColumns = ['nome', 'cpf', 'dataAdmissao', 'remuneracao', 'cargo'];

  constructor(
    private colaboradoresService: ColaboradoresService,
    private route: ActivatedRoute
  ) {
    this.tabela = new MatTableDataSource<Colaborador>();
  }

  ngOnInit(): void {
    this.getColaboradores();
    this.getTabela();
  }

  getColaboradores(): void {
    this.colaboradoresService
      .getColaboradores()
      .subscribe((colaboradores: Colaborador[]) => {
        this.colaboradores = colaboradores;
      });
  }

  getTabela(): void {
    this.colaboradoresService.getTabela().subscribe((tabela: Colaborador[]) => {
      this.tabela.data = tabela;
    });
  }
}
