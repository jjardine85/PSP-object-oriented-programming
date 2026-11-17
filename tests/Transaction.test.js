import test from 'node:test';
import assert from 'node:assert/strict';
import Transaction from '../Transaction.js';

test('Transaction constructor stores value and direction', () => {
    const transaction = new Transaction(75, 'deposit');

    assert.equal(transaction.value, 75);
    assert.equal(transaction.direction, 'deposit');
});
