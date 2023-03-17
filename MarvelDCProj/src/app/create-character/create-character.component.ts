import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ChosenBrandService } from '../chosen-brand.service';

@Component({
  selector: 'app-create-character',
  templateUrl: `./create-character.component.html`,
  styleUrls: ['./create-character.component.css'],

})
export class CreateCharacterComponent implements OnInit {
  availableBrands = [
    {display: 'None', value: ''},
    {display: 'Marvel', value: 'Marvel'},
    {display: 'DC', value: 'DC'},
    {display: 'Black Sands', value: 'Black Sands'},
    {display: 'Anime', value: 'Anime'}
  ]
  cbService: ChosenBrandService;
  constructor(cbService: ChosenBrandService) {
    this.cbService = cbService;
  }

  ngOnInit(): void {
  }

  onSubmit(submittedForm){
    console.log(submittedForm.value.name, submittedForm.value.brand, submittedForm.value.alias)
    if(submittedForm.invalid){
      return;
    }
    this.cbService.addCharacter(submittedForm.value.name, submittedForm.value.brand, submittedForm.value.alias);
  }
}
