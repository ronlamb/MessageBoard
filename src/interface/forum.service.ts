import { Injectable } from '@angular/core';
import { IForum } from './forum';

@Injectable()
export class RoleService {
    getForums(): IForum[] {
        return  [
            {
                "id": -1,
                "name": "all",
                "description": "All Forums"
            },
            {
                "id": 0,
                "name": "generallNews",
                "description": "Forum News"
            },
            {
                "id": 1,
                "name": "generalHelp",
                "description": "Forum Help"
            },
            {
                "id": 2,
                "name": "nationalNews",
                "description": "National News"
            },
            {
                "id": 3,
                "name": "nationalEconomy",
                "description": "The Economy"
            },
            {
                "id": 4,
                "name": "bc",
                "description": "Boston College"
            },
            {
                "id": 5,
                "name": "harvard",
                "description": "Harvard University"
            },
            {
                "id": 6,
                "name": "celtics",
                "description": "Boston Celtics"
            },
            {
                "id": 7,
                "name": "patriots",
                "description": "New England Patriots"
            },
            {
                "id": 8,
                "name": "tosu",
                "description": "Ohio State University"
            },
            {
                "id": 9,
                "name": "cinci",
                "description": "University of Cincinatti"
            },
            {
                "id": 10,
                "name": "xavier",
                "description": "Xavier"
            },
            {
                "id": 11,
                "name": "cavaliers",
                "description": "Cleveland Cavaliers"
            },
            {
                "id": 12,
                "name": "browns",
                "description": "Cleveland Browns"
            },
            {
                "id": 13,
                "name": "bengals",
                "description": "Cincinatti Bengals"
            },
            {
                "id": 14,
                "name": "blueJackets",
                "description": "Columbus Blue Jackets"
            }
        ]
    }
}