export interface IBoard {
  boardColor: string;
  tickets: any;
  id: number;
}
export class Board implements IBoard {
  boardColor: string;
  tickets: any;
  id: number;

  constructor(boardColor: string, tickets: any, id: number) {
    this.boardColor = boardColor;
    this.tickets = tickets;
    this.id = id;
  }
}
