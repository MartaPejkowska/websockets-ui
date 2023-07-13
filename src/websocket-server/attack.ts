import { occupiedFieldsType } from "../types/occupiedFieldsType"

export const attack=(data:any, occupiedFields:occupiedFieldsType[])=>{
    console.log('in attack data',data)
    const coordinates={x:JSON.parse(data).x,y:JSON.parse(data).y}

const occupiedFieldsUserOne=occupiedFields[0]
const occupiedFieldsUserTwo=occupiedFields[1]


const indexOne=occupiedFieldsUserOne[0].indexPlayer
const indexTwo=occupiedFieldsUserTwo[0].indexPlayer

const currentPlayerIndex= JSON.parse(data).indexPlayer
const nextPlayerIndex= currentPlayerIndex===indexOne? indexTwo : indexOne
console.log('currentindex',currentPlayerIndex)

console.log('1',occupiedFieldsUserOne),
console.log('2',occupiedFieldsUserTwo)
console.log('index',indexOne)

occupiedFieldsUserOne.some(e=>e.x===coordinates.x && e.y===coordinates.y)

const updateMessage=(status:string)=>{
    const attackMessage={
        type: "attack",
        data:
            JSON.stringify({
                position:
                {
                    x: coordinates.x,
                    y: coordinates.y,
                },
                currentPlayer: currentPlayerIndex, /* id of the player in the current game */
                status: status,
            }),
        id: 0,

    }
    const turnMessage={
        type: "turn",
        data:
            JSON.stringify({
                currentPlayer: currentPlayerIndex,
            }),
        id: 0,
    }
    if(status==='miss' || status==='kill'){

        return {attackMessage,turnMessage}
    }
    else return attackMessage
}

if(currentPlayerIndex===indexOne){
    if(occupiedFieldsUserTwo.some(e=>e.x===coordinates.x && e.y===coordinates.y)){
        let status='shot'
        const message=updateMessage(status)
        return message
    }
    else {

            let status='miss'
            const message=updateMessage(status)
            return message


    }
}

else if (currentPlayerIndex!== indexOne){

    if(occupiedFieldsUserOne.some(e=>e.x===coordinates.x && e.y===coordinates.y)){
        let status='shot'
        const message=updateMessage(status)
        return message
    }
    else {
        let status='miss'
        const message=updateMessage(status)
        return message
    }
}
}