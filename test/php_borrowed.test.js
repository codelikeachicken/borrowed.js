const php = require('../src/borrowed').php

test('make each word uppercase', () => {
    expect(php.ucwords('hello, world')).toBe('Hello, World')
})

test('make each word uppercase', () => {
    expect(php.ucwords('Hello, World')).toBe('Hello, World')
})

test('make each word uppercase', () => {
    expect(php.ucwords('HELLO, WORLD')).toBe('HELLO, WORLD')
})