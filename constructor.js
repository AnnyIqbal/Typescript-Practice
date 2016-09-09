var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseClassWithConstructor = (function () {
    function BaseClassWithConstructor(id) {
        this._id = id;
    }
    return BaseClassWithConstructor;
}());
var DerivedClassWithConstructor = (function (_super) {
    __extends(DerivedClassWithConstructor, _super);
    function DerivedClassWithConstructor(id, name) {
        _super.call(this, id);
        this._name = name;
    }
    return DerivedClassWithConstructor;
}(BaseClassWithConstructor));
var BaseClassWithConstructor1 = (function () {
    function BaseClassWithConstructor1(id) {
        this._id = id;
    }
    BaseClassWithConstructor1.prototype.getProperties = function () {
        return "_id:" + this._id;
    };
    return BaseClassWithConstructor1;
}());
var DerivedClassWithConstructor1 = (function (_super) {
    __extends(DerivedClassWithConstructor1, _super);
    function DerivedClassWithConstructor1(id, name) {
        _super.call(this, id);
        this._name = name;
    }
    DerivedClassWithConstructor1.prototype.getProperties = function () {
        return "_name:" + this._name + "," + _super.prototype.getProperties.call(this);
    };
    return DerivedClassWithConstructor1;
}(BaseClassWithConstructor1));
var a = new DerivedClassWithConstructor1(2, "Anna");
console.log(a.getProperties());
