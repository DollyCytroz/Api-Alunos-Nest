import { Test, TestingModule } from '@nestjs/testing';
import { NotaAlunoController } from './notasaluno.controller';

describe('NotasalunoController', () => {
  let controller: NotaAlunoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotaAlunoController],
    }).compile();

    controller = module.get<NotaAlunoController>(NotaAlunoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
