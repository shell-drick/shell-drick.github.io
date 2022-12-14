const quotes = [
    {
        "body": "I didn't fail the test. I just found 100 ways to do it wrong.",
        "author": "Benjamin Franklin"
    },
    {
        "body": "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.",
        "author": "Sheryl Sandberg"
    },
    {
        "body": "I attribute my success to this: I never gave or took any excuse.",
        "author": "Florence Nightingale"
    },
    {
        "body": "I would rather die of passion than of boredom.",
        "author": "Vincent van Gogh"
    },
    {
        "body": "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        "author": "Oprah Winfrey"
    },
    {
        "body": "Dreaming, after all, is a form of planning.",
        "author": "Gloria Steinem"
    },
    {
        "body": "Whatever the mind of man can conceive and believe, it can achieve.",
        "author": "Napoleon Hill"
    },
    {
        "body": "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
        "author": "Aristotle"
    },
    {
        "body": "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
        "author": "Mark Twain"
    }
]


function popupQuote() {
    let q = quotes[Math.floor(quotes.length*Math.random())];
    alert(`${q.body}\r\n\t-${q.author}`);
}