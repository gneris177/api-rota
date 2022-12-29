import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsPhoneNumber,
  IsString,
  IsNotEmpty,
} from 'class-validator';

export class SaveRotaDto {
  @IsNumber()
  @IsNotEmpty({ message: 'O campo nome não pode ficar vazio' })
  originCoordinateLat: number;

  @IsNumber()
  @IsNotEmpty({ message: 'O campo nome não pode ficar vazio' })
  originCoordinateLnt: number;

  @IsString()
  @IsNotEmpty({ message: 'O campo nome não pode ficar vazio' })
  destinationAddresses: string;

  @IsNumber()
  @IsNotEmpty({ message: 'O campo nome não pode ficar vazio' })
  destinationCoordinateLat: number;

  @IsNumber()
  @IsNotEmpty({ message: 'O campo nome não pode ficar vazio' })
  destinationCoordinateLnt: number;

  @IsString()
  @IsNotEmpty({ message: 'O campo nome não pode ficar vazio' })
  distanceText: string;

  @IsNumber()
  @IsNotEmpty({ message: 'O campo nome não pode ficar vazio' })
  distanceValue: number;

  @IsString()
  @IsNotEmpty({ message: 'O campo nome não pode ficar vazio' })
  durationText: string;

  @IsNumber()
  @IsNotEmpty({ message: 'O campo nome não pode ficar vazio' })
  durationValue: number;

  @IsNumber()
  totalValue: number;
}
