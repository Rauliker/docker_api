import { Image } from 'src/imagen/imagen.entity';
import { User } from 'src/users/users.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PujaBid } from './pujaBid.entity';

@Entity()
export class Puja {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.createdPujas,{ onDelete: 'CASCADE' })
  @JoinColumn({ name: 'email' })
  creator: User;

  @OneToMany(() => Image, (imagen) => imagen.puja)
  imagenes: Image[];

  @OneToMany(() => PujaBid, (pujaBid) => pujaBid.puja)
  pujas: PujaBid[];

  @Column()
  nombre: string;

  @Column({ default: true })
  open: boolean;

  @Column()
  descripcion: string;

  @Column('decimal')
  pujaInicial: number;

  @Column()
  fechaFin: Date;
}
