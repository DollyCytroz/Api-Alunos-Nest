import { Controller, Get } from '@nestjs/common';
import { NotaAlunoService } from './notasaluno.service';
import { Body, Post } from '@nestjs/common';
import { NotaAluno } from './notasaluno.entity';

@Controller('notasaluno')
export class NotaAlunoController {
  constructor(private readonly notaAlunoService: NotaAlunoService) {}

  @Get()
  findAll() {
    return this.notaAlunoService.findAll();
  }

  @Post()
  create(@Body() notaAluno: NotaAluno) {
    return this.notaAlunoService.create(notaAluno);
  }
}
