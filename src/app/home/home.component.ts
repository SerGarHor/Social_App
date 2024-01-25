import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DialogComponent } from '../components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  filter: string = ''
  filterData: any
  nameuser: string = ''
  iduser: any = localStorage.getItem('user')
  id: any
  constructor(
    private services: AuthService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.loadPublication()
    this.loadUserName()
  }

  loadPublication(){
    this.services.getPublications().subscribe((res: any) => {
      console.log('res',res)
      this.filterData = res
    })
  }

  filterPublication(){
    if (this.filter != '') {
      this.services.filterPublication(this.filter).subscribe((res:any) =>{
        this.filterData = res
      } )
    } else {
      this.loadPublication()
    }
  }

  loadUserName(){
    this.id = JSON.parse(this.iduser).id
    if (this.id) {
      this.services.getNameUser(this.id).subscribe((res:any)=>{
        this.nameuser = res[0].fullname
      })
    }
  }

  openDialogPublication(){
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '45%',
      width: '40%',
    });
    dialogRef.afterClosed().subscribe(result => {
      if ( result.status == 200) {
        this.loadPublication()
        this._snackBar.open(result.message, 'x')
        setTimeout(() => {
          this._snackBar.dismiss();
        }, 4000);
      }
    });
  }

  editPublication(data: any){
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '45%',
      width: '40%',
      data: {
        isUpdate: true,
        alldata: data
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if ( result.status == 200) {
        this.loadPublication()
        this._snackBar.open(result.message, 'x')
        setTimeout(() => {
          this._snackBar.dismiss();
        }, 4000);
      }
    });

  }

  deletePublication(id: number){
    console.log('id', id)

  }


}
