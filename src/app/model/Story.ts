import { Slice } from '../model/Slice';

export class Story {
    id: string;
    title: string;
    slices?: Slice[];
  }