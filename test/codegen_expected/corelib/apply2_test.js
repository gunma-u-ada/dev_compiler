dart_library.library('corelib/apply2_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__apply2_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const apply2_test = Object.create(null);
  let MapOfSymbol$dynamic = () => (MapOfSymbol$dynamic = dart.constFn(core.Map$(core.Symbol, dart.dynamic)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let FunctionAndListAndMapOfSymbol$dynamicTodynamic = () => (FunctionAndListAndMapOfSymbol$dynamicTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [core.Function, core.List, MapOfSymbol$dynamic()])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.definiteFunctionType(core.bool, [dart.dynamic])))();
  let dynamicAnddynamicAnddynamicTovoid = () => (dynamicAnddynamicAnddynamicTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.definiteFunctionType(core.String, [])))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.definiteFunctionType(core.String, [dart.dynamic])))();
  let __ToString = () => (__ToString = dart.constFn(dart.definiteFunctionType(core.String, [], [dart.dynamic])))();
  let __ToString$ = () => (__ToString$ = dart.constFn(dart.definiteFunctionType(core.String, [], {a: dart.dynamic})))();
  let __ToString$0 = () => (__ToString$0 = dart.constFn(dart.definiteFunctionType(core.String, [], {a: dart.dynamic, b: dart.dynamic})))();
  let __ToString$1 = () => (__ToString$1 = dart.constFn(dart.definiteFunctionType(core.String, [], {b: dart.dynamic, a: dart.dynamic})))();
  let dynamic__ToString = () => (dynamic__ToString = dart.constFn(dart.definiteFunctionType(core.String, [dart.dynamic], {b: dart.dynamic, a: dart.dynamic})))();
  let dynamicAnddynamic__ToString = () => (dynamicAnddynamic__ToString = dart.constFn(dart.definiteFunctionType(core.String, [dart.dynamic, dart.dynamic], [dart.dynamic, dart.dynamic])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  apply2_test.apply = function(func, positional, named) {
    return core.Function.apply(func, positional, named);
  };
  dart.fn(apply2_test.apply, FunctionAndListAndMapOfSymbol$dynamicTodynamic());
  apply2_test.throwsNSME = function(func, positional, named) {
    expect$.Expect.throws(dart.fn(() => apply2_test.apply(core.Function._check(func), core.List._check(positional), MapOfSymbol$dynamic()._check(named)), VoidTovoid()), dart.fn(e => core.NoSuchMethodError.is(e), dynamicTobool()));
  };
  dart.fn(apply2_test.throwsNSME, dynamicAnddynamicAnddynamicTovoid());
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  apply2_test.main = function() {
    let c1 = dart.fn(() => 'c1', VoidToString());
    let c2 = dart.fn(a => dart.str`c2 ${a}`, dynamicToString());
    let c3 = dart.fn(a => {
      if (a === void 0) a = 1;
      return dart.str`c3 ${a}`;
    }, __ToString());
    let c4 = dart.fn(opts => {
      let a = opts && 'a' in opts ? opts.a : 1;
      return dart.str`c4 ${a}`;
    }, __ToString$());
    let c5 = dart.fn(opts => {
      let a = opts && 'a' in opts ? opts.a : 1;
      let b = opts && 'b' in opts ? opts.b : 2;
      return dart.str`c5 ${a} ${b}`;
    }, __ToString$0());
    let c6 = dart.fn(opts => {
      let b = opts && 'b' in opts ? opts.b : 1;
      let a = opts && 'a' in opts ? opts.a : 2;
      return dart.str`c6 ${a} ${b}`;
    }, __ToString$1());
    let c7 = dart.fn((x, opts) => {
      let b = opts && 'b' in opts ? opts.b : 1;
      let a = opts && 'a' in opts ? opts.a : 2;
      return dart.str`c7 ${x} ${a} ${b}`;
    }, dynamic__ToString());
    let c8 = dart.fn((x, y, a, b) => {
      if (a === void 0) a = 2;
      if (b === void 0) b = 3;
      return dart.str`c8 ${x} ${y} ${a} ${b}`;
    }, dynamicAnddynamic__ToString());
    expect$.Expect.equals('c1', apply2_test.apply(c1, null, null));
    expect$.Expect.equals('c1', apply2_test.apply(c1, [], null));
    expect$.Expect.equals('c1', apply2_test.apply(c1, [], dart.map()));
    expect$.Expect.equals('c1', apply2_test.apply(c1, null, dart.map()));
    apply2_test.throwsNSME(c1, JSArrayOfint().of([1]), null);
    apply2_test.throwsNSME(c1, JSArrayOfint().of([1]), dart.map([const$ || (const$ = dart.const(core.Symbol.new('a'))), 2]));
    apply2_test.throwsNSME(c1, null, dart.map([const$0 || (const$0 = dart.const(core.Symbol.new('a'))), 2]));
    expect$.Expect.equals('c2 1', apply2_test.apply(c2, JSArrayOfint().of([1]), null));
    expect$.Expect.equals('c2 1', apply2_test.apply(c2, JSArrayOfint().of([1]), dart.map()));
    apply2_test.throwsNSME(c2, null, null);
    apply2_test.throwsNSME(c2, [], null);
    apply2_test.throwsNSME(c2, null, dart.map());
    apply2_test.throwsNSME(c2, null, dart.map([const$1 || (const$1 = dart.const(core.Symbol.new('a'))), 1]));
    apply2_test.throwsNSME(c2, JSArrayOfint().of([2]), dart.map([const$2 || (const$2 = dart.const(core.Symbol.new('a'))), 1]));
    expect$.Expect.equals('c3 1', apply2_test.apply(c3, null, null));
    expect$.Expect.equals('c3 1', apply2_test.apply(c3, [], null));
    expect$.Expect.equals('c3 2', apply2_test.apply(c3, JSArrayOfint().of([2]), dart.map()));
    apply2_test.throwsNSME(c3, JSArrayOfint().of([1, 2]), null);
    apply2_test.throwsNSME(c3, null, dart.map([const$3 || (const$3 = dart.const(core.Symbol.new('a'))), 1]));
    expect$.Expect.equals('c4 1', apply2_test.apply(c4, [], null));
    expect$.Expect.equals('c4 2', apply2_test.apply(c4, [], dart.map([const$4 || (const$4 = dart.const(core.Symbol.new('a'))), 2])));
    expect$.Expect.equals('c4 1', apply2_test.apply(c4, null, null));
    expect$.Expect.equals('c4 1', apply2_test.apply(c4, [], dart.map()));
    apply2_test.throwsNSME(c4, JSArrayOfint().of([1]), dart.map([const$5 || (const$5 = dart.const(core.Symbol.new('a'))), 1]));
    apply2_test.throwsNSME(c4, JSArrayOfint().of([1]), dart.map());
    apply2_test.throwsNSME(c4, [], dart.map([const$6 || (const$6 = dart.const(core.Symbol.new('a'))), 1, const$7 || (const$7 = dart.const(core.Symbol.new('b'))), 2]));
    expect$.Expect.equals('c5 1 2', apply2_test.apply(c5, [], null));
    expect$.Expect.equals('c5 3 2', apply2_test.apply(c5, [], dart.map([const$8 || (const$8 = dart.const(core.Symbol.new('a'))), 3])));
    expect$.Expect.equals('c5 1 2', apply2_test.apply(c5, null, null));
    expect$.Expect.equals('c5 1 2', apply2_test.apply(c5, [], dart.map()));
    expect$.Expect.equals('c5 3 4', apply2_test.apply(c5, [], dart.map([const$9 || (const$9 = dart.const(core.Symbol.new('a'))), 3, const$10 || (const$10 = dart.const(core.Symbol.new('b'))), 4])));
    expect$.Expect.equals('c5 4 3', apply2_test.apply(c5, [], dart.map([const$11 || (const$11 = dart.const(core.Symbol.new('b'))), 3, const$12 || (const$12 = dart.const(core.Symbol.new('a'))), 4])));
    expect$.Expect.equals('c5 1 3', apply2_test.apply(c5, [], dart.map([const$13 || (const$13 = dart.const(core.Symbol.new('b'))), 3])));
    apply2_test.throwsNSME(c5, JSArrayOfint().of([1]), dart.map([const$14 || (const$14 = dart.const(core.Symbol.new('a'))), 1]));
    apply2_test.throwsNSME(c5, JSArrayOfint().of([1]), dart.map());
    apply2_test.throwsNSME(c5, [], dart.map([const$15 || (const$15 = dart.const(core.Symbol.new('a'))), 1, const$16 || (const$16 = dart.const(core.Symbol.new('b'))), 2, const$17 || (const$17 = dart.const(core.Symbol.new('c'))), 3]));
    expect$.Expect.equals('c6 2 1', apply2_test.apply(c6, [], null));
    expect$.Expect.equals('c6 3 1', apply2_test.apply(c6, [], dart.map([const$18 || (const$18 = dart.const(core.Symbol.new('a'))), 3])));
    expect$.Expect.equals('c6 2 1', apply2_test.apply(c6, null, null));
    expect$.Expect.equals('c6 2 1', apply2_test.apply(c6, [], dart.map()));
    expect$.Expect.equals('c6 3 4', apply2_test.apply(c6, [], dart.map([const$19 || (const$19 = dart.const(core.Symbol.new('a'))), 3, const$20 || (const$20 = dart.const(core.Symbol.new('b'))), 4])));
    expect$.Expect.equals('c6 4 3', apply2_test.apply(c6, [], dart.map([const$21 || (const$21 = dart.const(core.Symbol.new('b'))), 3, const$22 || (const$22 = dart.const(core.Symbol.new('a'))), 4])));
    expect$.Expect.equals('c6 2 3', apply2_test.apply(c6, [], dart.map([const$23 || (const$23 = dart.const(core.Symbol.new('b'))), 3])));
    apply2_test.throwsNSME(c6, JSArrayOfint().of([1]), dart.map([const$24 || (const$24 = dart.const(core.Symbol.new('a'))), 1]));
    apply2_test.throwsNSME(c6, JSArrayOfint().of([1]), dart.map());
    apply2_test.throwsNSME(c6, [], dart.map([const$25 || (const$25 = dart.const(core.Symbol.new('a'))), 1, const$26 || (const$26 = dart.const(core.Symbol.new('b'))), 2, const$27 || (const$27 = dart.const(core.Symbol.new('c'))), 3]));
    expect$.Expect.equals('c7 7 2 1', apply2_test.apply(c7, JSArrayOfint().of([7]), null));
    expect$.Expect.equals('c7 7 3 1', apply2_test.apply(c7, JSArrayOfint().of([7]), dart.map([const$28 || (const$28 = dart.const(core.Symbol.new('a'))), 3])));
    expect$.Expect.equals('c7 7 2 1', apply2_test.apply(c7, JSArrayOfint().of([7]), dart.map()));
    expect$.Expect.equals('c7 7 3 4', apply2_test.apply(c7, JSArrayOfint().of([7]), dart.map([const$29 || (const$29 = dart.const(core.Symbol.new('a'))), 3, const$30 || (const$30 = dart.const(core.Symbol.new('b'))), 4])));
    expect$.Expect.equals('c7 7 4 3', apply2_test.apply(c7, JSArrayOfint().of([7]), dart.map([const$31 || (const$31 = dart.const(core.Symbol.new('b'))), 3, const$32 || (const$32 = dart.const(core.Symbol.new('a'))), 4])));
    expect$.Expect.equals('c7 7 2 3', apply2_test.apply(c7, JSArrayOfint().of([7]), dart.map([const$33 || (const$33 = dart.const(core.Symbol.new('b'))), 3])));
    apply2_test.throwsNSME(c7, [], dart.map([const$34 || (const$34 = dart.const(core.Symbol.new('a'))), 1]));
    apply2_test.throwsNSME(c7, [], dart.map());
    apply2_test.throwsNSME(c7, JSArrayOfint().of([7]), dart.map([const$35 || (const$35 = dart.const(core.Symbol.new('a'))), 1, const$36 || (const$36 = dart.const(core.Symbol.new('b'))), 2, const$37 || (const$37 = dart.const(core.Symbol.new('c'))), 3]));
    expect$.Expect.equals('c8 7 8 2 3', apply2_test.apply(c8, JSArrayOfint().of([7, 8]), null));
    expect$.Expect.equals('c8 7 8 2 3', apply2_test.apply(c8, JSArrayOfint().of([7, 8]), dart.map()));
    expect$.Expect.equals('c8 7 8 3 3', apply2_test.apply(c8, JSArrayOfint().of([7, 8, 3]), null));
    expect$.Expect.equals('c8 7 8 3 4', apply2_test.apply(c8, JSArrayOfint().of([7, 8, 3, 4]), null));
    apply2_test.throwsNSME(c8, [], null);
    apply2_test.throwsNSME(c8, [], dart.map());
    apply2_test.throwsNSME(c8, JSArrayOfint().of([1]), null);
    apply2_test.throwsNSME(c8, JSArrayOfint().of([7, 8, 9, 10, 11]), null);
  };
  dart.fn(apply2_test.main, VoidTodynamic());
  // Exports:
  exports.apply2_test = apply2_test;
});