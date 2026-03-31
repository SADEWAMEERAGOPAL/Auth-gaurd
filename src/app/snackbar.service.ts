import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackbarser: MatSnackBar) { }

  opebSnackbar(message: string, icon:string, direction: {}){
    this._snackbarser.open(message, icon, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
