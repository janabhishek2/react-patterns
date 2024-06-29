class UserProfile {
    setUserName(username) {
        if(typeof username === "string" && username.length > 0) {
            this._username = username;
        } else {
            throw new Error("Invalid username.");
        }
    }

    setEmail(email) {
        if(email.includes("@")) {
            this._email = email;
        } else {
            throw new Error("Invalid email.");
        }
    }

    setBirthDate(birthDate) {
        const ms = Date.parse(birthDate);
        if(!isNaN(ms)) {
            this._birthdate = birthDate;
        } else {
            throw new Error("Invalid birthdate.")
        }
    }

    constructor(username, email, birthdate) {
        this.setUserName(username);
        this.setEmail(email);
        this.setBirthDate(birthdate);
    }

    get username() {
        return this._username;
    }

    get email() {
        return this._email;
    }

    get birthdate() {
        return this._birthdate;
    }

    set username(username) {
        this.setUserName(username);
    }

    set email(email) {
        this.setEmail(email);
    }

    set birthdate(birthDate) {
        this.setBirthDate(birthDate);
    }
}