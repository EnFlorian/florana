import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-newsletter-section',
  templateUrl: './newsletter-section.component.html',
  styleUrls: ['./newsletter-section.component.scss'],
})
export class NewsletterSectionComponent {
  error: boolean = false;

  constructor(private matDialog: MatDialog) {}

  handleSubmit(event: Event) {
    event.preventDefault();
    this.matDialog.open(ModalComponent, {});
  }
}
