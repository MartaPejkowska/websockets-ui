import { rooms } from '../db/roomData';
import {games} from '../db/gamesData'
import { RoomType } from '../types/roomType';
import { gameType } from '../types/gameType';
import { roomUserType } from '../types/roomUserType';

export const addUser=( indexRoom:number)=>{

    const roomActive:RoomType= rooms.find(( room ) => room.roomId === indexRoom)! ;

    const userOne=roomActive?.roomUsers[0]
    const indexUserOne= roomActive?.roomUsers[0][0].index;

    const userTwo=roomActive?.roomUsers[1][0]
    const indexUserTwo =  roomActive?.roomUsers[1][0].index;

    const idGame = games.length;
    // @ts-ignore
    const game:gameType = { idGame, users: [userOne, userTwo] };
    games.push(game);
    console.log('games',games)

    const responseForOne = {
      type: 'create_game',
      data: JSON.stringify({
        idGame,
        idPlayer:indexUserOne ,
      }),
      id:0,
    };

    const responseForTwo = {
      type: 'create_game',
      data: JSON.stringify({
        idGame,
        idPlayer: indexUserTwo,
      }),
      id:0,
    };
    return {responseForOne,responseForTwo}
  }
;
