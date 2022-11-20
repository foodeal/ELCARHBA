import { LoginDTO } from "../../generated/LoginDto";

export interface SigninData {
  email: string;
  motdepasse: string;
  rememberMe: boolean;
}

export namespace SigninData {
  export function mapToApiValue(data: SigninData): LoginDTO {
    return {
      email: data.email,
      password: data.motdepasse,
      rememberMe: true
    };
  }
}
