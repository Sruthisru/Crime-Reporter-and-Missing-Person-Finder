import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
interface missing {
    
    username: string,
    desc: string,
    id?: string
}


@Injectable()
export class MissingService {
        private  missing: missing
    
        constructor(
            private afAuth: AngularFireAuth
        ) {

        }
        setMissing(missing: missing) {
            this.missing = missing
        }

        getUsername(): string {
            return this.missing.username
        }

        getID() {        
                return this.missing.id
            }
}