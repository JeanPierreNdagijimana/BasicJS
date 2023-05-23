// const champ = {
//     fn: "john",
//     ln: "doe",
// };
// // console.log(champ.fn);

// const arr = ['jane', 'doe', 10]
// // console.log(arr[1]);
// const test = {
//     student: {
//         fname: 'juba',
//         lname: 'kampala',
//         city: 'kigali',
//     },
// }
// console.log(`student name is ${test.student.fname} and lives in ${test.student.city}`);
let test2 = {
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
let NewTest2 = test2;
NewTest2.data[0].firstName = 'Jean';
NewTest2.data[0].lastName = 'Ndagijimana';

for( let i=0; i<test2.data.length; i++){
    console.log(`Student studentID: ${test2.data[i].studentId}, Student first name: ${test2.data[i].firstName}, Student last name: ${test2.data[i].lastName}, Student email: ${test2.data[i].email}, Student phone: ${test2.data[i].phone}, Student city: ${test2.data[i].city}, Student Created at: ${test2.data[i].createdAt}, Student updated at: ${test2.data[i].updatedAt}`);
}

let studentTable = document.querySelector('#student-info');

for (let i = 0; i < test2.data.length; i++) {
    let student = test2.data[i];
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.studentId}</td>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.email}</td>
        <td>${student.phone}</td>
        <td>${student.city}</td>
        <td>${student.createdAt}</td>
        <td>${student.updatedAt}</td>
    `;
    studentTable.appendChild(row);
}
