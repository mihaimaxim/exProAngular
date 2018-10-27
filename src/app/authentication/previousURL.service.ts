import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Injectable()
export class PreviousRouteService {

    private previousURL: string;
    private currentURL: string;

    constructor(
        private router: Router
    ) {
        this.currentURL = router.url;
        router.events.subscribe(
            event => {
                if (event instanceof NavigationEnd) {
                    this.previousURL = this.currentURL;
                    this.currentURL = event.url
                } else {
                    return
                }
            }
        )
    }

    getPreviousURL() {
        return this.previousURL
    }
}