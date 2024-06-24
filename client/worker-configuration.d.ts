import {WorkerEntrypoint} from "cloudflare:workers";
import {SayHelloRequest, SayHelloResponse} from "@cshep4/proto-registry/gen/connectes/hello/v1/service_pb";
import type {PlainMessage} from "@bufbuild/protobuf";

declare class RPCServer extends WorkerEntrypoint {
	sayHello(req: PlainMessage<SayHelloRequest>): Promise<PlainMessage<SayHelloResponse>>;
}

interface Env {
	RPC_SERVER: Service<RPCServer>;
}
