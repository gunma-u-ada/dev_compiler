'use strict';
require("./_debugger");
require("./html_common");
require("./html");
require("./_metadata");
require("./js");
require("./_js_mirrors");
require("./mirrors");
require("./convert");
require("./_js_primitives");
require("./_isolate_helper");
require("./_native_typed_data");
require("./typed_data");
require("./isolate");
require("./_js_helper");
require("./_js_embedded_names");
require("./_foreign_helper");
require("./async");
require("./_interceptors");
require("./math");
require("./_internal");
require("./collection");
require("./core");
let dart = require("./_runtime");
let dartx = dart.dartx;
const GLOBAL_FUNCTIONS = 'globalFunctions';
const CLASS_ID_EXTRACTOR = 'classIdExtractor';
const CLASS_FIELDS_EXTRACTOR = 'classFieldsExtractor';
const INSTANCE_FROM_CLASS_ID = "instanceFromClassId";
const INITIALIZE_EMPTY_INSTANCE = "initializeEmptyInstance";
// Exports:
exports.GLOBAL_FUNCTIONS = GLOBAL_FUNCTIONS;
exports.CLASS_ID_EXTRACTOR = CLASS_ID_EXTRACTOR;
exports.CLASS_FIELDS_EXTRACTOR = CLASS_FIELDS_EXTRACTOR;
exports.INSTANCE_FROM_CLASS_ID = INSTANCE_FROM_CLASS_ID;
exports.INITIALIZE_EMPTY_INSTANCE = INITIALIZE_EMPTY_INSTANCE;