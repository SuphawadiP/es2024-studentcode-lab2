db = new Mongo().getDB("mydatabase");


db.students.insertMany([
    { studentCode: "0321", firstName: "phichet", lastName: "ruengsawat", age: 28, email: "jean29@gmail.com" },
    { studentCode: "2415", firstName: "phai", lastName: "ruengsawat", age: 23, email: "phai0321@gmail.com"},
    { studentCode: "0269", firstName: "supharat", lastName: "ruengsawat", age: 22, email: "pin23@gmail.com" },
    { studentCode: "0020", firstName: "aruneeprapha", lastName: "ruengsawat", age: 16, email: "mook28@gmail.com" },
    { studentCode: "0109", firstName: "suphawadi", lastName: "champathi", age: 23, email: "phai18@gmail.com" }
]);
