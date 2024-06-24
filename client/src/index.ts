import {Env} from "../worker-configuration";

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const body = await request.text()
		console.log(body)

		const res = await env.RPC_SERVER.sayHello({
			name: body
		})

		return new Response(JSON.stringify(res));
	},
} satisfies ExportedHandler<Env>;
