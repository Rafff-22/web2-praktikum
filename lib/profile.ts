export interface Profile {
  nama: string;
  nim: string;
  motivasi: string;
}

export async function getProfile(): Promise<Profile> {
  return {
    nama: "Andi Muh Rafi Khairan Rusdi",
    nim: "52024002",
    motivasi:
      "Saya ingin menguasai pengembangan web modern dengan Next.js dan TypeScript agar siap membangun aplikasi web yang sesungguhnya.",
  };
}