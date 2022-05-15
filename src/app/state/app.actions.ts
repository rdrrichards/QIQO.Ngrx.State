import { Action, createAction, props } from '@ngrx/store';
import { Update, EntityMap, Predicate } from '@ngrx/entity';


export enum ThingActionTypes {
  LOAD_Things = '[Thing] Load Things',
  ADD_Thing = '[Thing] Add Thing',
  UPSERT_Thing = '[Thing] Upsert Thing',
  ADD_Things = '[Thing] Add Things',
  UPSERT_Things = '[Thing] Upsert Things',
  UPDATE_Thing = '[Thing] Update Thing',
  UPDATE_Things = '[Thing] Update Things',
  MAP_Things = '[Thing] Map Things',
  DELETE_Thing = '[Thing] Delete Thing',
  DELETE_Things = '[Thing] Delete Things',
  DELETE_Things_BY_PREDICATE = '[Thing] Delete Things By Predicate',
  CLEAR_Things = '[Thing] Clear Things',
}

// export class LoadThings implements Action {
//   readonly type = ThingActionTypes.LOAD_Things;

//   constructor(public payload: { things: Thing[] }) {}
// }


// export class AddThing implements Action {
//   readonly type = ThingActionTypes.ADD_Thing;

//   constructor(public payload: { thing: Thing }) {}
// }

// export class UpsertThing implements Action {
//   readonly type = ThingActionTypes.UPSERT_Thing;

//   constructor(public payload: { thing: Thing }) {}
// }

// export class AddThings implements Action {
//   readonly type = ThingActionTypes.ADD_Things;

//   constructor(public payload: { things: Thing[] }) {}
// }

// export class UpsertThings implements Action {
//   readonly type = ThingActionTypes.UPSERT_Things;

//   constructor(public payload: { things: Thing[] }) {}
// }

// export class UpdateThing implements Action {
//   readonly type = ThingActionTypes.UPDATE_Thing;

//   constructor(public payload: { thing: Update<Thing> }) {}
// }

// export class UpdateThings implements Action {
//   readonly type = ThingActionTypes.UPDATE_Things;

//   constructor(public payload: { things: Update<Thing>[] }) {}
// }

// export class MapThings implements Action {
//   readonly type = ThingActionTypes.MAP_Things;

//   constructor(public payload: { entityMap: EntityMap<Thing> }) {}
// }

export class DeleteThing implements Action {
  readonly type = ThingActionTypes.DELETE_Thing;

  constructor(public payload: { id: string }) {}
}

// export class DeleteThings implements Action {
//   readonly type = ThingActionTypes.DELETE_Things;

//   constructor(public payload: { ids: string[] }) {}
// }

// export class DeleteThingsByPredicate implements Action {
//   readonly type = ThingActionTypes.DELETE_Things_BY_PREDICATE;

//   constructor(public payload: { predicate: Predicate<Thing> }) {}
// }

// export class ClearThings implements Action {
//   readonly type = ThingActionTypes.CLEAR_Things;
// }

export type ThingActions =
//  | LoadThings
  // | AddThing
  // | UpsertThing
  // | AddThings
  // | UpsertThings
  // | UpdateThing
  // | UpdateThings
  // | MapThings
  | DeleteThing
  // | DeleteThings
  // | DeleteThingsByPredicate
  // | ClearThings
  ;
