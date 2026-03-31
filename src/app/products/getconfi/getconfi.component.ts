import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-getconfi',
  templateUrl: './getconfi.component.html',
  styleUrls: ['./getconfi.component.scss']
})
export class GetconfiComponent implements OnInit {

  constructor(private _matdifRef:MatDialogRef<GetconfiComponent>) { }

  ngOnInit(): void {
  }


  OnClose(flag:boolean){
    this._matdifRef.close(flag);
  }
}
