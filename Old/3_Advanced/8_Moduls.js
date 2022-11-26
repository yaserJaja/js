/*

export {};
import {} from './fileName.js';
import {name as newName} from './fileName.js';
import * as name from './fileName.js';

*/
import * as name from "./7_Destructing";
import { hello, bye, Person } from "./7_Destructing";
import { ex } from "./7_Destructing";

name.hello("Yaser");
hello("Yaser");
bye("Yaser");
let Yaser = new Person("Yaser");
Yaser.printHello();
ex();
