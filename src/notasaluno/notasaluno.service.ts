import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotaAluno } from './notasaluno.entity';

@Injectable()
export class NotaAlunoService {
  constructor(
    @InjectRepository(NotaAluno)
    private notaAlunoRepository: Repository<NotaAluno>,
  ) {}

  findAll(): Promise<NotaAluno[]> {
    return this.notaAlunoRepository.find();
  }

  create(notaAluno: NotaAluno): Promise<NotaAluno> { 
    return this.notaAlunoRepository.save(notaAluno);
  }
}
