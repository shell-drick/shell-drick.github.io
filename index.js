function popupQuote() {
    let quotes = readFileSync("quotes.json").split('/\r?\n/');
    let q = quotes[Math.floor(quotes.length*Math.random())];
    alert(`${q.body}\r\n\t-${q.author}`);
}