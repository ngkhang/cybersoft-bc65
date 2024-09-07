// Type
// Primitive
let score: number = 1;
let language: string = "vn";
let isLogin: boolean = true;

let resApi: null = null;
let res: number | string = 999;
res = "999";

// Reference
let scores: number[] = [1, 2, 3];
let languages: Array<string> = ["vn", "en"];
let phones: Array<number | string> = ["09090090", 90990900];
let userInfo: Array<string | boolean | number> = [true, "user 1", 20];

// Type keyword
type Status = number | string;
let res2: Status = 200;
res2 = "error";

type User = {
  id: number;
  account: string;
  pass: string;
  address?: string;
};
let user1: User = { id: 1, account: "abc", pass: "123" };
user1.address = "";

// Interface keyword
interface Student {
  id: number;
  fullName: string;
  class: string;
  dob: string;
}

let student1: Student = {
  id: 1,
  fullName: "student 1",
  class: "Typescript",
  dob: "21/12/2000",
};

// Function
const addNumber = (a: number, b: number): number => a + b;

const greeting = (name: string): void => console.log(`Hi: ${name}`);

interface ResType {
  status: number;
  messError: string | null;
  data?: {
    id: number;
    name: string;
  }[];
}
const getApi = (): ResType => {
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
const renderHeading = (content: string) => {
  let element = document.querySelector('#content');
  if(element) element.innerHTML = `<h1>${content}</h1>`
}
const renderElement = (callbackRender:(input: string) => void, content: string) => {
  callbackRender(content);
};

// Utility Type
// ReturnType<FUNCTION>

// Generic Type
class UserModel {
  id: string | number = '';
  email: string = '';
  account: string = '';
  password: string = '';
}
class ProductModel {
  id: string | number = '';
  name: string = '';
  price: number = 0;
}

class ListModel<Type> {
  listModel: Type[] = [];

  insertModel = (newModel: Type) => {this.listModel.push(newModel)};

  findModelByName = (keyword: string):Type[] => this.listModel.filter((item: any) => item.name.search(keyword))
}



