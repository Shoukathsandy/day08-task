// 1.class with movie type
class shortfilm {
    constructor( moviename,director,rating){
        this.movienmae = moviename;
        this.director = director;
        this.rating = rating;
    }
}

const Topfilm = new shortfilm ( "thani oruvan","mohan raja","9");
console.log(Topfilm);

// 2.class with second task
class circle {
    constructor (radius,color){
        this.radius = radius;
        this.color = color;

    }
}
const result = new circle (1, "red");
console.log(result);

// 3.class with given related movie
class album {
    constructor( song,singer,musicdir){
        this.song = song;
        this.singer = singer;
        this.musicdir = musicdir;
    }
}

const topalbum = new  album( "trisha","aniruth","AR");
console.log(topalbum);

// 4.class with person related
class person {

    constructor (name,age, gender,state,country){

        this.name = name;
        this.age = age;
        this.gender = gender;
        this.state = state;
        this.country = country;
    }
}

const details = new person ("shoukath","27", "male","Tamilnadu","India");

console.log(details);

// 5.class with get uber price
class uber {

    constructor (km, price){

        this.km = km;
        this.price = price;
    }

 get amount(){
    return this.calcAmount();
}

calcAmount (){
    return this.price * this.km;
}
}

const result2 = new uber (6,12);
console.log(result2.amount);