const pkg = require('../package.json');

const currentYear = new Date().getFullYear();

const lines = [];

lines.push(`${pkg.name} v${pkg.version}, [filebase]`);

if (pkg.description) {
    lines.push(`${pkg.description}`);
}

if (pkg.homepage) {
    lines.push(`${pkg.homepage}`);
}

let author = '';

if ('string' === pkg.author) {
    author = pkg.author;
} else {

    author = [pkg.author.name || ''];

    if (pkg.author.email) {
        author.push(`<${pkg.author.email}>`);
    }

    if (pkg.author.url) {
        author.push(`(${pkg.author.url})`);
    }

    author = author.join(' ');
}

lines.push('');
lines.push(`Copyright ${currentYear} by ${author}`);

module.exports = lines.join('\n');