"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "ismael@email.com": new User('ismael@email.com', 'Ismael', '1234'),
    "veronica@email.com": new User('veronica@email.com', 'Veronica', '5678')
};
