import { Component, Input, OnInit }	from '@angular/core';

@Component({
	selector: 'post-nav',
	template: `
			<div class="flex-container">
				<div>
					<a class="older" routerLink="/post/{{olderPostID}}" routerLinkActive="active" (click)="onOlder()" *ngIf="postID != 1">< Older</a>
				</div>
				<div>
					<a class="newer" routerLink="/post/{{newerPostID}}" routerLinkActive="active" (click)="onNewer()" *ngIf="postID != numOfPosts">Newer ></a>
				</div>
			</div>
	`,
	styleUrls: ['./post-nav.component.css']
})
export class PostNavComponent implements OnInit {
	@Input() postIDInput: string;
	@Input() numOfPosts: number;
	postID: number;
	newerPostID: string;
	olderPostID: string;

	/*
	postID: where you are
	newerPostID: postID++
	olderPostID: postID--
	*/

	ngOnInit() {
		this.postID = +this.postIDInput;
		this.calcNewOldPostIds();
	}

	calcNewOldPostIds() {
		this.newerPostID = ((this.postID + 1) > this.numOfPosts ? this.numOfPosts : (this.postID + 1)).toString();
		this.olderPostID = ((this.postID - 1) > 0 ? (this.postID - 1) : 1).toString();
	}

	/* When someone goes to a newer post, increment everything up by 1 */
	onNewer() {
		this.postID++;
		this.postID = this.postID > this.numOfPosts ? this.numOfPosts : this.postID;
		this.calcNewOldPostIds();
	}

	/* When someone goes to an older post, increment everything down by 1 */
	onOlder() {
		this.postID = this.postID - 1 < 1 ? 1 : this.postID - 1;
		this.calcNewOldPostIds();
	}

	/* For debugging
	consoleLogFn(fn: string) {
		console.log(`
			Called from: ${fn}
			this.newerPostID = ${this.newerPostID},
			this.olderPostID = ${this.olderPostID},
			this.PostID = ${this.postID},
		`);
	}
	*/
}

/* To Do
- Transition animation
	- Need to bring in that animation from app component module here
*/