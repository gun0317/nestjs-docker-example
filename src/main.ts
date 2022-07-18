import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const DEFAULT_PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(DEFAULT_PORT);
  const nodeEnv = process.env.NODE_ENV;
  console.log(`Server opened in localhost:${DEFAULT_PORT}. NODE_ENV is ${nodeEnv}`);
}
bootstrap();
