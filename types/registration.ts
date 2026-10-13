export interface Registration {
  nama: string;
  email: string;
  tanggalLahir: string;
  role: "member" | "admin";
}

export type RegistrationDraft = Partial<Registration>;