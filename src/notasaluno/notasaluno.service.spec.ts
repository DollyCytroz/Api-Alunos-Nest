import { Test, TestingModule } from '@nestjs/testing';
import { NotasalunoService } from './notasaluno.service';

describe('NotasalunoService', () => {
  let service: NotasalunoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotasalunoService],
    }).compile();

    service = module.get<NotasalunoService>(NotasalunoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
