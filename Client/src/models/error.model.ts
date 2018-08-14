export class ErrorModel {
    constructor(field: string, message: string) {
        this.Field = field;
        this.Message = message;
    }

    Field: string;
    Message: string;
}
