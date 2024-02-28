import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board.status.enum';
import { Board } from './entities/board.entity';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
// import { CreateBoardDto } from './dto/create-board.dto';
// import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board) private boardRepository: BoardRepository,
  ) {}

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    // return this.boardRepository.createBoard(createBoardDto);
    const { title, description } = createBoardDto;
    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.boardRepository.save(board);
    return board;
  }

  // async getBoardById(id: number): Promise<Board> {
  //   const found = await this.boardRepository.findOne(id);
  //   if (!found) {
  //     throw new NotFoundException(`Can't find Board with id ${id}`);
  //   }
  //   return found;
  // }

  // getAllBoards(): Board[] {
  //   return this.boards;
  // }

  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Cant't find Board with id ${id}`);
  //   }
  //   return found;
  // }

  // deleteBoardById(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  // }

  // updateBoardById(id: string, status: BoardStatus): Board {
  //   const board: Board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
