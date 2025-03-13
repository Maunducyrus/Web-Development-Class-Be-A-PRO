function name(parameters) {
    // code to be executed
}

function getAge(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    return currentYear - yearOfBirth;
}
console.log(getAge(1990)); // 35
console.log(getAge(1985)); // 40