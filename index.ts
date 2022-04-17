import app from './src/server';
import {db} from './src/database/db';

app.listen(3000, async () => {
  await db.sync();
  console.log('rodando em 3000');
})