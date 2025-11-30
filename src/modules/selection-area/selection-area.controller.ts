import { Controller } from '@nestjs/common';
import { SelectionAreaService } from './selection-area.service';

@Controller('selection-area')
export class SelectionAreaController {
  constructor(private readonly selectionAreaService: SelectionAreaService) {}
}
