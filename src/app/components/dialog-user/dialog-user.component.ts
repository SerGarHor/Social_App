import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent implements OnInit {
  iduser: any = localStorage.getItem('user')
  fullname: string = ''
  age: number = 0
  email: string = ''
  password: string = ''

  constructor(
    private services: AuthService,
    private dialogRef: MatDialogRef<DialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    let id = JSON.parse(this.iduser).id
    this.services.getUserUpdate(id).subscribe((res: any) => {
      if (res) {
        this.fullname = res[0].fullname
        this.age = res[0].age
        this.email = res[0].email
        this.password = res[0].password
      }
    })
  }

  updateData() {
    let id = JSON.parse(this.iduser).id
    let data = {
      "id": id,
      "fullname": this.fullname,
      "age": this.age,
      "email": this.email,
      "password": this.password
    }
    this.services.updateUser(data).subscribe((res: any) => {
      if (res.status == 200) {
        this.dialogRef.close(res)
      }
    })


  }
}
