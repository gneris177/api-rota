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
  originCoordinateLnt: number;

  @Column()
  destinationAddresses: string;

  @Column({type: 'double precision'})
  destinationCoordinateLat: number;

  @Column({type: 'double precision'})
  destinationCoordinateLnt: number;

  @Column()
  distanceText: string;

  @Column({type: 'double precision'})
  distanceValue: number;

  @Column()
  durationText: string;

  @Column()
  durationValue: number;

  @Column({type: 'double precision'})
  totalValue: number;
}
