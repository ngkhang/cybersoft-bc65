export interface UserLoginType {
  email: string,
  password: string,
}

export interface UserProfileType extends UserLoginType {
  name:          string;
  gender:        boolean;
  phone:         string;
  deleted:       boolean;
  avatar:        string;
  image:         string;    
  facebookId:    string;
  ordersHistory: any[];
}

export interface UserLoggedType {
  email: string;
  accessToken: string;
}

export interface UserStateType {
  userLogin: UserLoggedType | null;
  userProfile: UserProfileType | null;
}