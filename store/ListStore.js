/**
 * Created by yyx on 2016/11/3.
 */
    import React from 'react';
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
    items: [],

    getAll: function () {
        return this.items;
    },

    addMessage: function (text) {
        this.items.push(<li key={text}>{text}</li>);
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

export default ListStore;