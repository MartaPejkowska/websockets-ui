export const addShips=(data)=>{

    const parsedData=JSON.parse(data)
    const ships=parsedData.ships
    const indexPlayer=parsedData.indexPlayer

    const occupiedFields=[]

    occupiedFields.push({indexPlayer:indexPlayer})

    ships.forEach(ship => {

        if(ship.direction===true){

            for (let i=0;i<ship.length;i++){
                occupiedFields.push({x:ship.position.x, y:(ship.position.y+i)})

            }

        }
        else if (ship.direction===false){
           for (let j=0;j<ship.length;j++){
            occupiedFields.push({x:(ship.position.x+j),y:ship.position.y})
           }
        }
    });
    console.log(occupiedFields)

    const message={
        type:'start_game',
        data:JSON.stringify({
                ships:ships,
                currentPlayerIndex:0
        }),
        id:0
    }


    return {message,occupiedFields}

}