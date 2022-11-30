import { UserDTO } from '../../generated/UserDto';

export interface UserDetails {
  id: string;
  token: string;
  email: string;
  firstName: string;
  lastName: string;
}

export namespace UserDetails {
  export function mapToApiValue(data: UserDTO): UserDetails {
    return {
      id: data.id.toString(),
      token: data.token,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    };
  }
}
