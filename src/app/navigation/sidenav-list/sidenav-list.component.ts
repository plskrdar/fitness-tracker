import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-sidenav-list',
    templateUrl: './sidenav-list.component.html',
    styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {

    @Output() sidenavClose = new EventEmitter<void>();
    authSubscription = new Subscription;
    isAuth: boolean;

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
        this.authSubscription = this.authService.authChange.subscribe((authStatus) => {
            this.isAuth = authStatus;
        })
    }

    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }

    onClose() {
        this.sidenavClose.emit();
    }

    onLogout() {
        this.authService.logout();
        this.onClose();
    }

}
