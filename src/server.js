"use strict";
exports.__esModule = true;
var express_1 = require("express");
var routes_1 = require("./routes");
var app = (0, express_1["default"])();
app.use((0, express_1.json)());
app.use(express_1["default"].urlencoded({ extended: true }));
app.use(routes_1.router);
exports["default"] = app;
