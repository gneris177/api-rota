import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rota } from './entities/rota.entity';
import { SaveRotaDto } from './dto/save-rota.dto';

@Injectable()
export class RotaService {
  constructor(
    @InjectRepository(Rota)
    private rotaRepository: Repository<Rota>,
  ) {}

  calculate(distanceMetro: number): { valueTotal: number } {
    const valueFixed = 5;
    const valueKm = 1.2;
    const distanceKm = distanceMetro / 1000;
    const valueTotal = valueFixed + distanceKm * valueKm;

    return { valueTotal };
  }

  save(rota: SaveRotaDto): Promise<any> {
    console.log('okk')
    console.log(rota)
    return this.rotaRepository.insert(rota);
  }
}
