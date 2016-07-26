import {Component} from '@angular/core';
import { Race } from './race';
import { RaceService } from './race.service';
import { ScoreboardItemComponent } from './scoreboardItem.component';

@Component({
    selector: "scoreboard",
    templateUrl: "app/scoreboard.component.html",
    directives: [ScoreboardItemComponent],
    providers: [RaceService]
})
export class ScoreboardComponent {
    races: Race[];

    constructor(private raceService: RaceService) { }

    ngOnInit() {
        this.raceService.getRaces()
            .subscribe(data => this.races = data);
    }
}
