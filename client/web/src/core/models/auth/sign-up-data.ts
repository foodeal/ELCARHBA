import { GenderType, SignupDTO } from '@core/generated/SignupDTO';

export interface SignupData {
  gender: GenderType;
  socialReason?: string;
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
  occupation: string;
  birthDate: Date;
  country: string;
  town: string;
  phoneNumber: string;
  address: string;
  facebookLink: string;
  instagramLink: string;
  userName: string;
  lastCarOilChangeDate?: Date;
  lastCarOilChangeAtKm?: number;
  lastBrakePlateChangeAtKm?: number;
  lastBatteryChangeDate?: Date;
  insuranceExpiringDate?: Date;
  techInspectExpiringDate?: Date;
  cin?: File;
  commercialRegister?: File;
  conditionContract?: File;
  serviceType?: string;
  service?: string;
}

export namespace SignupData {
  export function mapToApiValue(data: SignupData): SignupDTO {
    return {
      email: data.email,
      fullName: data.fullName,
      password: data.password,
      confirmPassword: data.confirmPassword,
      birthDate: data.birthDate,
      gender: data.gender,
      socialReason: data?.socialReason,
      phoneNumber: data.phoneNumber,
      town: data.town,
      country: data.country,
      address: data.address,
      userName: data.userName,
      instagramLink: data.instagramLink,
      facebookLink: data.facebookLink,
      occupation: data.occupation,
      lastCarOilChangeDate: data?.lastCarOilChangeDate,
      lastCarOilChangeAtKm: data?.lastCarOilChangeAtKm,
      lastBrakePlateChangeAtKm: data?.lastBrakePlateChangeAtKm,
      lastBatteryChangeDate: data?.lastBatteryChangeDate,
      insuranceExpiringDate: data?.insuranceExpiringDate,
      techInspectExpiringDate: data?.techInspectExpiringDate,
      cin: data?.cin,
      commercialRegister: data?.commercialRegister,
      conditionContract: data?.conditionContract,
      serviceType: data?.serviceType,
      service: data?.service
    };
  }
}
