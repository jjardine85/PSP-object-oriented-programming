import test from 'node:test';
import assert from 'node:assert/strict';
import { Account } from '../Account.js';

test('Account constructor stores type and balance', () => {
    const account = new Account('savings', 100);

        assert.equal(account.type, 'savings');
        assert.equal(account.balance, 100);
    });

test('Account constructor preserves a zero balance', () => {
    const account = new Account('current', 0);

    assert.equal(account.balance, 0);
});
