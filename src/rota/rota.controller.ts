import { RotaService } from './rota.service';
import { Body, Controller, Post } from '@nestjs/common';
import { SaveRotaDto } from './dto/save-rota.dto';

@Controller('rota')
export class RotaController {
  constructor(private rotaService: RotaService) {}

  @Post('calculate')
  calculate(@Body() data: {distanceMetro: number}) {
    return this.rotaService.calculate(data.distanceMetro);
  }

  @Post('save')
  save(@Body() rota: SaveRotaDto) {
    console.log('ok')
    return this.rotaService.save(rota);
  }
}
