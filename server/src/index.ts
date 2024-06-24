import {WorkerEntrypoint} from "cloudflare:workers";
import {PlainMessage} from "@bufbuild/protobuf";
import {SayHelloRequest, SayHelloResponse} from "@cshep4/proto-registry/gen/connectes/hello/v1/service_pb";

export default class extends WorkerEntrypoint {
	async fetch() {
		return new Response("Hello from RPC server worker");
	}

	async sayHello(request: PlainMessage<SayHelloRequest>): Promise<PlainMessage<SayHelloResponse>> {
		const req = new SayHelloRequest(request)
		console.log(`hello ${req.name} 👋`, req.toBinary())

		return {
			message: `hello ${req.name} 👋`,
		}
	}
}
