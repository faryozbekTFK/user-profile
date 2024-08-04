export interface UserInterface {
    name: string;
    email: string;
    bio: string;
}

export interface EditUserInterface {
    user: UserInterface;
    onClose: any;
    onSave: any;
}