import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  publication: string = ''
  titulo: string = ''
  iduser: any = localStorage.getItem('user')
  isUpDate: boolean = false

  constructor(
    private services: AuthService,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    if (this.data != null && this.data.isUpdate) {
      this.iduser = this.data.alldata.iduser
      this.titulo = this.data.alldata.title
      this.publication = this.data.alldata.publication
    }
  }

  save() {
    if (this.data != null && this.data.isUpdate) {
      let data = {
        "iduser": this.iduser,
        "title": this.titulo,
        "publication": this.publication
      }
      this.services.updatePublication(data).subscribe((res: any) => {
        if (res.status == 200) {
          this.dialogRef.close(res)
        }
      })
    } else {
      let data = {
        "iduser": JSON.parse(this.iduser).id,
        "title": this.titulo,
        "publication": this.publication
      }
      this.services.createPublication(data).subscribe((res: any) => {
        if (res.status == 200) {
          this.dialogRef.close(res)
        }
      })
    }

  }
}
