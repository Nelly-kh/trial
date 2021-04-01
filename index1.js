import def, { sayHi as anotherSayHi} from "./hello"

function sayHi(){
    console.log("new hi")
}



def();
sayHi();
anotherSayHi();
