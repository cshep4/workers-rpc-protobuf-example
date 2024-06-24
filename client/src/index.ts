import {Env} from "../worker-configuration";
import {create, toJson} from "@bufbuild/protobuf";
import {SayHelloRequestSchema, SayHelloResponseSchema} from "@cshep4/proto-registry/gen/connectes/hello/v1/service_pb";

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const body = await request.text()
		console.log(body)

		const res = await env.RPC_SERVER.sayHello(create(SayHelloRequestSchema, {
			name: body
		}))

		return new Response(JSON.stringify(toJson(SayHelloResponseSchema, res)));
	},
} satisfies ExportedHandler<Env>;
