import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { resolveService } from '../../middleware/service-resolver';

@Injectable()
export class ProxyService {
  constructor(private readonly httpService: HttpService) { }

  async forwardRequest(
    service: string,
    path: string,
    method: string,
    body?: any,
    headers?: any,
    queryParams?: any,
  ): Promise<AxiosResponse> {
    let baseUrl: string;

    try {
      // 🔑 THIS IS THE KEY LINE
      baseUrl = await resolveService(service);
    } catch (err: any) {
      throw new HttpException(
        err.message || `Service ${service} not allowed`,
        HttpStatus.FORBIDDEN,
      );
    }

    const url = `${baseUrl}${path}`;

    try {
      switch (method.toUpperCase()) {
        case 'GET':
          return await firstValueFrom(
            this.httpService.get(url, { headers, params: queryParams }),
          );

        case 'POST':
          return await firstValueFrom(
            this.httpService.post(url, body, { headers, params: queryParams }),
          );

        case 'PUT':
          return await firstValueFrom(
            this.httpService.put(url, body, { headers, params: queryParams }),
          );

        case 'PATCH':
          return await firstValueFrom(
            this.httpService.patch(url, body, { headers, params: queryParams }),
          );

        case 'DELETE':
          return await firstValueFrom(
            this.httpService.delete(url, { headers, params: queryParams }),
          );

        default:
          throw new HttpException(
            `Method ${method} not supported`,
            HttpStatus.METHOD_NOT_ALLOWED,
          );
      }
    } catch (error: any) {
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

  getServiceStatus() {
    return [
      { name: 'user-service', url: process.env.USER_SERVICE_URL || 'http://localhost:12401', status: 'active' },
      { name: 'alert-service', url: process.env.ALERT_SERVICE_URL || 'http://localhost:12402', status: 'active' },
      { name: 'incident-service', url: process.env.INCIDENT_SERVICE_URL || 'http://localhost:12403', status: 'active' },
      { name: 'notification-service', url: process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:12404', status: 'active' },
      { name: 'oncall-service', url: process.env.ONCALL_SERVICE_URL || 'http://localhost:12405', status: 'active' },
      { name: 'analytics-service', url: process.env.ANALYTICS_SERVICE_URL || 'http://localhost:12406', status: 'active' },
    ];
  }
}
