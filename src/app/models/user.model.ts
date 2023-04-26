import { Single } from "./single.model";

export class User{
  constructor(
    public username: string,
    public password: string,
    public songs: any[],
  ) {}
}
