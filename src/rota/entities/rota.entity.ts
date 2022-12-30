import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rota {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  originAddress: string;

  @Column({type: 'double precision'})
  originCoordinateLat: number;

  @Column({type: 'double precision'})
  originCoordinateLng: number;

  @Column()
  destinationAddress: string;

  @Column({type: 'double precision'})
  destinationCoordinateLat: number;

  @Column({type: 'double precision'})
  destinationCoordinateLng: number;

  @Column()
  distanceText: string;

  @Column({type: 'double precision'})
  distanceValue: number;

  @Column()
  durationText: string;

  @Column()
  durationValue: number;

  @Column({type: 'double precision'})
  valueTotal: number;
}
