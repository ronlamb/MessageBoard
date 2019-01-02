import { Injectable } from '@angular/core';
import { IRole } from './role';

@Injectable()
export class RoleService {
    getUsers(): IRole[] {
        return [
            {
                "id": 0,
                "name": "sysAdmin",
                "createForum": true,
                "createSection": true,
                "deleteForum": true,
                "deleteSection": true,
                "postMessage": true,
                "deleteMessage": true,
                "postAdd": true,
                "deleteAdd": true,
                "banUser": true
            },
            {
                "id": 1,
                "name": "forumAdmin",
                "createForum": false,
                "createSection": false,
                "deleteForum": false,
                "deleteSection": false,
                "postMessage": true,
                "deleteMessage": true,
                "postAdd": false,
                "deleteAdd": true,
                "banUser": true
            },
            {
                "id": 2,
                "name": "Advertiser",
                "createForum": false,
                "createSection": false,
                "deleteForum": false,
                "deleteSection": false,
                "postMessage": false,
                "deleteMessage": false,
                "postAdd": true,
                "deleteAdd": true,
                "banUser": true
            },
            {
                "id": 3,
                "name": "user",
                "createForum": false,
                "createSection": false,
                "deleteForum": false,
                "deleteSection": false,
                "postMessage": true,
                "deleteMessage": false,
                "postAdd": false,
                "deleteAdd": false,
                "banUser": false
            }
        ]
    }
}