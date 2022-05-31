let arr = [{id : "Deborah"}, "Boris", "John", "Carolina"];

let set = new Set(arr);
console.log(set);

set.add({id : "Deborah"});
console.log(set);

set.add("Javascript");
console.log(set);