import { Component} from '@angular/core';
import { IForum } from 'src/interface/forum';

@Component({
  selector: 'ngbd-forum-component',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  forum: IForum;
  forumName: string;

  setForum(name: string) {
    this.forumName = name;
    // Read the forum from the server
    
  }
}
