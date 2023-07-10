import { WebSocketServer } from 'ws';
import { login } from './login.js';
const WS_PORT=3000;

export const websocket=()=>{
  const wss = new WebSocketServer({ port: 3000 });

  wss.on('connection', function connection(ws) {

    ws.on('error', console.error);

    ws.on('message', async function message(data) {
      const parsed=JSON.parse(data)
      const name=JSON.parse(parsed.data).name
      const password=JSON.parse(parsed.data).password
      console.log('received: %s', data);

      console.log(JSON.stringify({
          type:'reg',
          data:parsed.data,
          id:0
      }
      ))
      switch(parsed.type){
          case('reg'):{
              const message=login(name, password)
              console.log('message',message)
              ws.send(JSON.stringify(message))
          }
          case("create_room"):{
              ws.send()
          }
      }
      // console.log('stringify',JSON.stringify(data))
      // console.log(JSON.stringify({type:"reg",data:JSON.stringify(parsed.data),id:0}))
      // console.log(parsed.type)
      // if(parsed.type==='reg'){

      // }
      // await registerOrLogin
    });

  //   ws.send(JSON.stringify({
  //     type: "reg",
  //     data:
  //         JSON.stringify({
  //             name:'M',
  //             password: 'Password',
  //         }),
  //     id: 0,
  // }));
  });

  console.log(`Websocket server running on ${WS_PORT} port!`)
}
