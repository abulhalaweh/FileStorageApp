
export enum PostMethod {
    addFile,
    deleteFile,
    updateFile,
    editUser,
    editProfile,
    changeLogin,
    changePassword
}

export enum GetMethod {
    getAllFiles,
    getUserFiles,
    info
}

export enum ControllerType {
    filedbs,
    patient,
    doctor,
    profile,
    manage
}

export enum UserType {
    Patient,
    Doctor,
    Admin
}

export enum Profile {
    username,
    role,
    sub
}
