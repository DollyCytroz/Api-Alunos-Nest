import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RateLimitMiddleware } from './rate-limit.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const rateLimitMiddleware = new RateLimitMiddleware(); // nome minúsculo

  app.use(rateLimitMiddleware.use.bind(rateLimitMiddleware)); // corrigido

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
