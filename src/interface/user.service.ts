import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable()
export class RoleService {
    getUsers(): IUser[] {
        return  [
            {   "id": 0,
                "name": "admin",
                "roleId": 0,
            },
            {
                "id": 101,
                "name": "rlamb",
                "roleId": 3,
                "sectionSubscribed": [14],
            },
            {
                "id": 103,
                "name": "jclamb",
                "roleId": 1,
                "sectionAdministrated": [14, 16, 13],
                "sectionSubscribed": [1],
            },
            {
                "id": 109,
                "name": "rbrown",
                "roleId": 3,
                "sectionSubscribed": [16],
            },
            {
                "id": 113,
                "name": "bnoe",
                "roleId": 2,
                "sectionSubscribed": [16],
                "forumSubscribed": [ -1 ]
            }
        ]
    }
}