import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/state/state';
import { Observable, of } from 'rxjs';
import { Thing } from 'src/app/models/thing';
import * as appStuff from '../../state/app.reducer';
import * as appActions from '../../state/app.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thing-shell',
  templateUrl: './thing-shell.component.html',
  styleUrls: ['./thing-shell.component.css']
})
export class ThingShellComponent implements OnInit {
  things$: Observable<Thing[]>;
  brands: any[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
  brand = '';
  constructor(private appStore: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.appStore.select('things').subscribe((es: any) => {
      console.log('things', es);
      this.things$ = of(appStuff.selectAllThings(es.things));
      // this.things$ = this.appStore.pipe(select( appStuff.selectAllThings(es.things) ));
    });
  }

  addThing() {
    console.log('Adding new thing');
    const newId = new Date().toISOString();
    // this.appStore.dispatch(new appActions.AddThing( { thing: { id: newId, name: `New Thing: ${newId}` }}));
    this.appStore.dispatch(appActions.addThing( { thing: { id: newId, name: `New Thing: ${newId}` }}));
  }
  delThing(thing: Thing) {
    this.appStore.dispatch(new appActions.DeleteThing({ id: thing.id }));
  }
  viewShows() {
    this.router.navigate(['/shows']);
  }
  search(event) {
    console.log(event.query);
    this.brands = [...this.brands];
  }
}
