import { roomUsers } from "../db/roomData.js"

export const updateRoom=(receivedName)=>{

    roomUsers.push(receivedName)

    if (!receivedName){
        return {
        type: "update_room",
        data: "",
        id: 0,
    }
    }

return({
    type: "update_room",
    data:
        [
            JSON.stringify({
                roomId: 1,
                roomUsers:
                    JSON.stringify([
                        {
                            name: receivedName,
                            index: roomUsers.length,
                        }
                    ]),
            }),
        ],
    id: 0,
})
}

export default updateRoom

