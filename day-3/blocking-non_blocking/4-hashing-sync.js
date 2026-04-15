const { pbkdf2Sync } = require("node:crypto");
const startTime = performance.now();

const createPasswordHash = (i) => {
    const hash = pbkdf2Sync("abcd1234", "my-secret-salt-1234", 1000 * 2000, 26, "sha512");
    const endTime = performance.now();
    console.log(i, Math.round(endTime - startTime));
};

for (let i = 0; i < 20; i++) {
    createPasswordHash(i);
}
