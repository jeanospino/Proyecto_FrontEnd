

export interface PenaltiesI {
  id?: number; // Opcional porque puede ser autogenerado
  return_id: number;
  user_id: number;
  amount: number;
  reason: string;
  penalty_date?: Date; // Opcional porque tiene un valor por defecto
}
