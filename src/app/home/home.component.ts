import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DialogComponent } from '../components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogUserComponent } from '../components/dialog-user/dialog-user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFiller = false;

  filter: string = ''
  filterData: any
  nameuser: string = ''
  iduser: any = localStorage.getItem('user')
  id: any
  constructor(
    private services: AuthService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadPublication()
    this.loadUserName()
  }

  loadPublication() {
    this.services.getPublications().subscribe((res: any) => {
      this.filterData = res
    })
  }

  filterPublication() {
    if (this.filter != '') {
      this.services.filterPublication(this.filter).subscribe((res: any) => {
        this.filterData = res
      })
    } else {
      this.loadPublication()
    }
  }

  loadUserName() {
    this.id = JSON.parse(this.iduser).id
    if (this.id) {
      this.services.getNameUser(this.id).subscribe((res: any) => {
        this.nameuser = res[0].fullname
      })
    }
  }

  openDialogPublication() {
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '45%',
      width: '40%',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result.status == 200) {
        this.loadPublication()
        this._snackBar.open(result.message, 'x')
        setTimeout(() => {
          this._snackBar.dismiss();
        }, 4000);
      }
    });
  }

  editPublication(data: any) {
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '45%',
      width: '40%',
      data: {
        isUpdate: true,
        alldata: data
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result.status == 200) {
        this.loadPublication()
        this._snackBar.open(result.message, 'x')
        setTimeout(() => {
          this._snackBar.dismiss();
        }, 4000);
      }
    });

  }

  deletePublication(id: number) {
    this.services.deletePublication(id).subscribe((res: any) => {
      if (res != undefined && res.status == 200) {
        this.loadPublication()
        this._snackBar.open(res.message, 'x')
        setTimeout(() => {
          this._snackBar.dismiss();
        }, 4000);
      }
    })

  }

  openDialogUser() {
    let dialogRef = this.dialog.open(DialogUserComponent, {
      height: '45%',
      width: '40%',
      data: {
        isUpdate: true,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result.status == 200) {
        this.loadUserName()
        this.loadPublication()
        this._snackBar.open(result.message, 'x')
        setTimeout(() => {
          this._snackBar.dismiss();
        }, 4000);
      }
    });
  }

  exit() {
    localStorage.clear();
    this.router.navigate(['login'])
  }

}
