import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../services/user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(private userManagementService: UserManagementService) { }

  private userList: User[];
  private respone;
  private status: string
  private isEditable: boolean[];


  ngOnInit() {
    this.status = "superadmin";

    this.isEditable = [];

    this.getAllUser()


  }
  addUser(username, password, email) {
    this.userManagementService.createNewUser(username, password, email, this.status).subscribe((response) => {
      this.respone = response;
      this.getAllUser();
    });
  }

  deleteUser(user) {
    this.userList.forEach((element, index) => {
      if (element == user) {
        this.userManagementService.deleteUser(user.adm_id).subscribe((response) => {
          console.log("delete respone : " + response);
        });
        this.userList.splice(index, 1);
      }
    });
    return false;
  }


  getAllUser() {
    this.userManagementService.getAllUser().subscribe((response) => {
      this.userList = response;
      this.isEditable = [];
      for (var i = 0; i < this.userList.length; i++) {
        this.isEditable.push(false);
      }
      console.log(this.isEditable);
    });
  }


  editUser(id, username, password, email, status) {
    this.userManagementService.editUser(id, username, password, email, status).subscribe((response) => {
      this.getAllUser();
    });
  }

  toggleEdit(i) {
    this.isEditable.forEach((element, index) => {
      if (i == index) {
        this.isEditable[index] = !this.isEditable[index]
      } else {
        this.isEditable[index] = false;
      }
    });
    console.log(this.isEditable);
  }

}

interface User {
  adm_id: string;
  username: string;
  email: string;
  password: string;
  status: string;
}

