import { Bullet } from '../item/item';

export interface List {
  from: string;
  to: string;
  title: string;
  place: string;
  location: string;
  bullets: Bullet[];
}
