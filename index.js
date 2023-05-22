const champ = {
    fn: "john",
    ln: "doe",
};
// console.log(champ.fn);

const arr = ['jane', 'doe', 10]
// console.log(arr[1]);
const test = {
    student: {
        fname: 'juba',
        lname: 'kampala',
        city: 'kigali',
    },
}
console.log(`student name is ${test.student.fname} and lives in ${test.student.city}`);
const test2 = {
    "success": true,
    "data": [
        {
            "id": 5,
            "firstName": "John",
            "lastName": "Doe",
            "email": "john@gmail.com",
            "phone": "0712345678",
            "studentId": "111111",
            "city": "Nairobi",
            "updatedAt": "2020-04-09T23:26:22.920Z",
            "createdAt": "2020-04-09T23:26:22.920Z"
        },
        {
            "id": 7,
            "firstName": "Mark",
            "lastName": "Muthii",
            "email": "mark@gmail.com",
            "phone": "0712345678",
            "studentId": "777111",
            "city": "Nairobi",
            "createdAt": "2020-04-09T22:32:00.000Z",
            "updatedAt": "2020-04-09T22:32:00.000Z"
        }
    ],
    "pagination": {
        "next": {
            "page": 2,
            "limit": 2
        }
    }
}
console.log(test2.data[0].firstName);