import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class ProxyService {
    private readonly serviceUrls = {
        users: process.env.USER_SERVICE_URL || 'http://localhost:3001',
        alerts: process.env.ALERT_SERVICE_URL || 'http://localhost:3002',
        incidents: process.env.INCIDENT_SERVICE_URL || 'http://localhost:3003',
        notifications: process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:3004',
        oncall: process.env.ONCALL_SERVICE_URL || 'http://localhost:3005',
        analytics: process.env.ANALYTICS_SERVICE_URL || 'http://localhost:3006',
    };

    constructor(private readonly httpService: HttpService) { }

    async forwardRequest(
        service: string,
        path: string,
        method: string,
        body?: any,
        headers?: any,
        queryParams?: any,
    ): Promise<AxiosResponse> {
        const serviceUrl = this.serviceUrls[service];

        if (!serviceUrl) {
            throw new HttpException(
                `Service ${service} not found`,
                HttpStatus.NOT_FOUND,
            );
        }

        const url = `${serviceUrl}${path}`;

        try {
            let response: AxiosResponse;

            switch (method.toUpperCase()) {
                case 'GET':
                    response = await firstValueFrom(
                        this.httpService.get(url, {
                            headers,
                            params: queryParams,
                        }),
                    );
                    break;
                case 'POST':
                    response = await firstValueFrom(
                        this.httpService.post(url, body, {
                            headers,
                            params: queryParams,
                        }),
                    );
                    break;
                case 'PUT':
                    response = await firstValueFrom(
                        this.httpService.put(url, body, {
                            headers,
                            params: queryParams,
                        }),
                    );
                    break;
                case 'PATCH':
                    response = await firstValueFrom(
                        this.httpService.patch(url, body, {
                            headers,
                            params: queryParams,
                        }),
                    );
                    break;
                case 'DELETE':
                    response = await firstValueFrom(
                        this.httpService.delete(url, {
                            headers,
                            params: queryParams,
                        }),
                    );
                    break;
                default:
                    throw new HttpException(
                        `Method ${method} not supported`,
                        HttpStatus.METHOD_NOT_ALLOWED,
                    );
            }

            return response;
        } catch (error) {
            if (error.response) {
                throw new HttpException(
                    error.response.data,
                    error.response.status,
                );
            }
            throw new HttpException(
                'Service unavailable',
                HttpStatus.SERVICE_UNAVAILABLE,
            );
        }
    }

    getServiceStatus(): Record<string, string> {
        return this.serviceUrls;
    }
}
