export interface INotification {
  id: number,
  type: string,
  message: string,
}

export interface INotificationsState {
  notification: INotification,
  notifications: Array<INotification>,
}