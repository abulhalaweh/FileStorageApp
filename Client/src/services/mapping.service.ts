import { Injectable } from '@angular/core';

import { PatientModel } from '../models/patient.model';
import { DoctorModel } from '../models/doctor.model';
import { UserType } from '../enums/enum.models';

@Injectable()
export class MappingService {

    public getProps(userType: UserType): string[] {
        const props = Object.keys( this.getRelatedUser(userType) );
        const replaceIndex = props.indexOf('UserName');
        props.splice(replaceIndex, 1, 'Email');
        return this.parseProps(props);
    }

    private getRelatedUser(userType: UserType): any {
        let relatedUser;

        if (userType === UserType.Patient) {
            relatedUser = new DoctorModel();
        } else {
            relatedUser = new PatientModel();
        }

        return relatedUser;
    }

    private parseProps(props: string[]): string[] {
        const parsedArray: string[] = [];

        for (let i = 0; i < props.length; i++) {
            const strArray = props[i].split('');
            let word = '';

            for (let j = 1; j < strArray.length; j++) {
                const upCase = this.IsUpCase(strArray[j]);

                if (upCase) {
                    word += strArray[j - 1] + ' ' +
                    strArray[j].toLocaleLowerCase();
                    j++;

                } else if (j === strArray.length - 1) {
                    word += strArray[j - 1] + strArray[j];
                } else {
                    word += strArray[j - 1];
                }
            }

            parsedArray.push(word);
        }

        return parsedArray;
    }

    private IsUpCase(ch1: string): boolean {
        return ch1 === ch1.toUpperCase();
    }

    public parseObjects(objectsArray: Array<any>, userType: any) {
        const props = Object.keys( this.getRelatedUser(userType) );
        const valuesArray = new Array<Array<any>>();

        objectsArray.forEach((obj, index) => {
            valuesArray[index] = new Array<any>();

            for (let j = 0; j < props.length; j++) {
                let prop = props[j];
                prop = this.firstLetterToLower(prop);
                valuesArray[index].push( obj[prop] );
            }
        });

        return valuesArray;
    }

    public ParseObject(object: any, userType: any): any[] {
        const props = Object.keys( this.getRelatedUser(userType) );
        const valuesArray = new Array<any>();

        for (let i = 0; i < props.length; i++) {
            let prop = props[i];
            prop = this.firstLetterToLower(prop);
            valuesArray.push( object[prop] );
        }

        return valuesArray;
    }

    private firstLetterToLower(str: string): string {
        return str.split('')[0].toLocaleLowerCase() + str.substr(1, str.length);
    }
}
