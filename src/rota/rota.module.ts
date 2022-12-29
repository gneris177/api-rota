import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RotaController } from './rota.controller';
import { Rota } from './entities/rota.entity';
import { RotaService } from './rota.service';

@Module({
  controllers: [RotaController],
  imports: [TypeOrmModule.forFeature([Rota])],
  providers: [RotaService],
})
export class RotaModule {}
