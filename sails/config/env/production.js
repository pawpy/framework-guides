// As `sails new` writes it, comments dropped, with what Liftoff needs:
// sockets.onlyAllowOrigins (Sails refuses to lift in production without it),
// the session secret from a variable, and the edge's HTTPS trusted.
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
    secret: process.env.SESSION_SECRET,
    cookie: {
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  },
  sockets: {
    onlyAllowOrigins: [`https://${process.env.LIFTOFF_PUBLIC_DOMAIN}`],
  },
  log: {
    level: 'debug'
  },
  http: {
    cache: 365.25 * 24 * 60 * 60 * 1000,
    trustProxy: true,
  },
  custom: {
    baseUrl: 'https://example.com',
    internalEmailAddress: 'support@example.com',
  },
};
