import { Component, OnInit } from '@angular/core';
import { Post } from '../services/post.model';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:Post[];
  
  constructor(private pService: PostService) { }

  ngOnInit(): void {
    this.posts= this.pService.getPosts();
  }

}
