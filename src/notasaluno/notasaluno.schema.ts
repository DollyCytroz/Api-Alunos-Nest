import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotaAlunoDocument = NotaAluno & Document; 

@Schema()
export class NotaAluno {
  @Prop({ required: true })
  aluno: string;

  @Prop({ required: true })
  disciplina: string; 

  @Prop({ required: true })
  nota: number;

}

export const NotaAlunoSchema = SchemaFactory.createForClass(NotaAluno); 
 