export class Single {

  constructor(
    public songName: string,
    public artistNames: AddedBy[],
    public songImageUrl: string,
    public isFavorite: boolean,
  ) {}
}

export interface AddedBy {
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  type:          AddedByType;
  uri:           string;
  name?:         string;
}

export interface ExternalUrls {
  spotify: string;
}

export enum AddedByType {
  Artist = "artist",
  User = "user",
}
