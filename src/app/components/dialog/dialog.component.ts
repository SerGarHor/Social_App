import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  publication: string = ''
  titulo: string = ''
  iduser: any = localStorage.getItem('user')

  constructor(
    private services: AuthService,
    private dialogRef: MatDialogRef<DialogComponent>
  ){}

  save(){
    let data = {
      "iduser": JSON.parse(this.iduser).id,
      "title": this.titulo,
      "publication": this.publication
    }
    this.services.createPublication(data).subscribe((res:any) => {
      if( res.status == 200){
        this.dialogRef.close(res)

      }
    })
  }
}
