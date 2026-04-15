const { pbkdf2 } = require("node:crypto");
const startTime = performance.now();

const createPasswordHash = (i) => {
    pbkdf2("abcd1234", "my-secret-salt-1234", 3000 * 2000, 26, "sha512", (err, hash) => {
        const endTime = performance.now();
        console.log(i, Math.round(endTime - startTime));
    });
};

for (let i = 0; i < 20; i++) {
    createPasswordHash(i);
}

// UV_THREADPOOL_SIZE=8 node 5-hashing-async.js
