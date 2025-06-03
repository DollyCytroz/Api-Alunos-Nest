import { Test, TestingModule } from '@nestjs/testing';
import { NotaAlunoService } from './notasaluno.service';

describe('NotasalunoService', () => {
  let service: NotaAlunoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotaAlunoService],
    }).compile();

    service = module.get<NotaAlunoService>(NotaAlunoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
