import { LoginDTO } from "../../generated/LoginDto";

export interface SigninData {
  email: string;
  motdepasse: string;
}

export namespace SigninData {
  export function mapToApiValue(data: SigninData): LoginDTO {
    return {
      email: data.email,
      motdepasse: data.motdepasse,
    };
  }
}
