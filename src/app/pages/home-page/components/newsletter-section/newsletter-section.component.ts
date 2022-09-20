import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-newsletter-section',
  templateUrl: './newsletter-section.component.html',
  styleUrls: ['./newsletter-section.component.scss'],
})
export class NewsletterSectionComponent implements OnInit {
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  handleSubmit(event: Event) {
    console.log(event);
    event.preventDefault();
    this.matDialog.open(ModalComponent, {});
  }
}
