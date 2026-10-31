const fastify = require('fastify')({ logger: true })

fastify.get('/', async () => ({ hello: 'world' }))

fastify.listen({ port: Number(process.env.PORT) || 3000, host: '0.0.0.0' })
