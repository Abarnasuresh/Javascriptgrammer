const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person2 = {
  firstName:"abi",
  lastName: "abarna",
}
console.log(person1.fullName.call(person2));  // Will return "abi abarna"

