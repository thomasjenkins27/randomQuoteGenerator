const quotes = [
"Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
"Believe you can and you're halfway there. – Theodore Roosevelt",
"The only way to do great work is to love what you do. – Steve Jobs",
"Don't watch the clock; do what it does. Keep going. – Sam Levenson",
"You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
"It always seems impossible until it’s done. – Nelson Mandela",
"Start where you are. Use what you have. Do what you can. - Arthur Ashe",
"Perseverance is not a long race; it is many short races one after the other. – Walter Elliot",
"Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
"Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
"The future depends on what you do today. – Mahatma Gandhi",
"Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
"You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
"Your limitation—it’s only your imagination. – Unknown",
"Dream big. Start small. Act now. – Robin Sharma"
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }

    while (true){
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }

}
