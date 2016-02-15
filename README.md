# common-decorators

## Standard promise helpers-decorators

### `promiseMethod` usage:

class Some {

    @promiseMethod
    method() {

    }

}

it means as:

    method: Promise.method(function() {


    })


### `transactional` usage:

class SomeDao {

    constructor(db) {
        this.db = db;
    }

    @transactional
    method() {

    }

}

it means, as:

    method: Promise.method(function(...) {
        return this.db.tx(function() {


        });
    });
