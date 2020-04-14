require('dotenv').config();
const app = require('./app');
require('./database')

//funcion que inicia el programa
async function main(){
  await app.listen(4000);
  console.log('server on port 4000')
}

main();