import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableBrands = [
    {display: 'None', value: ''},
    {display: 'Marvel', value: 'Marvel'},
    {display: 'DC', value: 'DC'},
    {display: 'Black Sands', value: 'Black Sands'},
    {display: 'Anime', value: 'Anime'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
