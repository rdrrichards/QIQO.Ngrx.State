import { EntityState } from '@ngrx/entity';
import { Thing } from '../models/thing';

export interface ThingState extends EntityState<Thing> { }

export interface AppState {
  things: ThingState;
}
