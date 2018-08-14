export class GoogleResponse {
    constructor(idToken: string) {
        this.IdToken = idToken;
    }

    IdToken: string;
    RegisterAsDoctor: boolean;
}
