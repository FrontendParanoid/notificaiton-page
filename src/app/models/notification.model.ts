export interface Notification {
  id: number;
  user: string;
  action: string;
  item?: string;
  picturePath?: string;
  message?: string;
  time: string;
  read: boolean;
  isClub: boolean;
  imagePath?: string;
}
