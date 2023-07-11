export const updateWinners=(receivedName,wins)=>{
    return({
        type: "update_winners",
        data:
            JSON.stringify([
                {
                    name: receivedName,
                    wins: wins ,
                }
            ]),
        id: 0,
    })
}