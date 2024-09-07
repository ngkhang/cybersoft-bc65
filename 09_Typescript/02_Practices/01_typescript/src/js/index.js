"use strict";
// Type
// Primitive
let score = 1;
let language = "vn";
let isLogin = true;
let resApi = null;
let res = 999;
res = "999";
// Reference
let scores = [1, 2, 3];
let languages = ["vn", "en"];
let phones = ["09090090", 90990900];
let userInfo = [true, "user 1", 20];
let res2 = 200;
res2 = "error";
let user1 = { id: 1, account: "abc", pass: "123" };
user1.address = "";
let student1 = {
    id: 1,
    fullName: "student 1",
    class: "Typescript",
    dob: "21/12/2000",
};
// Function
const addNumber = (a, b) => a + b;
const greeting = (name) => console.log(`Hi: ${name}`);
const getApi = () => {
    return {
        status: 200,
        messError: "",
        data: [
            {
                id: 1,
                name: "Prod 1",
            },
            {
                id: 2,
                name: "Prod 2",
            },
        ],
    };
};
// Callback Type
const renderHeading = (content) => {
    let element = document.querySelector('#content');
    if (element)
        element.innerHTML = `<h1>${content}</h1>`;
};
const renderElement = (callbackRender, content) => {
    callbackRender(content);
};
// Utility Type
// ReturnType<FUNCTION>
// Generic Type
class UserModel {
    constructor() {
        this.id = '';
        this.email = '';
        this.account = '';
        this.password = '';
    }
}
class ProductModel {
    constructor() {
        this.id = '';
        this.name = '';
        this.price = 0;
    }
}
class ListModel {
    constructor() {
        this.listModel = [];
        this.insertModel = (newModel) => { this.listModel.push(newModel); };
        this.findModelByName = (keyword) => this.listModel.filter((item) => item.name.search(keyword));
    }
}
