import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Colaborador } from '../../interfaces/collaborators.interface';
import { ColaboradoresService } from '../../services/colaboradores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-collaborator-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './collaborator-details.component.html',
  styleUrl: './collaborator-details.component.css'
})
export class CollaboratorDetailsComponent {
  colaboradorForm: FormGroup;
  colaborador: Colaborador | null = null;
  loading = true;
  isEditMode = false;

  constructor(
    private colaboradoresService: ColaboradoresService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.colaboradorForm = this.fb.group({
      id: [''],
      nome: [''],
      cpf: [''],
      dataAdmissao: [''],
      remuneracao: [''],
      cargo: this.fb.group({
        descricao: ['']
      })
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.getColaborador(id);
      } else {
        this.loading = false;
      }
    });
  }

  getColaborador(id: string) {
    this.colaboradoresService.getOneColaborador(id).subscribe({
      next: (data) => {
        this.colaborador = data;
        this.colaboradorForm.patchValue(data);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching collaborator', error);
        this.loading = false;
      }
    });
  }

  saveColaborador() {
    if (this.colaboradorForm.valid) {
      if (this.isEditMode) {
        this.updateColaborador();
      } else {
        this.addColaborador();
      }
    }
  }

  addColaborador() {
    this.colaboradoresService.addColaborador(this.colaboradorForm.value).subscribe({
      next: () => {
        alert('Colaborador adicionado com sucesso');
        this.router.navigate(['/colaboradores']);
      },
      error: (error) => {
        console.error('Error adding collaborator', error);
      }
    });
  }

  updateColaborador() {
    const id = this.colaboradorForm.get('id')?.value;
    this.colaboradoresService.updateColaborador(id, this.colaboradorForm.value).subscribe({
      next: () => {
        alert('Colaborador atualizado com sucesso');
        this.router.navigate(['/colaboradores']);
      },
      error: (error) => {
        console.error('Error updating collaborator', error);
      }
    });
  }

  deleteColaborador() {
    if (this.colaborador) {
      this.colaboradoresService.deleteColaborador(this.colaborador.id).subscribe({
        next: () => {
          alert('Colaborador deletado com sucesso');
          this.router.navigate(['/colaboradores']);
        },
        error: (error) => {
          console.error('Error deleting collaborator', error);
        }
      });
    }
  }
}
