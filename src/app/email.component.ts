import { Component }								from '@angular/core';
import { FormBuilder, FormGroup, Validators }		from '@angular/forms';

@Component({
	selector: 'email',
	templateUrl: './email.component.html'
})
export class EmailComponent {
	emailForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.createForm();
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
}