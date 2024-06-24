import {WorkerEntrypoint} from "cloudflare:workers";
import { create, toBinary } from "@bufbuild/protobuf";
import {
	SayHelloRequest,
	SayHelloResponse,
	SayHelloResponseSchema,
	SayHelloRequestSchema
} from "@cshep4/proto-registry/gen/connectes/hello/v1/service_pb";

export default class extends WorkerEntrypoint {
	async fetch() {
		return new Response("Hello from RPC server worker");
	}

	async sayHello(request: SayHelloRequest): Promise<SayHelloResponse> {
		console.log(`hello ${request.name} 👋`, toBinary(SayHelloRequestSchema, request))

		return create(SayHelloResponseSchema, {
			message: `hello ${request.name} 👋`,
		})
	}
}
