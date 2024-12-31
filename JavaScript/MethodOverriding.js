class Animal{
    constructor(name, nature, entity){
        this.name=name;
        this.nature=nature;
        this.entity=entity
    }

    animalBehaviour(){
        console.log("Animals are moving...");
    }
}

class Dog extends Animal{
    constructor(name, nature, entity, color, sound){
        super(name,nature, entity);
        this.color=color,
        this.sound=sound;
    }

    //Method Overriding
    animalBehaviour(){
        console.log("Dogs are barking...");
    }
}

const d1=new Dog("Tom","Carnivirous",12000,"Black","Bhooo");
d1.animalBehaviour();
const a1=new Animal("Any","Any",0);
a1.animalBehaviour();
 