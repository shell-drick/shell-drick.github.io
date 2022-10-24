
const quotes = fs.readFileSync("quotes.json").split('/\r?\n/');

function popupQuote() {
    let q = quotes[Math.floor(quotes.length*Math.random())];
    alert(`${q.body}\r\n\t-${q.author}`);
}