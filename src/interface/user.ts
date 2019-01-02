export interface IUser {
    id: number;
    name: string;
    roleId: number;
    sectionAdministrated?: number[];
    sectionSubscribed?: number[];
    forumSubscribed?: number[];
}