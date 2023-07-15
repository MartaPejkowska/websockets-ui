import { rooms } from "../db/roomData"
import {users} from '../db/userData'
import { RoomType } from "../types/roomType";
import { roomUserType } from "../types/roomUserType";


export const updateRoom=()=>{
    console.log(users)

     const roomUsers:roomUserType[][]=users.map(user=>{
        return [{name:user.name,index:user.index}]
      })
       console.log(roomUsers[0])
        const newRoom:RoomType={
            roomId:rooms.length,
            roomUsers: roomUsers
        }
        rooms.push(newRoom)
        console.log('rooms',JSON.stringify(rooms))

          const responseOne = {
            type: 'update_room',
            data: JSON.stringify( [
              {
                  roomId: rooms[0].roomId,
                  roomUsers:
                      [
                          {
                              name: roomUsers[0][0].name,
                              index: roomUsers[0][0].index,
                          }
                      ],
              },
          ],),
            id:0,
          };
          const responseTwo = {
            type: 'update_room',
            data: JSON.stringify( [
              {
                  roomId: rooms[0].roomId,
                  roomUsers:
                      [
                          {
                              name: roomUsers[1][0].name,
                              index: roomUsers[1][0].index,
                          }
                      ],
              },
          ],),
            id:0,
          };
          return {responseOne,responseTwo}
        ;
      };


