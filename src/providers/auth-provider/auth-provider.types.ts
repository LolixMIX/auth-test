export interface IProfile {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    login: string,
    avatar_url: string,
    isBlocked: boolean,
    role: string,
    created_at: Date,
    updated_at: Date
}

export interface ILoginUser {
    login: string,
    password: string,
}

export interface ILoginUserResponse {
    status: number,
    message: string
}

export interface IRegistrationUser {
    email: string,
    first_name: string,
    last_name?: string,
    login: string,
    password: string,
}

export const initialUser: IProfile = {
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    login: "",
    avatar_url: "",
    isBlocked: false,
    role: "",
    created_at: new Date(),
    updated_at: new Date(),
};

export interface AuthProviderProps {
    children: React.ReactNode;
}

export interface AuthContextProps {
    // currentTab: T
    // onTabChange: (e: React.SyntheticEvent, tabValue: T) => void
    profile: IProfile | null
    setProfile: React.Dispatch<React.SetStateAction<IProfile | null>>
    loginUser: (params: ILoginUser) => Promise<void>
    registrationUser: (params: IRegistrationUser) => Promise<void>
    getProfile: () => Promise<void>
}