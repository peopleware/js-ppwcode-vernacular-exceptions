/*
Copyright 2012 - $Date $ by PeopleWare n.v.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */

define(["dojo/main", "ppwcode/contracts/doh", "../SemanticException"],
  function(dojo, doh, SemanticException) {

    var aKey = "SOME KEY";
    var aCause = "SOME CAUSE";

    doh.register(SemanticException.prototype.declaredClass, [

      function testConstructor1() {
        var subject = new SemanticException();
        doh.invars(subject);
        doh.t(subject.key);
        doh.is(null, subject.key);
        doh.t(subject.cause);
        doh.is(null, subject.cause);
      },

      function testConstructor2() {
        var subject = new SemanticException({key: aKey});
        doh.invars(subject);
        doh.t(subject.key);
        doh.is(aKey, subject.key);
        doh.t(subject.cause);
        doh.is(null, subject.cause);
      },

      function testConstructor3() {
        var subject = new SemanticException({cause: aCause});
        doh.invars(subject);
        doh.t(subject.key);
        doh.is(null, subject.key);
        doh.t(subject.cause);
        doh.is(aCause, subject.cause);
      },

      function testConstructor4() {
        var subject = new SemanticException({key: aKey, cause: aCause});
        doh.invars(subject);
        doh.t(subject.key);
        doh.is(aKey, subject.key);
        doh.t(subject.cause);
        doh.is(aCause, subject.cause);
      }

    ]);

  }
);
