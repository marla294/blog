export class Post {
	date: Date;
	monthYear: string;
	constructor(public id: string, public title: string, public dateStr: string) {
		this.date = new Date(dateStr);
		/*this.monthYear = this.date.getMonth().toString() + this.date.getFullYear().toString()*/
		this.monthYear = this.getMonthFullName(this.date.getMonth()) + ' ' + this.date.getFullYear().toString()
	}

	getMonthFullName(month: number): string {
		var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  		return monthNames[month];
	}
}