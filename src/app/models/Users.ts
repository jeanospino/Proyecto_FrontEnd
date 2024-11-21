
export interface UsersI {
  id?: number; // Opcional porque puede ser autogenerado
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  user_type_id: number;
}
