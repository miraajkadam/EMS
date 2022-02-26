const { faker } = require('@faker-js/faker');
const axios = require('axios');

let employees = [];

const generateFakeData = (count) => {
  for (let i = 0; i < count; i++) {
    const [name, email] = [faker.name.findName(), faker.internet.email()];

    employees.push({ name, email });
  }
};

const postToDB = async () => {
  for (let i = 0; i < employees.length; i++) {
    await axios.post(`http://localhost:5001/employees/`, employees[i]);
  }
};

generateFakeData(20);
postToDB();
