import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Rota } from './rota/entities/rota.entity';
import { RotaModule } from './rota/rota.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'giross',
      entities: [Rota],
      synchronize: true,
    }), RotaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
