import {users} from '../db/userData.js'


export const login=(name,password)=>{
  console.log(name,password)
  console.log('users',users)
  const user=users.find((user)=>user.name===name)
    if (user){
      if(user.password===password){
        return(
            {
                type:'reg',
                data:JSON.stringify({
                  name:name,
                  password:password
                }),
                id:0
            }
          )

      }
      else {
        console.log('bad user')
        users.push({name:name,password:password})
        console.log('users2',users)
        return {
          type:'reg',
          data:JSON.stringify({
            name:name,
            password:password,
            error:true,
            errorText:'Wrong password'
          }),
          id:0
      }
      }
    }
    else {
      return {
        type:'reg',
        data:JSON.stringify({
          name:name,
          password:password,
          error:true,
          errorText:'There is no such user'
        }),
        id:0
    }
    }

  }



// export const registerOrLogin = (username, password) => {
//   return new Promise((resolve) => {
//     const registeredUser = users.find((user) => user.name === username);
//     if (registeredUser) {
//       if (registeredUser.password === password) {
//         resolve(registeredUser);
//       } else {
//         const userError = {
//           name: username,
//           index: users.length,
//           error: true,
//           errorText: 'Wrong Password',
//         };
//         resolve(userError);
//       }
//     } else {
//       const userToResolve = {
//         name: username,
//         index: users.length,
//         error: false,
//         errorText: '',
//       };
//       const newUser= {
//         name: username,
//         password: password,
//         index: users.length,
//       };
//       resolve(userToResolve);
//       users.push(newUser);
//       console.log(users)
//     }
//   });
// };
