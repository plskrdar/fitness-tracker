import {Component, OnInit} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {TrainingService} from "./training.service";

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
    ongoingTraining = false;
    exerciseSubscription = new Subscription();

    constructor(private trainingService: TrainingService) {
    }

    ngOnInit(): void {
        this.exerciseSubscription = this.trainingService.exerciseChange.subscribe((exercise) => {
            if (exercise) {
                this.ongoingTraining = true;
            } else {
                this.ongoingTraining = false;
            }
        });
    };

    ngOnDestroy() {
        this.exerciseSubscription.unsubscribe();
    }

}
