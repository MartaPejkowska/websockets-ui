import { WebSocketServer } from 'ws';
import {WebSocket} from 'ws'
import { login } from './login';
import { addShips } from './addShips';
import {updateRoom} from './updateRoom';
import { updateWinners } from './updateWinners';
import { addUser } from './addUser';
import { attack } from './attack';
import { addMessageType } from '../types/addMessageType';
import { occupiedFieldsType } from '../types/occupiedFieldsType';
import { attackMessageType } from '../types/attackMessageType';

const occupiedFields:occupiedFieldsType=[]

export const websocket=(PORT:number)=>{
  const wss = new WebSocketServer({ port:PORT });

  wss.on('connection', function connection(ws:WebSocket) {

    ws.on('error', console.error);

    ws.on('message', async function message(data) {
      console.log('received: %s', data);
      let stringified=data.toString()
      let dataToObject=JSON.parse(stringified)
      let type=dataToObject.type
      console.log('toobject',dataToObject,'type',type)


        if(type==='reg'){
          console.log('jestem w reg')
            const name=JSON.parse(dataToObject.data).name
            const password=JSON.parse(dataToObject.data).password
            const message=login(name, password)



            console.log('message',JSON.stringify(message))
            ws.send(JSON.stringify(message))

            // const roomMessage=updateRoom(name)
            // console.log('roommesage',JSON.stringify(roomMessage))
            // ws.send(JSON.stringify(roomMessage))

            // const winnerMessage= updateWinners(name,0)
            // console.log('winnerMesage',winnerMessage)
            // ws.send(JSON.stringify(winnerMessage))

          }
          else if(type==='create_room'){
            let roomResponse=updateRoom()
            console.log(roomResponse)

            wss.clients.forEach(function e(ws:WebSocket){
              ws.send(JSON.stringify(roomResponse))
            })
            // wss.clients.forEach(function e(ws){
            //   ws.send(JSON.stringify({
            //     type: "update_room",
            //     data:
            //         JSON.stringify([
            //             {
            //                 roomId: 1,
            //                 roomUsers:
            //                     [
            //                         {
            //                             name: names[0],
            //                             index: 0,
            //                         }
            //                     ],
            //             },
            //         ]),
            //     id: 0,
            //   }))
            // })

          }
          else if (type==='add_user_to_room') {
            const indexRoom=JSON.parse(dataToObject.data).indexRoom
            const addMessage=addUser(indexRoom)

            console.log(addMessage.responseForOne)

            wss.clients.forEach((client)=>{
              if(client != ws){
                client.send(JSON.stringify(addMessage.responseForOne))
              }
              else
               {client.send(JSON.stringify(addMessage.responseForTwo))}
            })



        //     ws.send(JSON.stringify({
        //       type: "create_game", //send for both players in the room
        //       data:
        //           JSON.stringify({
        //               idGame: 1,
        //               idPlayer: 1,
        //           }),
        //       id: 0,
        //   }))
        // })
          }
          else if (type==='add_ships'){
            const addMessage=  addShips(dataToObject.data) as addMessageType
            console.log('addmessage',addMessage)
            ws.send(JSON.stringify(addMessage.message))
            // @ts-ignore
            occupiedFields.push(addMessage.occupiedFields)

          }
          else if (type==='attack'){
// @ts-ignore
            const attackMessage=attack(dataToObject.data, occupiedFields) as attackMessageType
            console.log(attackMessage)
            wss.clients.forEach(function e(ws:WebSocket){
            ws.send(JSON.stringify(attackMessage!.attackMessage))
            if(attackMessage!.turnMessage){
              ws.send(JSON.stringify(attackMessage.turnMessage))
            }
          })}
      })




      ws.on('close', ()=>{
        ws.send(JSON.stringify({message:'Disconected'}))
        console.log('Disconected')})
    }

      )



  console.log(`Websocket server running on ${PORT} port!`)
  }

