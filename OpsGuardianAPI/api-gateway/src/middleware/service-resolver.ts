import Consul from 'consul';
import { LIVE_SERVICES } from './service-access.config';

let LOCAL_SERVICES: string[] | undefined;

try {
    // This will fail safely if commented
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    LOCAL_SERVICES = require('./service-access.config').LOCAL_SERVICES;
} catch {
    LOCAL_SERVICES = undefined;
}

const consul = new Consul({
    host: 'localhost',
    port: 8500,
});

export async function resolveService(serviceName: string): Promise<string> {
    // 🧑‍💻 LOCAL MODE
    if (LOCAL_SERVICES?.includes(serviceName)) {
        const nodes = await consul.catalog.service.nodes(serviceName);

        if (!nodes.length) {
            throw new Error(`Local service ${serviceName} is not running`);
        }

        const service = nodes[0];
        return `http://${service.Address}:${service.ServicePort}`;
    }

    // 🚀 LIVE MODE (TAILSCALE)
    const liveUrl = LIVE_SERVICES[serviceName];
    if (!liveUrl) {
        throw new Error(`Service ${serviceName} is not allowed`);
    }

    return liveUrl;
}
