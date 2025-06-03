import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NotaAluno, NotaAlunoDocument } from './notasaluno.schema';
import { Model } from 'mongoose';

@Injectable()
export class NotaAlunoService {
  constructor(
    @InjectModel(NotaAluno.name)
    private notaAlunoModel: Model<NotaAlunoDocument>,
  ) {}

  async findAll(): Promise<NotaAluno[]> {
    return this.notaAlunoModel.find().exec();
  }

  async create(notaAluno: NotaAluno): Promise<NotaAluno> { 
    const novoAlunoNota = new this.notaAlunoModel(NotaAluno);
    return novoAlunoNota.save(); 
  }

  async remove(id: string): Promise<void> {
    const resultado = await this.notaAlunoModel.deleteOne({ _id: id}).exec();
    if (resultado.deletedCount === 0) {
      throw new NotFoundException(`Aluno com o ID ${id} não encontrado`);
    }
  }

  async update(id: string, notaAluno: NotaAluno): Promise<NotaAluno> {
    const alunoNotaAtualizado = await this.notaAlunoModel.findByIdAndUpdate(id, NotaAluno, { new: true}).exec();

    if (!alunoNotaAtualizado) {
      throw new NotFoundException(`Livro com ID ${id} não encontrado`);
    }
    return alunoNotaAtualizado; 
  }
}
