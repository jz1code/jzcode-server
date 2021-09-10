"use strict";
/*
 * 题目
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var TypeORM = require("typeorm");
var common_1 = require("./common");
var Problem = /** @class */ (function (_super) {
    __extends(Problem, _super);
    function Problem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Problem.cache = true;
    __decorate([
        TypeORM.Column({ "default": "-", type: "varchar", length: 80 }),
        __metadata("design:type", String)
    ], Problem.prototype, "title");
    __decorate([
        TypeORM.Index(),
        TypeORM.Column({ nullable: true, type: "integer" }),
        __metadata("design:type", Number)
    ], Problem.prototype, "author_id");
    __decorate([
        TypeORM.Column({ type: "varchar", length: 10 }),
        __metadata("design:type", String)
    ], Problem.prototype, "display_id");
    __decorate([
        TypeORM.Column({ nullable: false, type: "text" }),
        __metadata("design:type", String)
    ], Problem.prototype, "body");
    __decorate([
        TypeORM.Column({ type: "int", "default": '0' }),
        __metadata("design:type", Number)
    ], Problem.prototype, "judge_state");
    Problem = __decorate([
        TypeORM.Entity()
    ], Problem);
    return Problem;
}(common_1["default"]));
exports["default"] = Problem;
//# sourceMappingURL=cpp_problem.js.map