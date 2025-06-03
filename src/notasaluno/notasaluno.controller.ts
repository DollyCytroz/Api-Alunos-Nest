import { Controller, Get, Post, Body, Delete, Put, Param } from '@nestjs/common';
import { NotaAlunoService } from './notasaluno.service';
import { NotaAluno } from './notasaluno.schema';

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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notaAlunoService.remove(id); 
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() notaAluno: NotaAluno) {
    return this.notaAlunoService.update(id, notaAluno); 
  }
}
