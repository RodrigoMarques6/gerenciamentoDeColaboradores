import { Cargo } from './functions.interface';

export interface Colaborador {
  id: string;
  nome: string;
  cpf: string;
  dataAdmissao: string;
  remuneracao: number;
  cargo: Cargo;
}
