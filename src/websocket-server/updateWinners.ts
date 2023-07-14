import { users } from "../db/userData"
const wins:number[]=[]

export const updateWinners=(receivedName:string,win:number,winnerId:number)=>{
    console.log(users)
    console.log('wins',wins)
    const winUser=users.find(user=>user.index===winnerId)
    const name=winUser!.name
    wins.push(winnerId)
    const winOne=wins.filter(el=>el===winnerId)
    console.log('winOne',winOne)
    const winTwo=wins.filter(el=>el!==winnerId)
    console.log(winTwo)
    return({
        type: "update_winners",
        data:
            JSON.stringify([
                {
                    name: receivedName||name,
                    wins: winOne.length/2 ,
                }
            ]),
        id: 0,
    })
}
