export const updateWinners=(receivedName:string,wins:number)=>{
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