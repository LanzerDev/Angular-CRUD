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
  
  localStorageItem;
  newUsers:string[] = [];
  parsedUsers;

  addEmployee():void{
    this.employees.push(this.model)

    /*
    * aqui revisamos si ya existe un localStorage con el nombre de USERS
    * y si no existe lo inicializamos y luego asignamos ese valor a la variable
    * localStorageItem para que ya no entre en ese scope y no vuelva a crear el 
    * localStorage
    */
    this.localStorageItem  = localStorage.getItem("USERS");

    if(this.localStorageItem === null){
      this.newUsers.push(this.model)
      localStorage.setItem("USERS", JSON.stringify(this.newUsers))
      this.localStorageItem  = localStorage.getItem("USERS")
      this.parsedUsers = this.newUsers;
      console.log("USERS creado")
    } else {
      this.parsedUsers = JSON.parse(this.localStorageItem!)
      this.parsedUsers.push(this.model)
      localStorage.setItem("USERS", JSON.stringify(this.parsedUsers))
      console.log(this.parsedUsers)
    }
    
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
