import { EntityState } from '@ngrx/entity';
// export interface ThingState extends EntityState<Thing> { }

export interface AppState {
  things: EntityState<any>;
}
