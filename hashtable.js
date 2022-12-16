class HashTable {
    // m = hashtable size
    constructor(size) {
        this.size = size;
        this.table = [];
        for (let i = 0; i < this.size; i++) {
            this.table.push([]);
        }
    }

    // parse string to integer
    parse(str) {
        let result = 0;
        for (let i = 0; i < str.length; i++) {
            result += str.charCodeAt(i);
        }
        return result % this.size;
    }

    // Division method
    hash1(key) {
        return key % this.size;
    }
    // Multiplication method
    hash2(key) {
        let parseKey = 0;
        if (typeof key !== "Number") {
            parseKey = this.parse(key);
        } else {
            parseKey = key;
        }
        let A = (Math.sqrt(5) - 1) / 2;
        return Math.floor(this.size * ((parseKey * A) % 1));
    }

    set(key, value) {
        let index = this.hash2(key);
        this.table[index].push({key, value });
    }

    get(key) {
        let index = this.hash2(key);
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i].key == key) {
                return this.table[index][i];
            }
        }
        return null;
    }

    printAll() {
        console.log(this.table);
    }
}

let myHashTable = new HashTable(6);
// CSS
myHashTable.set("while", "#FFFFFF");
myHashTable.set("magenta", "#FF00FF");
myHashTable.set("red", "#FF0000");
myHashTable.printAll();
console.log(myHashTable.get("magenta").value);
