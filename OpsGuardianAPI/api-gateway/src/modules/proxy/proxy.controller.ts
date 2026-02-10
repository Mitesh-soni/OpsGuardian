import {
    Controller,
    All,
    Req,
    Res,
    Param,
    Get,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ProxyService } from './proxy.service';

@Controller()
export class ProxyController {
    constructor(private readonly proxyService: ProxyService) { }

    @Get('services')
    getServices() {
        return {
            message: 'Available services',
            services: this.proxyService.getServiceStatus(),
        };
    }

    // User Service Routes
    @All('users/*path')
    async proxyToUserService(@Req() req: Request, @Res() res: Response) {
        return this.forwardRequest('users', req, res);
    }

    // Alert Service Routes
    @All('alerts/*path')
    async proxyToAlertService(@Req() req: Request, @Res() res: Response) {
        return this.forwardRequest('alerts', req, res);
    }

    // Incident Service Routes
    @All('incidents/*path')
    async proxyToIncidentService(@Req() req: Request, @Res() res: Response) {
        return this.forwardRequest('incidents', req, res);
    }

    // Notification Service Routes
    @All('notifications/*path')
    async proxyToNotificationService(@Req() req: Request, @Res() res: Response) {
        return this.forwardRequest('notifications', req, res);
    }

    // OnCall Service Routes
    @All('oncall/*path')
    async proxyToOnCallService(@Req() req: Request, @Res() res: Response) {
        return this.forwardRequest('oncall', req, res);
    }

    // Analytics Service Routes
    @All('analytics/*path')
    async proxyToAnalyticsService(@Req() req: Request, @Res() res: Response) {
        return this.forwardRequest('analytics', req, res);
    }

    private async forwardRequest(
        service: string,
        req: Request,
        res: Response,
    ) {
        try {
            // Extract the path after the service name
            const path = req.url.replace(`/${service}`, '');

            const response = await this.proxyService.forwardRequest(
                service,
                path || '/',
                req.method,
                req.body,
                req.headers,
                req.query,
            );

            res.status(response.status).json(response.data);
        } catch (error) {
            res.status(error.status || 500).json(error.response || {
                message: 'Internal server error',
            });
        }
    }
}
