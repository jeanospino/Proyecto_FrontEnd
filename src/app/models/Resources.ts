
export interface ResourcesI {
  id?: number; // Opcional porque puede ser autogenerado
  title: string;
  description?: string; // Opcional porque es nullable
  resource_type_id: number;
}