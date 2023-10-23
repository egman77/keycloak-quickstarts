const baseUrl = 'http://192.168.20.37:8080';

export default {
  baseUrl: baseUrl,
  token: {
    username: 'alice',
    password: 'alice',
    grant_type: 'password',
    client_id: 'test-cli',
    realmName: 'quickstart2'
  },
  adminClient: {
    baseUrl: baseUrl,
    realmName: 'master',
    username: 'admin',
    password: 'admin',
    grantType: 'password',
    clientId: 'admin-cli'
  }
};
