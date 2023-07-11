export const addShips=(data)=>{
    console.log('data in add',data)
    return ({
        type:'start_game',
        data:data
    })

}