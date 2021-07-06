// source: https://blog.hubspot.com/sales/famous-quotes

const quotes=[
    {
        id:1,
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:"Nelson Mandela"
    },
    {
        id:2,
        quote:"The way to get started is to quit talking and begin doing.",
        author:"Walt Disney"
    },
    {
        id:3,
        quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author:"Steve Job"
    },
    {
        id:4,
        quote:"If life were predictable it would cease to be life, and be without flavor. ",
        author:"Eleanor Roosevelt"
    },
    {
        id:5,
        quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. ",
        author:"Oprah Winfrey"
    },
    {
        id:5,
        quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author:"James Cameron"
    },
    {
        id:6,
        quote:"Life is what happens when you're busy making other plans.",
        author:"John Lennon"
    },
    {
        id:7,
        quote:"It is during our darkest moments that we must focus to see the light.",
        author:"Aristotle"
    },
    {
        id:8,
        quote:"Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author:"Ralph Waldo Emerson"
    },
    {
        id:9,
        quote:"You will face many defeats in life, but never let yourself be defeated.",
        author:"Maya Angelou"
    },
    {
        id:10,
        quote:"In the end, it's not the years in your life that count. It's the life in your years.",
        author:"Abraham Lincoln"
    }
]

document.getElementById("text").innerHTML=quotes[0].quote
document.getElementById("name").innerHTML=quotes[0].author
document.getElementById("quote-btn").addEventListener("click",random_quote)

function random_quote(){
    const count=Math.floor(Math.random()*quotes.length)
    const item_num=quotes[count]
    document.getElementById("text").innerHTML=item_num.quote
    document.getElementById("name").innerHTML=item_num.author
}
