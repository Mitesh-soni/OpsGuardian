import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LIVE_SERVICES } from './service-access.config';

let LOCAL_SERVICES: string[] | undefined;

try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    LOCAL_SERVICES = require('./service-access.config').LOCAL_SERVICES;
} catch {
    LOCAL_SERVICES = undefined;
}

@Injectable()
export class ServiceGuardMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const serviceName = Array.isArray(req.params.service)
            ? req.params.service[0]
            : req.params.service;

        const allowed =
            LOCAL_SERVICES?.includes(serviceName) ||
            Object.keys(LIVE_SERVICES).includes(serviceName);

        if (!allowed) {
            return res.status(403).json({
                message: `Service "${serviceName}" is not enabled for this developer`,
            });
        }

        next();
    }
}
