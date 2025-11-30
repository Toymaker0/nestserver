import { Test, TestingModule } from '@nestjs/testing';
import { SelectionAreaController } from './selection-area.controller';
import { SelectionAreaService } from './selection-area.service';

describe('SelectionAreaController', () => {
  let controller: SelectionAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SelectionAreaController],
      providers: [SelectionAreaService],
    }).compile();

    controller = module.get<SelectionAreaController>(SelectionAreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
