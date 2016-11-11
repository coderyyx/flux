/**
 * Created by yyx on 2016/11/3.
 */
    import React from 'react';
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var pageStore = assign({}, EventEmitter.prototype, {
    index: "",

    getIndex: function () {
        return this.index;
    },

    transClick: function (text) {
        this.index=text;
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

export default pageStore;