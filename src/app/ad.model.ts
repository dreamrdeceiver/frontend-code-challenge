export class AdModel {
  constructor(
    public url:string,
    public title:string,
    public stadt: string,
    public plz: number,
    public zimmer: number,
    public space: number,
    public visibility: boolean,
    public sellPrice?: number,
    public baseRent?: number
    ){}
}
