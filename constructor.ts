class BaseClassWithConstructor {
 private _id: number;
 constructor(id: number) {
    this._id = id;
    }
 }
 
class DerivedClassWithConstructor extends BaseClassWithConstructor {
 private _name: string;
 constructor(id: number, name: string) {
    super(id);
    this._name = name;
    }
 }

 class BaseClassWithConstructor1 {
 private _id: number;
 constructor(id: number) {
    this._id = id;
    }
 getProperties(): string {
    return "_id:" + this._id;
    }
 }
 
class DerivedClassWithConstructor1 extends BaseClassWithConstructor1 {
     private _name: string;
     constructor(id: number, name: string) {
        super(id);
        this._name = name; 
     }
     getProperties(): string {
        return "_name:" + this._name + "," + super.getProperties(); 
    } 
}

var a = new DerivedClassWithConstructor1(2,"Anna");
console.log(a.getProperties());
