import { Bullet } from '../item/item';

export interface List {
  bullets: Bullet[];
  from: string;
  location: string;
  place: string;
  title: string;
  to: string;
}
