function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with : ".concat(items.join(' , '), ". "));
}
makeSandwich("beef", " cheese");
makeSandwich("lettuce", "turkey", "tomato");
makeSandwich("avocado", "sprouts", "mayo", "ketcup");
