import { Injectable } from '@angular/core';
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
posts:Post[];

  constructor() { }
  getPosts(): Post[]{
    return this.posts=[
      {ownerName:"Naomie", user_id:2, time: Date.now(), content:"Blablabla"},
      {ownerName:"Kirikou", user_id:3, time: Date.now(), content:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."},
      {ownerName:"Arnaud", user_id:4, time: Date.now(), content:"Blublublu"},
      {ownerName:"Léonie", user_id:5, time: Date.now(), content:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."},
      {ownerName:"Timothé", user_id:6, time: Date.now(), content:"hahaha"},
      {ownerName:"Come", user_id:27, time: Date.now(), content:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."},
    ];
  }
}
