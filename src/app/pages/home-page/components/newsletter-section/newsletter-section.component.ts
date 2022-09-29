import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-newsletter-section',
  templateUrl: './newsletter-section.component.html',
  styleUrls: ['./newsletter-section.component.scss'],
})
export class NewsletterSectionComponent {
  form = this.fb.group({
    email: ['demo@user.at', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder, private matDialog: MatDialog) {}

  onFormSubmit() {
    if (this.form.valid) {
      this.form.get('email').reset();
      this.matDialog.open(ModalComponent, {});
    } else {
      this.form.get('email').markAsTouched();
    }
  }
}
