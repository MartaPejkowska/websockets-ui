import { rooms } from "../db/roomData.js"
import {users} from '../db/userData.js'

// export const updateRoom=(receivedName)=>{

//     roomUsers.push(receivedName)

//     if (!receivedName){
//         return {
//         type: "update_room",
//         data: "",
//         id: 0,
//     }
//     }

// return({
//     type: "update_room",
//     data:
//         [
//             JSON.stringify({
//                 roomId: 1,
//                 roomUsers:
//                     JSON.stringify([
//                         {
//                             name: receivedName,
//                             index: roomUsers.length,
//                         }
//                     ]),
//             }),
//         ],
//     id: 0,
// })
// }

// export default updateRoom

export const updateRoom=(client)=>{
    console.log(users)



     const roomUsers=users.map(user=>{
        return [{name:user.name,index:user.index}]
      })
       console.log(roomUsers)
        const newRoom={
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


