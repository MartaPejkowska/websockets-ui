import { occupiedFieldsType } from "../types/occupiedFieldsType"
import { shotFieldsType } from "../types/shotFieldsType"

let shotFields:shotFieldsType[]=[]
export const attack=(data:any, occupiedFields:occupiedFieldsType[])=>{
    console.log('in attack data',data)
const coordinates={x:JSON.parse(data).x,y:JSON.parse(data).y}

const occupiedFieldsUserOne=occupiedFields[0]
const occupiedFieldsUserTwo=occupiedFields[1]


 // @ts-ignore
const indexOne=occupiedFieldsUserOne[0].indexPlayer
// @ts-ignore
const indexTwo=occupiedFieldsUserTwo[0].indexPlayer

const currentPlayerIndex= JSON.parse(data).indexPlayer
const nextPlayerIndex= currentPlayerIndex===indexOne? indexTwo : indexOne

// @ts-ignore
occupiedFieldsUserOne.some(e=>e.x===coordinates.x && e.y===coordinates.y)

const updateWinMessage=(winnerId:number)=>{
shotFields.length=0
occupiedFields.length=0
occupiedFieldsUserOne.length=0
occupiedFieldsUserTwo.length=0
console.log('OCFATTACK',occupiedFields)

return ({
    type: "finish",
    data:
        JSON.stringify({
            winPlayer: winnerId,
        }),
    id: 0,
})
}

const updateMessage=(status:string)=>{
    const shotOne=shotFields.filter(el=>el.currentPlayerIndex===currentPlayerIndex)
    const shotTwo=shotFields.filter(el=>el.currentPlayerIndex===nextPlayerIndex)

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
                currentPlayer: nextPlayerIndex,
            }),
        id: 0,
    }
    if(status==='miss' || status==='kill'){
        if (shotOne.length===20){
            const winnerMessage=updateWinMessage(shotOne[0].currentPlayerIndex)
            return winnerMessage
        }
        else if ( shotTwo.length===20){
            const winnerMessage=updateWinMessage(shotTwo[0].currentPlayerIndex)
            return winnerMessage
        }

        return {attackMessage,turnMessage}
    }
    else {
        if (shotOne.length===20){
            const winnerMessage=updateWinMessage(shotOne[0].currentPlayerIndex)
            return winnerMessage
        }
        else if ( shotTwo.length===20){
            const winnerMessage=updateWinMessage(shotTwo[0].currentPlayerIndex)
            return winnerMessage
        }
        return {attackMessage}}
}
if(currentPlayerIndex===indexOne){
    // @ts-ignore
    if(occupiedFieldsUserTwo.some(e=>e.x===coordinates.x && e.y===coordinates.y)){
        shotFields.push({coordinates,currentPlayerIndex})
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
// @ts-ignore
    if(occupiedFieldsUserOne.some(e=>e.x===coordinates.x && e.y===coordinates.y)){
        shotFields.push({coordinates,currentPlayerIndex})
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