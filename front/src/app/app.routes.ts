import { Routes } from '@angular/router';
import { ManagementCollaboratorsComponent } from './components/management-collaborators/management-collaborators.component';
import { CollaboratorDetailsComponent } from './components/collaborator-details/collaborator-details.component';

export const routes: Routes = [
  { path: '', component: ManagementCollaboratorsComponent },
  { path: 'colaborador', component: CollaboratorDetailsComponent },
];
