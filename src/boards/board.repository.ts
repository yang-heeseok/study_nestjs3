import { DataSource, Repository } from 'typeorm';
import { Board } from './entities/board.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }

  //   async getBoardById(id: number) {
  //     return await this.findOneBy({ boardId: id });
  //   }
}

// https://velog.io/@sheoae12/NestJS-Custom-Repository-%EB%A7%8C%EB%93%A4%EA%B8%B0
// https://junyharang.tistory.com/523
