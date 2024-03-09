interface User {
    username: string;
    password: string;
    email: string;
    profile: UserProfile;
}

interface UserProfile {
    firstName: string;
    lastName: string;
    age: number;
}

class AuthenticationSystem {
    private users: User[] = [];

    register(username: string, password: string, email: string, profile: UserProfile): void {
        // Check if username or email is already taken
        if (this.users.some(user => user.username === username || user.email === email)) {
            console.log("Username or email already exists. Please choose a different one.");
            return;
        }

        const newUser: User = {
            username,
            password,
            email,
            profile
        };

        this.users.push(newUser);
        console.log("Registration successful.");
    }

    login(username: string, password: string): void {
        const user = this.users.find(user => user.username === username && user.password === password);
        if (user) {
            console.log("Login successful. Welcome, " + user.profile.firstName + "!");
        } else {
            console.log("Invalid username or password. Please try again.");
        }
    }

    updateUserProfile(username: string, newProfile: UserProfile): void {
        const userIndex = this.users.findIndex(user => user.username === username);
        if (userIndex !== -1) {
            this.users[userIndex].profile = newProfile;
            console.log("User profile updated successfully.");
        } else {
            console.log("User not found.");
        }
    }
}

// Example usage
const authSystem = new AuthenticationSystem();

const userProfile: UserProfile = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

authSystem.register("john_doe", "password123", "john@example.com", userProfile);
authSystem.login("john_doe", "password123");

const newProfile: UserProfile = {
    firstName: "Jane",
    lastName: "Doe",
    age: 28
};
