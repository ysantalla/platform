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
    return this.httpClient.get<News[]>(`${env.apiURL}/getNews`).pipe(
      map((result: any) => {
        const listNews: News[] = [];
        result.data.forEach(news => {
          const title = news.title.rendered;
          const link = news.link;
          const imageMediumUrl = news._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url;
          const imageThumbnailUrl = news._embedded['wp:featuredmedia']['0'].media_details.sizes.thumbnail.source_url;

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
    return this.httpClient.get<News[]>(`${env.apiURL}/getInterest`).pipe(
      map((result: any) => {
        const listNews: News[][] = [];
        let cont = 0;
        let flag: News[] = [];

        result.data.forEach(news => {
          const title = news.title.rendered;
          let content = news.excerpt.rendered.replace(/(<[^>]+>|<[^>]>|<\/[^>]>)/g, '');
          content = content.replace('[&hellip;]', '...');
          const link = news.link;
          const imageMediumUrl = news._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url;
          const imageThumbnailUrl = news._embedded['wp:featuredmedia']['0'].media_details.sizes.thumbnail.source_url;

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
    return this.httpClient.get<News[]>(`${env.apiURL}/getEvents`).pipe(
      map((result: any) => {
        const listNews: News[] = [];
        result.data.forEach(news => {

          const title = news.title.rendered;
          let content = news.excerpt.rendered.replace(/(<[^>]+>|<[^>]>|<\/[^>]>)/g, '');
          content = content.replace('[&hellip;]', '...');
          const link = news.link;
          const imageMediumUrl = news._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url;
          const imageThumbnailUrl = news._embedded['wp:featuredmedia']['0'].media_details.sizes.thumbnail.source_url;

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
