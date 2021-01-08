import { Component, OnInit } from '@angular/core';
import { Post } from '../services/post.model';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
posts:Post[];

  constructor(private pService: PostService) { }

  ngOnInit(): void {
    this.posts=this.pService.getPosts();
  }

}
