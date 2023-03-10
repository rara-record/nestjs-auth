import { Body, Controller, Get, Post } from '@nestjs/common'
import { BoardsService } from './boards.service'
import { Board } from './boards.model'

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}
  @Get('/')
  callGetAllBoards() {
    return this.boardsService.getAllBoards()
  }

  @Post()
  callCreateBoards(@Body('title') title: string, @Body('description') description: string): Board {
    return this.boardsService.createBoard(title, description)
  }
}
