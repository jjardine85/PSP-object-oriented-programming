import test from 'node:test';
import assert from 'node:assert/strict';
import { Customer } from '../Customer.js';
import { Account } from '../Account.js';

test('Customer constructor stores customer details and account', () => {
    const a = new Account('savings', 250);
    const c = new Customer (
        'Alex Smith',
        '10 High Street',
        '1995-06-12',
        a
    );

    assert.equal(c.name, 'Alex Smith');
    assert.equal(c.address, '10 High Street');
    assert.equal(c.dateOfBirth, '1995-06-12');
    assert.strictEqual(c.account, a);
});
