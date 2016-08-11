dart_library.library('language/top_level_non_prefixed_library_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__top_level_non_prefixed_library_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const top_level_non_prefixed_library_test = Object.create(null);
  const top_level_prefixed_library_test = Object.create(null);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  top_level_non_prefixed_library_test.main = function() {
    expect$.Expect.equals(top_level_prefixed_library_test.topLevelVar, 42);
    expect$.Expect.equals(top_level_prefixed_library_test.topLevelMethod(), 87);
  };
  dart.fn(top_level_non_prefixed_library_test.main, VoidTodynamic());
  top_level_prefixed_library_test.topLevelVar = 42;
  top_level_prefixed_library_test.topLevelMethod = function() {
    return 87;
  };
  dart.fn(top_level_prefixed_library_test.topLevelMethod, VoidTodynamic());
  // Exports:
  exports.top_level_non_prefixed_library_test = top_level_non_prefixed_library_test;
  exports.top_level_prefixed_library_test = top_level_prefixed_library_test;
});
