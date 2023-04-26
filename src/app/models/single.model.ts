import { AddedBy } from "./tracks.model";

export class Single {

  constructor(
    public songId: string,
    public songName: string,
    public artistNames: AddedBy[],
    public songImageUrl: string,
    public isFavorite: boolean,
  ) {}


}
