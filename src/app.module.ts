import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotaAluno } from './notasaluno/notasaluno.entity';
import { NotasalunoModule } from './notasaluno/notasaluno.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // ou '123', dependendo do seu XAMPP
      database: 'alnotas',
      entities: [NotaAluno],
      synchronize: true, // em produção, use false
    }),
    TypeOrmModule.forFeature([NotaAluno]),
    NotasalunoModule,
  ],
})
export class AppModule {}
