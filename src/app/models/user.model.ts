export interface UserCredentialModel {
  id: string;
  userName: string;
  password: string;
  userRole: string
}

export interface UserInformationModel {
  userRole?: string;
  userName?: string
}