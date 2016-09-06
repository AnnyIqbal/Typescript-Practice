//using default parameter in constructor function
class defaultParmeter {
    name: string;
    constructor(nam: string = "Abc") {
        if(nam) {
            this.name = nam;
        }
    }
}
var dp: defaultParmeter = new defaultParmeter();
console.log(dp.name);
