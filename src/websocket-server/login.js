import {users} from '../db/userData.js'


export const login= (reqName,reqPassword)=>{
  let indexPlayer=users.length

  let user=users.find((user)=>user.name===reqName && user.password===reqPassword)

    if (!user){
      users.push({name:reqName,password:reqPassword,index:indexPlayer})
        return(
            {
                type:'reg',
                data:JSON.stringify({
                  name:reqName,
                  index:indexPlayer,
                  error:false,
                  errorText:'Ok'
                }),
                id:0
            }
          )

      }

      else if (user){
        console.log('already exist')

        return {
          type:'reg',
          data:JSON.stringify({
            name:reqName,
            index:null,
            error:true,
            errorText:'User already exist'
          }),
          id:0
      }
      }

    console.log('users',users)
    }





