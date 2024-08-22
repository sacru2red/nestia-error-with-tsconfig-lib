import type nestia from '@nestia/sdk';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';

export const NESTIA_CONFIG = {
  input: async () => {
    const app = await NestFactory.create(AppModule);
    return app;
  },
  swagger: {
    output: './swagger.json',
  },
  output: './src/api',
} satisfies nestia.INestiaConfig;
export default NESTIA_CONFIG;
