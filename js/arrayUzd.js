const pav = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake'];
const pglb = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' '];

// atspausdinti is masyvu

// 1. my sister is in the lake
const lake = pglb[3] + pglb[7] + pav[1] + pglb[7] + pglb[4] + pglb[7] + pglb[0] + pglb[7] + pglb[6] + pglb[7] + pav[6];
console.log('lake ===', lake);
// 2. hammer is on the table
const hammer = pav[2] + pglb[7] + pglb[4] + pglb[7] + pglb[2] + pglb[7] + pglb[6] + pglb[7] + pav[4];
console.log('hammer ===', hammer);
// 3. sun is in the sky
const sun = pav[3] + pglb[7] + pglb[4] + pglb[7] + pglb[0] + pglb[7] + pglb[6] + pglb[7] + pav[5];
console.log('sun ===', sun);
// 4. apple is with my sister