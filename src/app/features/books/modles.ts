
export interface BookItem {
  id: string;
  title: string;
  author: string;
  format: 'Hardcover' | 'Paperback' | 'E-Book';
}


export class BookItem {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    public format: 'Hardcover' | 'Paperback' | 'E-Book') { }
}
