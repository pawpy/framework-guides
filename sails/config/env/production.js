// As `sails new` writes it, comments dropped.
module.exports = {
  datastores: {
    default: {
    },
  },
  models: {
    migrate: 'safe',
  },
  blueprints: {
    shortcuts: false,
  },
  security: {
    cors: {
    },
  },
  session: {
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  },
  sockets: {
  },
  log: {
    level: 'debug'
  },
  http: {
    cache: 365.25 * 24 * 60 * 60 * 1000,
  },
  custom: {
    baseUrl: 'https://example.com',
    internalEmailAddress: 'support@example.com',
  },
};
