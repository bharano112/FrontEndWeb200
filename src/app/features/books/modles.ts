
export interface BookItem {
  id: string;
  title: string;
  author: string;
  onLoan: boolean;
  format: 'Hardcover' | 'Paperback' | 'E-Book';
}


export class BookItem {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    public onLoan: boolean,
    public format: 'Hardcover' | 'Paperback' | 'E-Book') { }
}
