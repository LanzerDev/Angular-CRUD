import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';
  message = "";
  hiddeUpdate: boolean = true;
  employees = [
    {name:"example", position:"example", email:"examplej@gmail.com"}
  ]
  model:any = {}
  model2:any = {}
  newUsers;


  addEmployee():void{
    this.employees.push(this.model)
    this.model = {}
    this.message = "saved succesfully"
  }

  deleteEmployee(i):void{
    let answer = confirm("Estas seguro de querer eliminarlo?")
    if (answer){
      this.employees.splice(i, 1)
      this.message = "deleted succesfully"
    }
  }
  myvalue;
  editEmployee(i):void{
    this.hiddeUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myvalue = i;
  }

  updateEmployee():void{
    let i = this.myvalue;
    for(let j=0; j < this.employees.length; j++){
      if (j == i){
        this.employees[i] = this.model2;
        this.model2 = {}
        this.message = "update succesfull"
        this.hiddeUpdate = true;
      }
    }
  }
  closeAlert(){
    this.message = ""
  }
  

}
