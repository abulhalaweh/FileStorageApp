declare var module: NodeModule;
interface NodeModule {
    id: string;
}

interface IUser {
    email: string;
    password: string;
}

interface IRegisterModel extends IUser {
    lastName: string;
    firstName: string;
    registerAsDoctor: any;
}
  
interface ILoginModel extends IUser {
}

interface AuthTokenModel {
    access_token: string;
    refresh_token: string;
    id_token: string;
    expires_in: number;
    token_type: string;
    expiration_date: string;
}

interface IUserCheck {
    email: string;
}
