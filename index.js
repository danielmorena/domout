"use strict";

var _ = require("lodash");
var stream = require("./lib/stream");
var templates = require("./lib/templates");


// Global base dir for app
global.__base = __dirname;

// Start the server
stream.bootServer(7777);


module.exports = _.merge(
    templates.setupTemplateEntryPoints(),
    { 'rawStream': stream.rawStream }
);
