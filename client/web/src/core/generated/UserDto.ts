export interface UserDTO {
  id: number;
  token: string;
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
}
