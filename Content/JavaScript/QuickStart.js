"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
let obj = new UE.MainObject();
//成员访问
console.log("------------------------0----------------------------");
console.log("before set", obj.MyString);
obj.MyString = "PPPPP";
console.log("after set", obj.MyString);
UE.KismetSystemLibrary.PrintString(null, "hhhh", true, true, new UE.LinearColor(0.0, 0.66, 1.0, 1.0), 2.0);
UE.KismetSystemLibrary.PrintString(null, "gggg", true, true, new UE.LinearColor(0.0, 0.66, 1.0, 1.0), 2.0);
UE.KismetSystemLibrary.PrintString(null, "yyyy", true, true, new UE.LinearColor(0.0, 0.66, 1.0, 1.0), 2.0);
console.log("------------------------1----------------------------");
//# sourceMappingURL=QuickStart.js.map