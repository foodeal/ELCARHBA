import { UserDTO } from '../../generated/UserDto';

export interface Service {
  id: string;
  token: string;
  email: string;
  firstName: string;
  lastName: string;
}

export namespace Service {
  export function mapToApiValue(data: UserDTO): Service {
    return {
      id: data.id.toString(),
      token: data.token,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    };
  }
}
