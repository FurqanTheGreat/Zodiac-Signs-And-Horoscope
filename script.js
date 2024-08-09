let randomMessages = [
    "Today, embrace your inner fire and take bold steps towards your goals. The universe rewards courage.",
    "Patience is your superpower. Trust that everything is unfolding at the right pace, and stay grounded in your values.",
    "Your curiosity is a gift. Explore new ideas and connections today; you might stumble upon something life-changing.",
    "Emotions may run high today. Take time to nurture yourself and those you care about; your compassion is your strength.",
    "Shine your light brightly, but remember to share the spotlight. Collaboration could lead to exciting opportunities.",
    "Attention to detail will serve you well today. Stay organized, and you'll find that even the smallest tasks bring big rewards.",
    "Balance is key. Seek harmony in your relationships and environment, and you'll find peace in even the busiest of days.",
    "Intensity fuels transformation. Embrace change, and don't be afraid to delve deep into your emotions to find clarity.",
    "Adventure calls! Whether it's a physical journey or a mental exploration, let your sense of wonder guide you.",
    "Hard work pays off. Stay focused on your long-term goals, and remember that persistence is more powerful than perfection.",
    "Innovation is your ally. Think outside the box today, and you'll uncover solutions that others might miss.",
    "Intuition is your compass. Trust your inner voice, and allow yourself to flow with the energy around you."    
];

function generateRandomMessage() {
    let randomMessage = randomMessages[Math.floor(Math.random() * 12)];
    return randomMessage;
};

document.querySelector('h2').innerHTML = generateRandomMessage();

document.querySelector('h2').hidden = true;

let button = document.querySelector('button')

button.onclick = function() {
    document.querySelector('h2').hidden = false;
}