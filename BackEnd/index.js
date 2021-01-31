const fastify = require('fastify')({ logger: true });
const dotenv = require('dotenv');
const fetch = require('node-fetch');
dotenv.config();

// simple get method
fastify.get('/', async (request, reply) => {
	reply.send({ hello: 'world!' });
})

// get method with query params
fastify.get('/getRequest', async (request, reply) => {
	reply.send(request.query);
})

// get method with url params
fastify.get('/:username', async (request, reply) => {
	reply.send(request.params);
})

// post method with calling external api
fastify.post('/', async (request, reply) => {
	try {
		if (!request.body.username) {
			reply.code(400).send(new Error(`Username key was ${request.body.username}`));
		}
		const callAPI = await fetch(`https://api.github.com/users/${request.body.username}`, { method: 'GET' });
		const responseAPI = await callAPI.json();
		reply.send(responseAPI);
	} catch (error) {
		reply.code(500).send(error);
	}
})

const start = async () => {
	try {
		await fastify.listen(process.env.PORT);
	} catch (error) {
		fastify.log.error(error);
		process.exit(1)
	}
}

start()