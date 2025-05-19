import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    loggedIn: Boolean = true;

    login() {
        this.loggedIn = true;
    }

    logout(){
        this.loggedIn = false;
    }

    isAuthenticated() {
        const promise = new Promise<Boolean>((resolve, reject)=> {
            setTimeout(() => {
                resolve(this.loggedIn);
                
            }, 150);
        });

        return promise;
    }

}
