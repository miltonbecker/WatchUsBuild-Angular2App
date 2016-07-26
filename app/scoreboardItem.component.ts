import { Component, Input } from '@angular/core';
import { Race } from './race';
import { RaceScore } from './raceScore';
import { RaceScoreService } from './raceScore.service';

@Component({
    selector: "scoreboard-item",
    templateUrl: "app/scoreboardItem.component.html",
    providers: [RaceScoreService],
    styleUrls: ["app/scoreboardItem.component.css"]
})
export class ScoreboardItemComponent {
    @Input() race: Race;
    score: RaceScore;

    constructor(private raceScoreService: RaceScoreService) { }

    ngOnInit() {
        this.raceScoreService.getScoreForRace(this.race.id)
            .subscribe(data => this.score = data);
    }
}
