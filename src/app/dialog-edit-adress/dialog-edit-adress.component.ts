import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { doc } from 'firebase/firestore';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-dialog-edit-adress',
  templateUrl: './dialog-edit-adress.component.html',
  styleUrls: ['./dialog-edit-adress.component.scss']
})
export class DialogEditAdressComponent implements OnInit {
  user!: User;
  loading= false;
  userId: string;
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }



  saveUser(){

this.firestore
.collection('users')
.doc(this.userId)
.update(this.user.toJSON())
.then(()=>{

  this.loading=false;
  this.dialogRef.close();
})


  }
}
