import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { AppState } from './state';
import { Thing } from '../models/thing';
import { ThingActions, ThingActionTypes } from './app.actions';

export const adapter: EntityAdapter<Thing> = createEntityAdapter<Thing>();

export const initialThingState: EntityState<Thing> = adapter.getInitialState(); // [{ id: '0', name: 'First thing' }]

export const initialState: AppState = {
  things: initialThingState
};

export function reducer(state = initialState, action: ThingActions): AppState {
  switch (action.type) {
    case ThingActionTypes.ADD_Thing: {
      console.log('adding this: ', action.payload.thing);
      return { things: adapter.addOne(action.payload.thing, state.things) };
    }

    case ThingActionTypes.UPSERT_Thing: {
      return { things: adapter.upsertOne(action.payload.thing, state.things) };
    }

    case ThingActionTypes.ADD_Things: {
      return { things: adapter.addMany(action.payload.things, state.things) };
    }

    case ThingActionTypes.UPSERT_Things: {
      return { things: adapter.upsertMany(action.payload.things, state.things) };
    }

    case ThingActionTypes.UPDATE_Thing: {
      return { things: adapter.updateOne(action.payload.thing, state.things) };
    }

    case ThingActionTypes.UPDATE_Things: {
      return { things: adapter.updateMany(action.payload.things, state.things) };
    }

    case ThingActionTypes.MAP_Things: {
      return { things: adapter.map(action.payload.entityMap, state.things) };
    }

    case ThingActionTypes.DELETE_Thing: {
      return { things: adapter.removeOne(action.payload.id, state.things) };
    }

    case ThingActionTypes.DELETE_Things: {
      return { things: adapter.removeMany(action.payload.ids, state.things) };
    }

    case ThingActionTypes.DELETE_Things_BY_PREDICATE: {
      return { things: adapter.removeMany(action.payload.predicate, state.things) };
    }

    case ThingActionTypes.LOAD_Things: {
      return { things: adapter.addAll(action.payload.things, state.things) };
    }

    case ThingActionTypes.CLEAR_Things: {
      return { things: adapter.removeAll({ ...state.things }) };
    }

    default: {
      return state;
    }
  }
}

// export const getSelectedThingId = (state: ThingState) => state.selectedThingId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

// select the array of thing ids
export const selectThingIds = selectIds;

// select the dictionary of thing entities
export const selectThingEntities = selectEntities;

// select the array of things
export const selectAllThings = selectAll;

// select the total thing count
export const selectThingTotal = selectTotal;
