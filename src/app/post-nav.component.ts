import { Component, Input, OnInit }	from '@angular/core';

@Component({
	selector: 'post-nav',
	template: `
			<a mat-list-item routerLink="/post/{{olderPostID}}" routerLinkActive="active" (click)="onOlder()">< Older</a>
			<a mat-list-item routerLink="/post/{{newerPostID}}" routerLinkActive="active" (click)="onNewer()">Newer ></a>
	`
})
export class PostNavComponent implements OnInit {
	@Input() postID: string;
	newerPostID: string;
	olderPostID: string;

	ngOnInit() {
		this.calcNewOldPostIds();
	}

	calcNewOldPostIds() {
		this.newerPostID = (+this.postID + 1).toString();
		this.olderPostID = ((+this.postID - 1) > 0 ? (+this.postID - 1) : 1).toString();
	}

	/* When someone goes to a newer post, increment everything up by 1 */
	onNewer() {
		this.postID = (+this.postID + 1).toString();
		this.calcNewOldPostIds();
	}

	/* When someone goes to an older post, increment everything down by 1 */
	onOlder() {
		this.postID = ((+this.postID - 1) > 0 ? (+this.postID - 1) : 1).toString();
		this.calcNewOldPostIds();
	}
	
}

/* To Do
- Upper limit on "newer"
	- Bring in Service to get that
- Styling
	- Older on left side, Newer on right
	- Flexbox
- Transition animation
	- Need to bring in that animation from app component module here
*/