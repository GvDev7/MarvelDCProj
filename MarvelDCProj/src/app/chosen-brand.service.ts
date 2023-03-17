export class ChosenBrandService {
  private characters = [
    { name: 'Stever Rogers', alais: 'Captain America', brand: 'Marvel'},
    { name: 'Clark "Kal El" Kent', alais: "Superman", brand: "DC"},
    { name: 'Kakarot', alais: "Son Goku", brand: "Anime" }
  ];

  getCharacters(chosenBrand) {
    if(chosenBrand === 'all'){
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.brand === chosenBrand;
    })

  }


}
