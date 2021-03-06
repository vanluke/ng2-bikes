import convict from 'convict';

const config = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  ip: {
    doc: 'The IP address.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS',
  },
  port: {
    doc: 'The port.',
    format: 'port',
    default: 1337,
    env: 'PORT',
  },
  host: {
    doc: 'The host.',
    format: '*',
    default: 'localhost',
    env: 'HOST',
  },
  version: {
    doc: 'Version.',
    format: '*',
    default: '0',
    env: 'VERSION',
  },
  io: {
    auth: {
     namespace: {
       doc: 'auth namespace',
       env: '',
       default: '',
       format: 'String',
     },
    }
  }
});

const env = config.get('env');
config.loadFile(`./server/config/${env}.json`);
config.validate({ strict: true });

export default config;