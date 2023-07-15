import { users } from "../db/userData"
const wins:number[]=[]

export const updateWinners=(receivedName:string,win:number,winnerId:number)=>{

    const winUser=users.find(user=>user.index===winnerId)
    const name=winUser!.name
    wins.push(winnerId)

    const winOne=wins.filter(el=>el===winnerId)

    return({
        type: "update_winners",
        data:
            JSON.stringify([
                {
                    name: receivedName||name,
                    wins: winOne.length ,
                }
            ]),
        id: 0,
    })
}
