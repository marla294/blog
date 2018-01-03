import { Injectable }		from '@angular/core';
import { Post }				from '../post/post';

/*
service MonthYearService
Provides MonthYear array for use in ordering Post array
Currently used in Home and Header components
*/
@Injectable()
export class MonthYearService {
	private _monthYear: string[];
	private _showAll: Boolean = false;

	get monthYear() {
		return this._monthYear;
	}

	get showAll() {
		return this._showAll;
	}

	/*
	fn getMonthYearGroups
	Creates MonthYear "group by" (as in SQL) array
	*/
	getMonthYearGroups(posts: Post[]) {
		let newPosts = posts.map(post => post.monthYear);
		let newArr: string[] = [];
		newPosts.map((curr) => {
			if (newArr.findIndex(d => d == curr) == -1) {
				newArr.push(curr);
			}
		});
		this._monthYear = newArr;
		this._showAll = false;
	}

	/*
	fn filter2MonthYear
	Filters MonthYear array down to 1 selected month
	*/
	filter2MonthYear(monthYear: string) {
		this._monthYear = [monthYear];
		this._showAll = true;
	}
}