import { Injectable } from '@angular/core';
import { Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotifcationService {
  constructor() {}
  notifications: Notification[] = [
    {
      id: 1,
      user: 'Mark Webber',
      action: 'reacted to your recent post',
      item: 'My first tournament today!',
      time: '1m ago',
      read: false,
      picturePath: '/images/avatar-mark-webber.webp',
      isClub: false,
    },
    {
      id: 2,
      user: 'Angela Gray',
      action: 'followed you',
      time: '5m ago',
      read: false,
      picturePath: '/images/avatar-angela-gray.webp',
      isClub: false,
    },
    {
      id: 3,
      user: 'Jacob Thompson',
      action: 'has joined your group',
      item: 'Chess Club',
      time: '1 day ago',
      read: false,
      picturePath: '/images/avatar-jacob-thompson.webp',
      isClub: true,
    },
    {
      id: 4,
      user: 'Rizky Hasanuddin',
      action: 'sent you a private message',
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: '5 days ago',
      read: true,
      picturePath: '/images/avatar-rizky-hasanuddin.webp',
      isClub: false,
    },
    {
      id: 5,
      user: 'Kimberly Smith',
      action: 'commented on your picture',
      time: '1 week ago',
      read: true,
      picturePath: '/images/avatar-kimberly-smith.webp',
      isClub: false,
      imagePath: '/images/image-chess.webp',
    },
    {
      id: 6,
      user: 'Nathan Peterson',
      action: 'reacted to your recent post',
      item: '5 end-game strategies to increase your win rate',
      time: '2 weeks ago',
      read: true,
      picturePath: '/images/avatar-nathan-peterson.webp',
      isClub: false,
    },
    {
      id: 7,
      user: 'Anna Kim',
      action: 'left the group',
      item: 'Chess Club',
      time: '2 weeks ago',
      read: true,
      picturePath: '/images/avatar-anna-kim.webp',
      isClub: true,
    },
  ];

  GetAll() {
    return this.notifications;
  }
}
