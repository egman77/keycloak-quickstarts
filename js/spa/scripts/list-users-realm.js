import { readFileSync } from 'node:fs';
import adminClient from './keycloak-admin-client.js';

const users=await adminClient.users.find({first :0 , max : 10 });

console.log(users);