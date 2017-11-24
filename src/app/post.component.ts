import { Component, Input } 						from '@angular/core';
import { NgTemplateOutlet, NgSwitch, NgSwitchCase }	from '@angular/common';
import { Post }										from './post';

@Component({
	selector: 'post-component',
	templateUrl: 'post.component.html'
})
export class PostComponent {
	@Input() postID = 2;
}


/*
<ng-container *ngTemplateOutlet="tpl"></ng-container>
        <ng-template #tpl>
            <span>I am span in template</span>
        </ng-template>
*/