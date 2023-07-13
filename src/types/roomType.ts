import { roomUserType } from './roomUserType';
import { UserType } from './userType';

export type RoomType = {
  roomId: number,
  roomUsers: roomUserType[][],
};