module.exports = {
  friendlyName: 'Hello',
  exits: { success: { outputType: 'string' } },
  fn: async function () {
    return 'Hello from Sails on Liftoff';
  },
};
