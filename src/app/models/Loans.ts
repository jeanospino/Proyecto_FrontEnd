export interface LoansI {
  id?: number; // Opcional porque puede ser autogenerado
  resource_id: number;
  user_id: number;
  librarian_id: number;
  loan_date?: Date; // Opcional porque tiene valor por defecto
  return_date: Date;
  status: string;
}