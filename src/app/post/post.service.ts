import { Injectable }		from '@angular/core';
import { HttpClient }		from '@angular/common/http';
import { Observable }		from 'rxjs/Observable';
//import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Post }				from './post';

/* The following class and interface tell what to expect from the JSON response data */
class PostJSON {
	constructor(public id: string, public title: string, public date: string) {}
}
interface PostJSONResponse {
	posts: PostJSON[];
}

/* Please only return Observables from functions in this class */
@Injectable()
export class PostService {
	constructor(private http: HttpClient) {}

	/* getPosts function to grab the JSON - everything else works off this */
	getPosts(): Observable<Post[]> {
		return this.http.get<PostJSONResponse>('./assets/data/api/posts.json')
						.map(res => res.posts
						.map(post => new Post(post.id, post.title, post.date))
						.sort((a, b) => +b.date - +a.date));
	}

	/* Called by the Post component when looking up current post */
	getPost(id: string): Observable<Post> {
		return this.getPosts()
						.map(posts => posts
						.find(post => post.id === id));
	}

	/* The main "get post" method that is called by the Home component */
	getPostsWithOperators(length: number): Observable<Post[]> {
		let inputArray = this.getPosts();
		let trimmedArray = this.trimPosts(inputArray, length);
		return trimmedArray;
	}

	/* Trims the length of the Posts array to the specified length */
	trimPosts(obArray: Observable<Post[]>, length: number): Observable<Post[]> {
		return obArray.map(posts => posts
				  		.slice(0, length));
	}
}







