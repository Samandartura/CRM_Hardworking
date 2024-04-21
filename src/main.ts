import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const PORT = 3000
  await app.listen(PORT, ()=> {
    console.log(`http://127.0.0.1:${PORT}`);
  });
}
bootstrap();
