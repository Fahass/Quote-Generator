var btn = document.getElementById("btn")
var outQuote = document.getElementById("text")
var mainQuote = document.getElementById("text-hd")
var Quotes = [
    {
        quote:"'If it's to be, it's up me!'",
        person:"Brian Tracy",
    },

    {
        quote:"'If we all did the things we are capable of doing, we would literally astound ourselves.'" ,
        person:"Thomas Edison",
    },

    {
        quote:"'If you aim at nothing, you will hit it every time.'" ,
        person:"Tom Cochrane",
    },

    {
        quote:"'Either I will find a way, or I will make one'",
        person:"Philip Sidney",
    },

    {
        quote:"'Energy and persistence conquer all things.'",
        person:"Benjamin Franklin ",
    },

    {
        quote:"'Effective communication is 20% what you know and 80% how you feel about what you know.'",
        person:"Jim Rohn",
    },

    {
        quote:"'Don't be afraid to give up the good to go for the great.'",
        person:"John D. Rockefeller",
    },

    {
        quote:"'Do not let what you cannot do interfere with what you can do.'",
        person:"John Wooden",
    },

    {
        quote:"'Do or do not. There is no try.'",
        person:"Yoda",
    },

    {
        quote:"'Change is hardest at the beginning, messiest in the middle and best at the end.'" ,
        person:"Robin Sharma",
    },

    {
        quote:"'Crush your fears with ACTION.'",
        person:"Russell Frazier",
    },

    {
        quote:"'Courage is not absence of fear; it is control of fear, mastery of fear.'",
        person:"Mark Twain",
    },

    {
        quote:"'The harder the conflict, the more glorious the triumph.'",
        person:"Thomas Paine",
    },

    {
        quote: "'The key to success is to focus our conscious mind on things we desire not things we fear.'",
        person:"Brian Tracy ",
    },

    {
        quote:"'The majority of men meet with failure because of their lack of persistence in creating new plans to take the place of those which fail.'",
        person:" Napoleon Hill",
    },

    {
        quote:"'The more you go to your limits, the more your limits will expand.'",
        person:"Robin Sharma",
    },

    {
        quote:"'The most dangerous place is in your safety zone.'",
        person:" Robin Sharma",
    },

    {
        quote:"'The most unprofitable item ever manufactured is an excuse.'",
        person:" John Mason",
    },

    {
        quote:"'The real reward for doing your best work is not the money you make but the leader you become.'",
        person:"Robin Sharma",
    },

    {
        quote: "'Tough times never last, but tough people do.'",
        person:" Robert H. Schuller",
    },

    {
        quote: "'Treating someone as second class never gets you first class results.'" ,
        person:" David J. Schwartz ",
    },

    {
        quote:"'Try not to become a person of success, but try to become a person of value.'",
        person:" Albert Einstein ",
    },

    {
        quote:"'Words may show a man's wit but actions his meaning.'",
        person:"Benjamin Franklin",
    },

    {
        quote:"'Work as if you were to live a hundred years. Pray as if you were to die tomorrow.'",
        person:"Benjamin Franklin ",
    },

    {
        quote:"'You are the average of the five people you spend the most time with.'",
        person:"Jim Rohn",
    },

    {
        quote:"'You can do anything if you have enthusiasm.'",
        person:"Henry Ford",
    },

    {
        quote:"'You can make excuses or you can make progress. You choose.'",
        person:" Brian Tracy",
    },

    {
        quote:"'You can’t wait for inspiration. You have to go after it with a club.'",
        person:" Jack London",
    },

    {
        quote:"'You can't build a reputation on what you are going to do.'",
        person:" Henry Ford",
    },

    {
        quote:"'You just can't beat the person who never gives up.'",
        person:"Babe Ruth",
    },

    {
        quote:"'You miss 100% of the shots you don't take.'",
        person:" Wayne Gretzky ",
    },

    {
        quote:"'Your success will be compromised by your need to be liked by everyone.'",
        person:"Grant Cardone ",
    },

    {
        quote:"'Your most valuable asset can be your willingness to persist longer than anyone else.'",
        person:" Brian Tracy",
    },

    {
        quote:"'Your life/career will be what you make of them. No more. No less.'",
        person:"Larry Winget ",
    },

    {
        quote: "'Your life only gets better when you get better.'",
        person:"Brian Tracy ",
    },

    {
        quote:"'Your heaviest artillery will be your will to live. Keep that big gun going.'",
        person:"Norman Cousins",
    },

    {
        quote:"'Your happiness is up to you. Period. Don't blame someone else because you aren't happy.'",
        person:"Larry Winget",
    },

    {
        quote:"'Your excuses might be legit but they won't improve your life.'",
        person:" Grant Cardone",
    },

    {
        quote:"'Your daily schedule reflects your deepest values.'",
        person:" Robin Sharma",
    },

    {
        quote:"'Your behavior will guide the behavior of the other members of your team or the people in your organization.'",
        person:"Brian Tracy",
    },

    {
        quote:"'Your attitude, not your aptitude, will determine your altitude.'",
        person:" Zig Ziglar",
    },

    {
        quote:"'You'll always get out of life what you put it in - and you control what you put in.'",
        person:"Brian Tracy ",
    },

    {
        quote:"'You’ll never go wrong in doing what is right.'",
        person:"Robin Sharma ",
    },

    {
        quote:'"You will not have a successful life surrounded by negative people."',
        person:"Grant Cardone",
    },

    {
        quote:"'You will never find time for anything. If you want time you must make it.'",
        person:"Charles Robert Buxton ",
    },

    {
        quote:"'The Constitution only gives people the right to pursue happiness. You have to catch it yourself.'",
        person:" Benjamin Franklin ",
    },

    {
        quote:"'Take responsibility. Don't blame. Get to work. Everything is up to YOU.'",
        person:"Larry Winget",
    },

    {
        quote:"'Success is the culmination of failures, mistakes, false starts, confusion and the determination to keep going anyway.'" ,
        person:"Nick Gleason",
    },

    {
        quote:"'Success is the ability to go from failure to failure without losing your enthusiasm.'",
        person:"Winston Churchill",
    },

    {
        quote:"'Success is simple, do what's right, the right way, at the right time.'",
        person:"Arnold H. Glasow ",
    },

    {
        quote:"'Hardwork and Consistency makes your dream comes to live.'",
        person:"Fahass",
    },

    {
        quote:"'A goal properly set is halfway reached.'",
        person:"Zig Ziglar ",
    },

    {
        quote:"'A guaranteed way to be miserable is to spend all your time trying to make everyone else happy.'",
        person:"Larry Winget ",
    },

    {
        quote:"'A man wrapped up in himself makes a very small bundle.'",
        person:"Benjamin Franklin ",
    },

    {
        quote:"'Hardwork and Consistency makes your dream comes to live'",
        person:"Fahass",
    },

    {
        quote:"'A mediocre idea that generates enthusiasm will go further than a great idea that inspires no one.'",
        person:"Mary Kay Ash",
    },

    {
        quote:"'A strong foundation at home sets you up for a strong foundation at work.'",
        person:"Robin Sharma",
    },

    {
        quote:"'Accept the challenges so you can feel the exhilaration of victory.'",
        person:"Fahass",
    },

    {
        quote:"'Hardwork and Consistency makes your dream comes to live'",
        person:"George S. Patton ",
    },

    {
        quote:"'Accept your teammates for what they are and inspire them to become all they can be.'",
        person:"Robin Sharma",
    },

    {
        quote:"'Act as if what you do makes a difference. It does.'",
        person:"William James",
    },

    {
        quote:"'Act as a king or act as if you dont't know who the king is.'",
        person:"Fahass",
    },

    {
        quote:"'Action is the foundational key to all success.'",
        person:"Pablo Picasso ",
    },

    {
        quote:"'Aim for the moon. If you miss you may hit a star.'",
        person:"W. Clement Stone",
    },

    {
        quote:"'All of your dreams await just on the other side of your fears.'",
        person:"Grant Cardone",
    },

    {
        quote:"'Always choose the future over the past.'",
        person:"Brian Tracy ",
    },

    {
        quote:"'What you plant now, you will harvest later.'",
        person:"Fahass",
    },

    {
        quote:"'Always give without remembering and always receive without forgetting.'",
        person:"Brian Tracy",
    },

    {
        quote:"'Amateurs sit and wait for inspiration, the rest of us just get up and go to work.'",
        person:"Stephen King",
    },

    {
        quote:"'An attitude of a positive expectation is the mark of the superior personality.'",
        person:"Brian Tracy",
    },

    {
        quote:"'Anger is never without a reason, but seldom with a good one.'",
        person:"Benjamin Franklin",
    },

]

btn.addEventListener("click", ()=> {
    var randomQuote = Quotes[Math.floor(Math.random() * Quotes.length)]
    mainQuote.innerText = randomQuote.quote;
    outQuote.innerText = randomQuote.person;
})