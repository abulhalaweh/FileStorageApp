export class ChangePasswordModel {
    constructor(currentPass: string, newPass: string) {
        this.CurrentPassword = currentPass;
        this.NewPassword = newPass;
    }

    CurrentPassword: string;
    NewPassword: string;
}
