import { RotaService } from './rota.service';
import { Body, Controller, Post } from '@nestjs/common';
import { SaveRotaDto } from './dto/save-rota.dto';
import { Get, Param } from '@nestjs/common/decorators';

@Controller('rota')
export class RotaController {
  constructor(private rotaService: RotaService) {}

  @Post('calculate')
  calculate(@Body() data: { distanceMetro: number }) {
    return this.rotaService.calculate(data.distanceMetro);
  }

  @Post('save')
  save(@Body() rota: SaveRotaDto) {
    return this.rotaService.save(rota);
  }

  @Get('find/:coordinates/')
  find(@Param() param) {
    const coordinates = JSON.parse(param.coordinates);
    return this.rotaService.find(coordinates);
  }

  @Get()
  getAll() {
    return this.rotaService.getAll();
  }
}
