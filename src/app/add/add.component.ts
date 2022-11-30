import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent {

  constructor(private api:ApiService){}
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""

  readValues=()=>{
    let data = {
      "name":this.name,
      "friendName":this.friendName,
      "friendNickName":this.friendNickName,
      "DescribeYourFriend":this.DescribeYourFriend
    }
    console.log(data)

    this.api.addFriend(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("added succesfully")
          this.DescribeYourFriend=""
          this.friendName=""
          this.friendNickName=""
          this.name=""
          
        } else {
          alert("Something went wring")
        }
      }
     
    )


  }
}
