import { Component, OnInit, Input, EventEmitter, Output,
  ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { AuthService } from '@app/core/services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { environment as env } from '@env/environment';

import { Menu } from '@app/core/models/menu.model';
import { ScrollService } from '@app/core/services/scroll.service';

import {FadeInOut} from '@app/core/animations/app.animation';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [FadeInOut]
})
export class LayoutComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  username$: Observable<string>;
  searchFlag = false;

  @Input() language: string;
  @Output() switchLang = new EventEmitter();

  @ViewChild('stickyMenu', {static: false}) menuElement: ElementRef;

  sticky = false;
  private ngUnsubscribe = new Subject();

  dashboard: Menu;

  about: Menu;
  nav: Menu;

  teaching: Menu;
  investigation: Menu;

  university: Menu;
  extension: Menu;
  services: Menu;

  envName = env.envName;
  appName = env.appName;
  year = new Date().getFullYear();
  isProd = env.production;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private scrollService: ScrollService,
    private snackBar: MatSnackBar,
    public router: Router) {

    this.dashboard = {
      heading: 'dashboard',
      icon: 'dashboard',
      link: '/dashboard',
      pages: []
    };

    this.about = {
      heading: 'about',
      icon: 'person',
      link: '/about',
      pages: []
    };

    this.university = {
      heading: 'university',
      icon: '',
      link: '/university',
      pages: []
    };

    this.extension = {
      heading: 'extension',
      icon: '',
      link: '/extension',
      pages: []
    };

    this.services = {
      heading: 'services',
      icon: '',
      link: '/services',
      pages: []
    };

    this.teaching = {
      heading: 'teaching',
      icon: '',
      link: '',
      pages: [
        {
          heading: 'enrollment',
          link: '/teaching/enrollment'
        },
        {
          heading: 'undergraduate',
          link: '/teaching/undergraduate'
        },
        {
          heading: 'postgraduate',
          link: '/teaching/postgraduate'
        }
      ]
    };

    this.investigation = {
      heading: 'investigation',
      icon: '',
      link: '',
      pages: [
        {
          heading: 'scientificcouncil',
          link: '/investigation/scientificcouncil'
        },
        {
          heading: 'linesinvestigation',
          link: '/investigation/lines'
        },
        // {
        //   heading: 'investigationgroups',
        //   link: '/investigation/groups'
        // },
        {
          heading: 'studycenter',
          link: '/investigation/studycenter'
        },
        {
          heading: 'publications',
          link: '/investigation/publications'
        }
      ]
    };

    this.nav = {
      heading: 'home',
      icon: '',
      link: '',
      pages:  []
    };

  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isAuthenticated();
    this.username$ = this.authService.getUsername();

    this.scrollService.onScrolledDown$
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data) => {
      if (data.scrollTop >= 100) {
        this.sticky = true;
        this.searchFlag = false;
      } else {
        this.sticky = false;
      }
    });


 }


  logout(): void {
    this.authService.logout();
    this.snackBar.open('Usted a cerrado su sesión', 'X', {duration: 3000});
    this.router.navigate(['auth', 'login']);
  }

  changeLang(): void {
    this.switchLang.emit(this.language);
  }

  showTextBoxSearch() {
    this.searchFlag = this.searchFlag ? false : true;
  }

}
