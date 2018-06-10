const php = require('../src/borrowed').php

test('make the first letter of each string uppercase', () => {
    expect(php.ucwords('hello, world')).toBe('Hello, World')
})

test('make the first letter of each string uppercase', () => {
    expect(php.ucwords('Hello, World')).toBe('Hello, World')
})

test('make the first letter of each string uppercase', () => {
    expect(php.ucwords('HELLO, WORLD')).toBe('HELLO, WORLD')
})

test('make the first letter of each string uppercase', () => {
    expect(php.ucwords('555')).toBe('555')
})

test('make the first letter of each word in a string array uppercase', () => {
    expect(php.ucwords(['hello, world', 'how are you?'])).toEqual(['Hello, World', 'How Are You?'])
})

test('make the first letter of each word in a string array uppercase', () => {
    expect(php.ucwords(['Hello, World', 'How Are You?'])).toEqual(['Hello, World', 'How Are You?'])
})

test('make the first letter of each word in a string array uppercase', () => {
    expect(php.ucwords(['HELLO, WORLD', 'HOW ARE YOU?'])).toEqual(['HELLO, WORLD', 'HOW ARE YOU?'])
})