import { rooms } from "../db/roomData.js"
import {users} from '../db/userData.js'
import { RoomType } from "../types/roomType.js";
import { roomUserType } from "../types/roomUserType.js";


export const updateRoom=()=>{
    console.log(users)

     const roomUsers:roomUserType[][]=users.map(user=>{
        return [{name:user.name,index:user.index}]
      })
       console.log(roomUsers)
        const newRoom:RoomType={
            roomId:rooms.length,
            roomUsers: roomUsers
        }
        rooms.push(newRoom)
        console.log('rooms',JSON.stringify(rooms))

          const response = {
            type: 'update_room',
            data: JSON.stringify(rooms),
            id:0,
          };
          return response
        ;
      };


