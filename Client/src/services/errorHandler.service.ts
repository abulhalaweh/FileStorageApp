import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ErrorModel } from '../models/error.model';

@Injectable()
export class ErrorHandlerService {

    public setServerErrors(res: any, model: any, formControl: NgForm): void {
        const errors = this.handleErrorResponse(res, model);

        errors.forEach(err => {
            if (err.Field !== '') {
                formControl.controls[err.Field].setErrors({server: err.Message});
            } else {
                formControl.control.setErrors({server: err.Message});
            }
        });
    }

    private handleErrorResponse(res: any, model: any): ErrorModel[] {
        const data = res.json();
        const props = Object.keys(model);
        const customizedErros: ErrorModel[] = [];

        if (data.errors !== undefined) {

            data.errors.forEach(err => {
              customizedErros.push( this.wrapError(props, err) );
            });
        } else {
            customizedErros.push( this.wrapError(props, data) );
        }

        return customizedErros;
    }

    private wrapError(props: string[], err: any): ErrorModel {
        let currentError: ErrorModel;
        const index = props.indexOf( String(err.field) );

        if (index > -1) {
          currentError = new ErrorModel(props[index], err.message);
        } else {
          currentError = new ErrorModel('', err.message);
        }

        return currentError;
    }
}
