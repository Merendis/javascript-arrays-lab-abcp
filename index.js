const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

destructivelyAppendKitten("Milton");

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

destructivelyPrependKitten("Guernsey");

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

destructivelyRemoveFirstKitten();

function appendKitten(name){
  return [...kittens, name];
}

appendKitten("Doofus");

function prependKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){
  
}

