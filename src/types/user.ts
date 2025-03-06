export interface IUser {
    userId: string;
    name: string;
    email: string;
    isActive?: boolean;
    role: "landlord" | "admin" |"tenant";
    iat?: number;
    exp?: number;
  }