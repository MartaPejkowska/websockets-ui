import users from '../db/userData.json' assert { type: "json" }
import fs from 'fs';
import path from 'path'


export const login=(reqName,reqPassword)=>{


  let user=users.find((user)=>user.name===reqName && user.password===reqPassword)
  let login=users.find((user)=>user.name===reqName)

    if (user){

        return(
            {
                type:'reg',
                data:JSON.stringify({
                  name:reqName,
                  password:reqPassword
                }),
                id:0
            }
          )

      }

      else if (login){
        console.log('bad password')

        const newUser={
          name:reqName,
          password:reqPassword
        }


        users.push(newUser)

        fs.writeFileSync(path.resolve('src/db/userData.json'), JSON.stringify(users), 'utf8')

        return {
          type:'reg',
          data:JSON.stringify({
            name:reqName,
            password:reqPassword,
            error:true,
            errorText:'Wrong password'
          }),
          id:0
      }
      }

    else {
      console.log('bad user')

      const newUser={
        name:reqName,
        password:reqPassword
      }

      users.push(newUser)

      fs.writeFileSync(path.resolve('src/db/userData.json'), JSON.stringify(users), 'utf8')

      return {
        type:'reg',
        data:JSON.stringify({
          name:reqName,
          password:reqPassword,
          error:true,
          errorText:'There is no such user'
        }),
        id:0
    }
    }

  }



