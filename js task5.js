let password = "Jeshokaatupanni@9999";

let isStrong = password.length >= 8 &&
               /[a-z]/.test(password) &&
               /[A-Z]/.test(password) &&
               /\d/.test(password) &&
               /[!@#$%^&*(),.?":{}|<>]/.test(password);

console.log(isStrong ? "Strong password" : "Weak password");