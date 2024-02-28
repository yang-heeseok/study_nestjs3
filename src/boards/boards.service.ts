import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board.status.enum';
import { Board } from './entities/board.entity';
// import { CreateBoardDto } from './dto/create-board.dto';
// import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [
    {
      id: '8e5b2ab0-d5cf-11ee-80f8-493f5485d129',
      title: 'test1',
      description: 'body text',
      status: BoardStatus.PUBLIC,
    },
    {
      id: '91775ed0-d5cf-11ee-80f8-493f5485d129',
      title: 'test2',
      description: 'body text',
      status: BoardStatus.PUBLIC,
    },
    {
      id: '951f0a10-d5cf-11ee-80f8-493f5485d129',
      title: 'test3',
      description: 'body text',
      status: BoardStatus.PUBLIC,
    },
  ];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto): Board {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    if (!found) {
      throw new NotFoundException(`Cant't find Board with id ${id}`);
    }
    return found;
  }

  deleteBoardById(id: string): void {
    const found = this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== found.id);
  }

  updateBoardById(id: string, status: BoardStatus): Board {
    const board: Board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
