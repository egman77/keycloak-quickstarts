import { readFileSync } from 'node:fs';
import adminClient from './keycloak-admin-client.js';
//import KcAdminClient from '@keycloak/keycloak-admin-client';
//import config from '../config/config.js';

//const adminClient=new KcAdminClient(config.adminClient);
//await adminClient.auth(config.adminClient);


//const users=await adminClient.users;
const users=await adminClient.users.find({first :0 , max : 10 });

console.log(users);
