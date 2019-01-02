export interface IRole {
    id: number;
    name: string;
    createForum: boolean;
    createSection: boolean;
    deleteForum: boolean;
    deleteSection: boolean;
    postMessage: boolean;
    deleteMessage: boolean;
    postAdd: boolean;
    deleteAdd: boolean;
    banUser: boolean;
}