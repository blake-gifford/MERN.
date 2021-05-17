/* 
    Recreate Object.entries method

    Given an object, return an array of arrays of the object's key value pairs, where 
    each key value pair is a 2 item array

    Do not include key value pairs from the given objects prototype (these are included 
    by default when looping over an object's keys)

*/

// EXAMPLE:
const proto = { inheritance: 'inherited key', keyOnProto: 'val from proto' };
const obj1 = Object.assign(Object.create(proto), {
    firstName: 'Foo',
    lastName: 'Bar',
    age: 13
});

// console.log(obj1);

const expected1 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13]
]

function enteries(obj){
    let newArr = [];

    for (let i in obj1){
        if (obj1.hasOwnProperty(i)){
            newArr.push([i, obj[i]]);
        }
    }
    return newArr;
}
console.log(enteries(obj1))

/* 
    Given a table name string and an object whose key value pairs represent column names 
    and values for the columns, return a SQL insert statement string

    Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it
    easy to add variables into a string or to add quotations without needing to escape them.

    Bonus: after solving it, write a 2nd solution focusing on functional programming using 
    built in methods
*/
// EXAMPLE
const table = "users";
const insertData = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expected = "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";

function insert(tableName, columnValuePairs) {
    let query = `INSERT INTO ${tableName} (`;

    for(const column in columnValuePairs){
        if(query[query.length-1] !== '('){
            query += ', ';
        }
        query += column;
    }
    query += ') VALLUES (';

    for(const column of columnValuePairs){
        if(query[query.length-1] !== '('){
            query += ', ';
        }

        if (typeof columnValuePairs[column] === "string"){
            query += `'${columnValuePairs[column]}'`;
        }else{
            query += columnValuePairs[column];
        }
    }
    query = ');'

    return query;
}

console.log(insert(table, insertData))