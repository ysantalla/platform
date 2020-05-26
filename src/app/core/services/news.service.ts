import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '@env/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { News } from '../models/new.model';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getLastNews(): Observable<News[]> {
    return this.httpClient.get<News[]>(`${env.productionAppUrl}/getNews`).pipe(
      map((result: any) => {

        // console.log(result);

        const listNews: News[] = [];
        result.data.forEach(news => {
          const title = news.title.rendered;
          const link = news.link;


          let imageMediumUrl = '';
          let imageThumbnailUrl = '';

          if (news._embedded['wp:featuredmedia'].length > 0) {
            if (news._embedded['wp:featuredmedia']['0'].media_details) {
              imageMediumUrl = news._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url;
              imageThumbnailUrl = news._embedded['wp:featuredmedia']['0'].media_details.sizes.thumbnail.source_url;
            }
          }

          listNews.push(
            {
              title,
              link,
              imageMediumUrl,
              imageThumbnailUrl,
            }
          );
        });
        return listNews;
      })
    );
  }

  getInterest(): Observable<News[][]> {
    return this.httpClient.get<News[]>(`${env.productionAppUrl}/getInterest`).pipe(
      map((result: any) => {
        const listNews: News[][] = [];
        let cont = 0;
        let flag: News[] = [];

        result.data.forEach(news => {
          const title = news.title.rendered;
          let content = news.excerpt.rendered.replace(/(<[^>]+>|<[^>]>|<\/[^>]>)/g, '');
          content = content.replace('[&hellip;]', '...');
          const link = news.link;

          let imageMediumUrl = '';
          let imageThumbnailUrl = '';

          if (news._embedded['wp:featuredmedia'].length > 0) {
            if (news._embedded['wp:featuredmedia']['0'].media_details) {
              imageMediumUrl = news._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url;
              imageThumbnailUrl = news._embedded['wp:featuredmedia']['0'].media_details.sizes.thumbnail.source_url;
            }
          }

          if (cont === 3) {
            listNews.push(flag);
            cont = 0;
            flag = [];
          } else {
            flag.push(
              {
                title,
                link,
                content,
                imageMediumUrl,
                imageThumbnailUrl,
              }
            );
            cont ++;
          }
        });

        if (cont > 0) {
          listNews.push(flag);
        }

        return listNews;
      })
    );
  }

  getEvents(): Observable<News[]> {
    return this.httpClient.get<News[]>(`${env.productionAppUrl}/getEvents`).pipe(
      map((result: any) => {
        const listNews: News[] = [];
        result.data.forEach(news => {

          const title = news.title.rendered;
          let content = news.excerpt.rendered.replace(/(<[^>]+>|<[^>]>|<\/[^>]>)/g, '');
          content = content.replace('[&hellip;]', '...');
          const link = news.link;

          let imageMediumUrl = '';
          let imageThumbnailUrl = '';

          if (news._embedded['wp:featuredmedia'].length > 0) {
            if (news._embedded['wp:featuredmedia']['0'].media_details) {
              imageMediumUrl = news._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url;
              imageThumbnailUrl = news._embedded['wp:featuredmedia']['0'].media_details.sizes.thumbnail.source_url;
            }
          }

          listNews.push(
            {
              title,
              link,
              content,
              imageMediumUrl,
              imageThumbnailUrl,
            }
          );
        });
        return listNews;
      })
    );
  }

}
