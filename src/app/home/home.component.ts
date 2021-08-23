import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardDetails = [
    {"imgUrl":"../../assets/images/gta5.png","name":"GTA V"},
    {"imgUrl":"../../assets/images/uncharted4.jpg","name":"Uncharted 4"},
    {"imgUrl":"../../assets/images/fortnite.jpg","name":"Fortnite"},
    {"imgUrl":"../../assets/images/uncharted4.jpg","name":"Uncharted 4"},
    {"imgUrl":"../../assets/images/gta5.png","name":"GTA V"},
    {"imgUrl":"../../assets/images/uncharted4.jpg","name":"Uncharted 4"},
    {"imgUrl":"../../assets/images/gta5.png","name":"GTA V"},
    {"imgUrl":"../../assets/images/uncharted4.jpg","name":"Uncharted 4"},
    {"imgUrl":"../../assets/images/gta5.png","name":"GTA V"},
    {"imgUrl":"../../assets/images/uncharted4.jpg","name":"Uncharted 4"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
