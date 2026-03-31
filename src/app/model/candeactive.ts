import { Observable } from "rxjs";

export interface CanDeactive{
    canDeactivate: ()=>boolean |Observable<boolean>|Promise<boolean>
}