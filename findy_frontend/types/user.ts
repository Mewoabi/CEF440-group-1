export interface user { 
    id: string
    username: string, 
    email: string, 
    password: string, 
    phoneNumber: string, 
    profileImage: string | null, 
}

export const defaultUser: user = {
    id: "",
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    profileImage: ""
}