import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaNotFoundExceptionFilter } from './excepiton-filters/prima-not-found-exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    errorHttpStatusCode: 422
  }));
  app.useGlobalFilters(new PrismaNotFoundExceptionFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
