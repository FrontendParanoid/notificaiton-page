import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Notification } from './models/notification.model';
import { NotifcationService } from './services/notifcation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [NotifcationService],
})
export class AppComponent implements OnInit {
  notifications: Notification[] = [];
  constructor(private notificationService: NotifcationService) {}

  ngOnInit(): void {
    this.notifications = this.notificationService.GetAll();
  }
}
