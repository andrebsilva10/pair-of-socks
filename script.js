const element = document.getElementById('code');

const code = `const socks = [10, 20, 10, 20, 10, 30, 20, 50, 10];

const count = socks.reduce((count, sock) => {
  count[sock] = (count[sock] || 0) + 1;
  return count;
}, {});

const pairs = Object.values(count).reduce((sum, qty) => {
  return sum + Math.floor(qty / 2);
}, 0);

console.log(\`Número de pares formados: \${pairs}\`);
`;

for (let i = 0; i < code.length; i++) {
  setTimeout(() => (element.innerHTML += code[i]), 15 * i);
}

eval(code);
