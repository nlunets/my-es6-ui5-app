
export default class Foo {
    constructor(prop) {
        this.prop = prop;
    }

    static staticMethod() {
        return 'static';
    }

    prototypeMethod() {
        return 'prototype:' + this.prop;
    }
};