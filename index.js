const app = "I don't do much."

var kittens = ["Buttons", "Frank"];

destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

destructivelyAppendKitten("Milton");