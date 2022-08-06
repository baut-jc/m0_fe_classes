// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn {
  constructor(name) {
  console.log("*~*", name, "*~*")
    this.name = name;
    this.color = "silver";
  }

  }

var name1 = new Unicorn("Billy");
console.log(name1)

// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false
class Vampire {
  constructor(name) {
    this.name = name;
    this.pet = "bat";
    this.thirsty = true;
}
    mustDrink(thirsty) {
      this.thirsty !== true;
      console.log(mustDrink)

}


//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson
  class Dragon {
    constructor(name, rider, color, meal) {
    this.name = "Drogon";
    this.rider = "Daenery";
    this.color = "blue";
    this.isHungry = true;
    this.meal = 3
  }
  changeHunger(notHungry, meal) {
    this.isHungry = notHungry;
  }
  }
  var dragon1 = new Dragon(meal = 4)

  if (Dragon.meal > 3 && Dragon.isHungry === true) {
     console.log("FEED NOW!")
    } else {
      console.log("DON'T FEED!")
    }

  dragon1.changeHunger(false);
  console.log(dragon1)


//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.
