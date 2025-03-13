
function getAge(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    return currentYear - yearOfBirth;
}
console.log(getAge(2005)); 
console.log(getAge(1985)); 




function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // OR - ||
    return age;
}
console.log(calculateAge('2025-10-11'));


const person = {
    name : "John Doe",
    age : 30,
    address : {
        street : "123 Main St",
        city : "New York",
        state : "NY"
    }
    // hobbies : ["reading", "music", "movies"]
    
};
// Displaying data from the object
console.log(person.name);
console.log(person.address);