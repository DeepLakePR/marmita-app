import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    loggedIn: Boolean = false;

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
                
            }, 800);
        });

        return promise;
    }

}
