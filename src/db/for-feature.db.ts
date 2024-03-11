import { User, UserSchema } from 'src/module/user/entities/user.entity';
import { Client, ClientSchema } from 'src/module/client/entities/client.entity';

export default [
  { name: User.name, schema: UserSchema },
  { name: Client.name, schema: ClientSchema },
];
