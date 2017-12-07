import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-popular-movie2018',
  templateUrl: './most-popular-movie2018.component.html',
  styleUrls: ['./most-popular-movie2018.component.css']
})
export class MostPopularMovie2018Component implements OnInit {
  private name :String[];
  private picture :String[];
  
  constructor() { }

  ngOnInit() {
    this.name = ["12 Strong","Acrimony","Avengers: Infinity War","Black Panther","Dead Pool 2","Fifty Shades Freed"
    ,"Jusrassic World: Fallen Kingdom","Maze Runner: The Death Cure","Molly's Game","Pacific Rim: Uprising",
    "Solo: A Star Wars Story","The Incredibles 2","The Predator","Tomb Raider","X-Men: The New Mutants"];
    this.picture = ["../../assets/img/12strong.jpg"
    ,"../../assets/img/acrimony.jpg"
    ,"../../assets/img/avengersInfinityWar.jpg"
    ,"../../assets/img/blackPanther.jpg"
    ,"../../assets/img/deadPool2.jpg"
    ,"../../assets/img/fiftyShadesFreed.jpg"
    ,"../../assets/img/jusrassicWorld.jpg"
    ,"../../assets/img/mazeRunnerTheDeathCure.jpg"
    ,"../../assets/img/mollyGame.jpg"
    ,"../../assets/img/pacificRIM.jpg"
    ,"../../assets/img/starWar.jpg"
    ,"../../assets/img/theIncredibles2.jpg"
    ,"../../assets/img/thePredator.jpg"
    ,"../../assets/img/tombRaider.jpg"
    ,"../../assets/img/xmenNewMutants.jpg"
  
    ];
  }
  
}
