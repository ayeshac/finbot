type User = "bot" | "user"

export interface Message{
    id:string;
    text:string;
    role:User;
}