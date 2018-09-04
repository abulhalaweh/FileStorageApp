
export enum PostMethod {
    addFile,
    deleteFile,
    updateFile,
    addUser,
    deleteUser,
    editUser,
    editProfile,
    changeLogin,
    changePassword
}

export enum GetMethod {
  getAllFiles,
  getUserFiles,
  getUsers,
    getMyUsers,
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
