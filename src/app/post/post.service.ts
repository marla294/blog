import { Injectable }		from '@angular/core';
import { HttpClient }		from '@angular/common/http';
import { Observable }		from 'rxjs/Observable';
import { BehaviorSubject }	from 'rxjs/BehaviorSubject';
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
	/* New way */
	private _posts: BehaviorSubject<Post[]>;
	private _currentPost: BehaviorSubject<Post>;
	private dataStore: { 
		posts: Post[],
		currentPost: Post
	};

	constructor(private http: HttpClient) {
		this._posts = <BehaviorSubject<Post[]>>new BehaviorSubject([]);
		this._currentPost = <BehaviorSubject<Post>>new BehaviorSubject(null);
		this.dataStore = { 
			posts: [],
			currentPost: null
		};
	}

	get posts() {
		return this._posts.asObservable();
	}

	get currentPost() {
		return this._currentPost.asObservable();
	}

	/* Loads all data into Observables for public use, and into memory */
	loadAll(id: string = '0') {
		this.http.get<PostJSONResponse>('./assets/data/api/posts.json')
						.map(res => res.posts
						.map(post => new Post(post.id, post.title, post.date))
						.sort((a, b) => +b.date - +a.date))
						.subscribe(data => {
							this.dataStore.posts = data;
							this.dataStore.currentPost = this.dataStore.posts.find(p => p.id == id);
							this._posts.next(Object.assign({}, this.dataStore).posts);
							this._currentPost.next(Object.assign({}, this.dataStore).currentPost);
						});
	}

	/* Old stuff */
	/* getPosts function to grab the JSON - everything else works off this */
	getPosts(): Observable<Post[]> {
		return this.http.get<PostJSONResponse>('./assets/data/api/posts.json')
						.map(res => res.posts
						.map(post => new Post(post.id, post.title, post.date))
						.sort((a, b) => +b.date - +a.date));
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







