import { Component, OnInit } from '@angular/core';
import { ChosenBrandService } from '../chosen-brand.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [ChosenBrandService]
})
export class TabsComponent implements OnInit {
  characters = [];
  chosenBrand = 'all';
  cbService: ChosenBrandService;

  constructor(cbService: ChosenBrandService) {
    this.cbService = cbService;
  }

  ngOnInit(): void {
  }

  getCharacters() {
    this.characters = this.cbService.getCharacters(this.chosenBrand);
    return this.characters;
  }

  onChoose(brand) {
    this.chosenBrand = brand;
  }
}
