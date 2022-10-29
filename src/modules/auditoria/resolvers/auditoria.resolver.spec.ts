import { Test, TestingModule } from '@nestjs/testing';
import { AuditoriaResolver } from './auditoria.resolver';
import { AuditoriaService } from '../services/auditoria.service';

describe('AuditoriaResolver', () => {
  let resolver: AuditoriaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditoriaResolver, AuditoriaService],
    }).compile();

    resolver = module.get<AuditoriaResolver>(AuditoriaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
