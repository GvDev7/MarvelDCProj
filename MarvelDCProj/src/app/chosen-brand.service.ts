export class ChosenBrandService {
  private characters = [
    { name: 'Stever Rogers', alias: 'Captain America', brand: 'Marvel'},
    { name: 'Clark "Kal El" Kent', alias: "Superman", brand: "DC"},
    { name: 'Kakarot', alias: "Son Goku", brand: "Anime" }
  ];

  getCharacters(chosenBrand) {
    if(chosenBrand === 'all'){
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.brand === chosenBrand;
    })

  }

  trackByFn(index: number, character ) {
    return character.name;
  }

  addCharacter(name, alias, brand) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    })

    if(pos !== -1) {
      return;
    }

    const newChar = {name: name, alias: alias, brand: brand};
    this.characters = [...this.characters, newChar];
    console.log(newChar);
    console.log(this.characters);

  }


}
