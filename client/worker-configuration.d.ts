import {WorkerEntrypoint} from "cloudflare:workers";
import {SayHelloRequest, SayHelloResponse} from "@cshep4/proto-registry/gen/connectes/hello/v1/service_pb";

declare class RPCServer extends WorkerEntrypoint {
	sayHello(req: SayHelloRequest): Promise<SayHelloResponse>;
}

interface Env {
	RPC_SERVER: Service<RPCServer>;
}
