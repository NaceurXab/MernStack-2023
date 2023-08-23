const express = require("express");
const app = express();
const port = 8000;


const faker = require("@faker-js/faker");
console.log(faker.datatype);

const User = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});

const Company = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country(),
    },
});

app.get("/api/users/new", (req, res) => {
    const newUser = User();
    res.json(newUser);
});

app.get("/api/companies", (req, res) => {
    const newCompany = Company();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = User();
    const newCompany = Company();
    const newCompanyUser = {
        user: newUser,
        company: newCompany,
    };
    res.json(newCompanyUser);
});

app.listen(port, () => console.log(`express server running on port ${port}`));