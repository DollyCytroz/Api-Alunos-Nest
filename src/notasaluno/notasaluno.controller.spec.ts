import { Test, TestingModule } from '@nestjs/testing';
import { NotasalunoController } from './notasaluno.controller';

describe('NotasalunoController', () => {
  let controller: NotasalunoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotasalunoController],
    }).compile();

    controller = module.get<NotasalunoController>(NotasalunoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
