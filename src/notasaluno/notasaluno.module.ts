import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotaAluno } from './notasaluno.entity';
import { NotaAlunoService } from './notasaluno.service';
import { NotaAlunoController } from './notasaluno.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NotaAluno])],
  providers: [NotaAlunoService],
  controllers: [NotaAlunoController],
})
export class NotasalunoModule {}
