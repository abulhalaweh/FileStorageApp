import { UserModel } from './user.model';

export class DoctorModel extends UserModel {
    Specialization: string = undefined;
    YearsOfExperience: number = undefined;
}
