import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';


export interface Page {
  name: string;
  keywords: string;
  url: string;
}

@Component({
  selector: 'app-search',
  template: `
    <div class="search">
      <form class="form">
        <input type="text" [placeholder]="'search' | transloco" class="search"
           [formControl]="searchControl" [matAutocomplete]="auto">
          <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn" (optionSelected)="link($event)">
            <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
              <span>{{option.name | transloco}}</span>
            </mat-option>
          </mat-autocomplete>
      </form>
    </div>
  `,
  styles: [`
    .search {
      background-color: rgb(197, 197, 197);
      border-radius: 2px;
      display: flex;
      flex-direction: row;
      padding-left: 6px;
      padding-right: 6px;
      width: 25vw;
    }

    .search > mat-icon {
      margin-top: 8px;
    }

    input {
      border: 0;
      color: rgba(0, 0, 0, 0.87);
      font-size: 16px;
      outline: 0;
      padding: 10px;
      width: 100%;
    }
  `],
})
export class SearchComponent implements OnInit {

  searchControl = new FormControl();
  options: Page[] = [];
  filteredOptions: Observable<Page[]>;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges
      .pipe(
        map(value => typeof value === 'string' ? value : value.keywords),
        map(keywords => keywords ? this._filter(keywords) : this.options.slice())
      );

    this.options = [
        {
          name: 'home',
          keywords: 'universidad,university,home,news,inicio,noticias',
          url: '/home',
        },
        {
          name: 'university',
          keywords: 'universidad,university,visión,misión,vision,mision,consejo,direction,rector',
          url: '/university',
        },
        {
          name: 'teaching',
          keywords: 'universidad,university,teaching,docencia',
          url: '/teaching/enrollment',
        },
        {
          name: 'investigation',
          keywords: 'universidad,university,investigation,investigación,postgrado',
          url: '/investigation',
        },
        {
          name: 'extension',
          keywords: 'universidad,university,extension,extension,deportes,sports,cultura,feu,postgrado',
          url: '/extension',
        },
        {
          name: 'services',
          keywords: 'universidad,university,services,university',
          url: '/services',
        },
      ];


  }

  displayFn(page?: Page): string | undefined {
    return undefined;
  }

  private _filter(keywords: string): Page[] {
    const filterValue = keywords.toLowerCase();
    return this.options
      .filter(option => option.keywords.toLowerCase().includes(filterValue))
      .map(data => {
        return data;
      });
  }

  link($event: MatAutocompleteSelectedEvent) {
    this.router.navigate([$event.option.value.url]);
  }
}
