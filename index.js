function createLoginTracker(userInfo) {
    let attemptCount = 0;

    const loginAttempt = (passwordAttempt) => {
        if (attemptCount >= 3) {
            return "Account locked due to too many failed login attempts";
        }

        attemptCount++;

        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        } else {
            return `Attempt ${attemptCount}: Login failed`;
        }
    };

    return loginAttempt;
}

const user = { username: "user1", password: "password123" };
const login = createLoginTracker(user);

console.log(login("wrongpassword"));
console.log(login("wrongpassword"));
console.log(login("password123"));
console.log(login("wrongpassword"));

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
