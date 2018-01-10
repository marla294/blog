import { Component }								from '@angular/core';
import { FormBuilder, FormGroup, Validators }		from '@angular/forms';
import { HttpClient, HttpResponse }					from '@angular/common/http';

@Component({
	selector: 'email',
	templateUrl: './email.component.html',
	styleUrls: ['./email.component.css']
})
export class EmailComponent {
	emailForm: FormGroup;
	data: any;

	constructor(private fb: FormBuilder, private http: HttpClient) {
		this.createForm();
	}

	ngOnInit() {
		this.onDataLoad();
	}

	createForm() {
		this.emailForm = this.fb.group({
			senderName: ['', Validators.required],
			senderEmail: ['', Validators.email],
			messageBody: ['', Validators.minLength(1)]
		})
	}

	onSubmit() {
		console.log('Submitted');
	}

	onDataLoad() {
		this.http.get('./assets/data/api/test.php')
				.subscribe(res => this.data = res);
		console.log(this.data);
	}
}