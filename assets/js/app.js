async function randomQuote(params) {
  const res = await fetch('https://api.kanye.rest');
  const data = await res.json();
  displayQuote(data)
}

const displayQuote = (data) => {
  const quoteDisplay = document.getElementById('quote-display');
  quoteDisplay.innerText = `"${data.quote}"`;
}