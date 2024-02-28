import { Repository } from 'typeorm';
import { Board } from './entities/board.entity';
import { BoardStatus } from './board.status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { Injectable } from '@nestjs/common';
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';

// https://velog.io/@sheoae12/NestJS-Custom-Repository-%EB%A7%8C%EB%93%A4%EA%B8%B0

export class BoardRepository extends Repository<Board> {}

// @Injectable()
// export class BoardRepository {
//   constructor(private readonly repository: Repository<Board>) {}

//   async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
//     const { title, description } = createBoardDto;

//     const board = this.repository.create({
//       title,
//       description,
//       status: BoardStatus.PUBLIC,
//     });

//     await this.repository.save(board);
//     return board;
//   }
// }
