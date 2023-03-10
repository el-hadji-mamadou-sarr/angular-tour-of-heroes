import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  constructor(private heroService: HeroService, private messageService:MessageService) {
  }

  ngOnInit() :void{
    this.getHeroes();
  }

  hero: Hero = {
    id:1,
    name: 'Windstorm'
  };

  heroes:Hero[] = [];
  selectedHero ?:Hero;

  onSelect(hero: Hero): void {
    this.messageService.add('hero selected:'+ hero.name)
    this.selectedHero = hero;

    console.log(this.selectedHero);
  }


  getHeroes(){
    this.heroService.getHeroes()
      .subscribe(heroes=>this.heroes = heroes);
  }
}
