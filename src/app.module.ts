import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotaAlunoModule } from './notasaluno/notasaluno.module';
import { RateLimitMiddleware } from './rate-limit.middleware'; 

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/alnotas'),
    NotaAlunoModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RateLimitMiddleware)
      .forRoutes('*'); 
  }
}
