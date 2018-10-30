import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class DataStorageService {

    constructor(
        private http: HttpClient,
        private auth: AuthenticationService
    ) {}

    storeData() {
        const token = this.auth.getToken();

        // return this.http.put()
    }
}
