import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";
import {Observable, of } from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService:MessageService,
              private http:HttpClient
              ) { }

  private heroesURL = 'api/heroes';
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService : fetch heroes');
    return this.http.get<Hero[]>(this.heroesURL);
  }
  log(message:string){
    this.messageService.add('HeroService : '+message);
  }

  getHero(id:number){
    const hero = HEROES.find(hero=>hero.id ===id);
    this.messageService.add('heroService : get hero '+hero?.id)
    return of(hero);
  }
}
