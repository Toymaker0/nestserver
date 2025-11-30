import { Test, TestingModule } from '@nestjs/testing';
import { SelectionAreaService } from './selection-area.service';

describe('SelectionAreaService', () => {
  let service: SelectionAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SelectionAreaService],
    }).compile();

    service = module.get<SelectionAreaService>(SelectionAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
