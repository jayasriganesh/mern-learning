function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function wish() {
    console.log("Have a nice day!");
}

greet("Jai", wish);
