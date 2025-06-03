import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotaAluno, NotaAlunoSchema } from './notasaluno.schema';
import { NotaAlunoService } from './notasaluno.service';
import { NotaAlunoController } from './notasaluno.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: NotaAluno.name, schema: NotaAlunoSchema}])
  ],
  providers: [NotaAlunoService],
  controllers: [NotaAlunoController],
})

export class NotaAlunoModule {}