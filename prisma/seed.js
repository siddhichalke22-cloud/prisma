const { prisma } = require("../database/config");

const createUser = async () => {

    const user = await prisma.user.createMany({
        data: [
            { 
                name: "Aarav Sharma", 
                email: "aarav@gmail.com", 
                age: 20 
            },
            { 
                name: "Priya Patil", 
                email: "priya@gmail.com", 
                age: 21 
            },
            { 
                name: "Rahul Verma", 
                email: "rahul@gmail.com", 
                age: 22 
            },
            { 
                name: "Sneha Joshi", 
                email: "sneha@gmail.com", 
                age: 19 
            },
            { 
                name: "Rohan Desai", 
                email: "rohan@gmail.com", 
                age: 23 
            },
            { 
                name: "Ananya Shah", 
                email: "ananya@gmail.com", 
                age: 20 
            },
            { 
                name: "Vikram Singh", 
                email: "vikram@gmail.com", 
                age: 25 
            },
            { 
                name: "Neha Kulkarni", 
                email: "neha@gmail.com", 
                age: 21 
            },
            { 
                name: "Karan Mehta", 
                email: "karan@gmail.com", 
                age: 24 
            },
            { 
                name: "Isha Gupta", 
                email: "isha@gmail.com", 
                age: null 
            }
        ],
        skipDuplicates: true
        
    })

    console.log(user);
    return user;
};

createUser();
