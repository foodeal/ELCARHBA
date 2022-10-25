export interface SignupDTO {
  gender: GenderType;
  email: string;
  fullName: string;
  socialReason?: string;
  password: string;
  confirmPassword: string;
  occupation: string;
  birthDate: Date;
  phoneNumber: string;
  country: string;
  town: string;
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

export type GenderType = 'male' | 'female' | 'others';
