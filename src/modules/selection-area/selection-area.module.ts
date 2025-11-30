import { Module } from '@nestjs/common';
import { SelectionAreaService } from './selection-area.service';
import { SelectionAreaController } from './selection-area.controller';

@Module({
  controllers: [SelectionAreaController],
  providers: [SelectionAreaService],
})
export class SelectionAreaModule {}
