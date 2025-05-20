import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notasalunos') // nome exato da tabela no banco de dados
export class NotaAluno {
  @PrimaryGeneratedColumn()
  id: number; // chave primária para controle interno

  @Column({ type: 'varchar', length: 100, nullable: true })
  aluno: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  disciplina: string;

  @Column({ type: 'decimal', precision: 4, scale: 2, nullable: true })
  nota: number;
}
