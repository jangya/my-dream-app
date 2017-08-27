import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { config } from '../shared/config';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get(config.baseUrl+'api/users')
      .map(res => res.json());
  }
}
