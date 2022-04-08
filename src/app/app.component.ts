import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LOCAL STORAGE CRUD';
  message = "";

  hiddeUpdate: boolean = true;
  users: User[];
  myvalue;
  constructor() {
    this.users = []
  }

  DataModel: any = {}
  UpdateModel: any = {}

  ngOnInit() {
    this.getUser()
  }


  getUser(): User[] {
    if (localStorage.getItem("users") === null) {
      this.users = []
    } else {
      this.users = JSON.parse(localStorage.getItem("users")!)
    }
    return this.users
  }
  addUser(form) {
    this.users.push(this.DataModel)
    localStorage.setItem("users", JSON.stringify(this.users))
    form.reset()
    this.getUser()
  }
 
  editUser(index) {
    console.log(this.users[index])
    this.hiddeUpdate = false;
    this.UpdateModel.name = this.users[index].name;
    this.UpdateModel.position = this.users[index].position;
    this.UpdateModel.email = this.users[index].email;
    this.myvalue = index;
  }
  updateUser() {
    let i = this.myvalue;
    for(let j=0; j < this.users.length; j++){
      if (j == i){
        this.users[i] = this.UpdateModel;
        localStorage.setItem("users", JSON.stringify(this.users))
        this.UpdateModel = {}
        this.message = "update succesfull"
        this.hiddeUpdate = true;
        this.getUser()
      }
    }
  }
  
  deleteUser(index) {
    const result = confirm("seguro de querer eliminar a este empleado?");
    if(result == true){
      this.users.splice(index, 1)
      localStorage.setItem("users", JSON.stringify(this.users))
    }
    
  }


  closeAlert() {
    this.message = ""
  }


}
