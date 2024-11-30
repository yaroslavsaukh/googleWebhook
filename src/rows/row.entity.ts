import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm';

@Entity()
export class Row {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @UpdateDateColumn()
  updatedAt: Date;
}
