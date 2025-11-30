import { Test, TestingModule } from '@nestjs/testing';
import { McrudService } from './mcrud.service';

describe('McrudService', () => {
  let service: McrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [McrudService],
    }).compile();

    service = module.get<McrudService>(McrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
