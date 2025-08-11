// Instagram Caption Generator JavaScript

// Caption templates for different moods
const captionTemplates = {
    motivational: [
        "💪 Every day is a new opportunity to become the best version of yourself! {topic} reminds me that growth happens outside our comfort zone.",
        "🔥 Success isn't just about what you accomplish, it's about what you inspire others to do. Today's {topic} session was exactly what I needed!",
        "✨ The only impossible journey is the one you never begin. Grateful for moments like these with {topic}.",
        "🌟 Your potential is endless. Don't let yesterday take up too much of today. {topic} vibes hitting different!",
        "💯 Progress, not perfection. Every small step counts, just like this amazing {topic} experience.",
        "🚀 Champions aren't made in comfort zones. This {topic} journey is proof that we can do hard things!",
        "⚡ Your only limit is your mind. Pushing boundaries with {topic} and loving every challenge!",
        "🏆 Excellence is not a skill, it's an attitude. Bringing that energy to everything, especially {topic}!",
        "💎 Pressure makes diamonds. Every {topic} challenge is shaping me into who I'm meant to become.",
        "🎯 Focus on progress, not perfection. Today's {topic} session was a step in the right direction!"
    ],
    funny: [
        "😂 Me: I'll just post one photo of {topic}. Also me: *posts 47 photos* No regrets!",
        "🤪 Current mood: {topic} enthusiast with zero chill and maximum vibes!",
        "😅 They say money can't buy happiness, but it can buy {topic}, and that's pretty much the same thing!",
        "🙃 Warning: May contain traces of {topic} obsession and excessive emoji usage!",
        "😆 Life status: Currently powered by {topic} and good vibes only!",
        "🤷‍♀️ I don't always {topic}, but when I do, I make sure to document every second of it!",
        "😜 My relationship status with {topic}: It's complicated, but we're working it out!",
        "🤭 Plot twist: I came for the {topic}, but stayed for the memories (and the photos)!",
        "😏 Some people collect stamps. I collect {topic} moments and questionable selfies!",
        "🙄 *Pretends to be surprised by how much I love {topic}* Nobody saw this coming!"
    ],
    inspirational: [
        "✨ In a world where you can be anything, be kind. Today's {topic} moment reminded me of life's simple beauties.",
        "🌈 Life isn't about waiting for the storm to pass, it's about learning to dance in the rain. {topic} teaches us that every day.",
        "💫 Be yourself; everyone else is already taken. Embracing authenticity through {topic} and loving every moment.",
        "🌸 Bloom where you are planted. Finding joy in {topic} and all the little things that make life magical.",
        "🕊️ Peace begins with a smile. Sharing some {topic} love and positive energy with you all today.",
        "🌅 Every sunrise is a new beginning. {topic} reminds me that beauty exists in the simplest moments.",
        "🦋 Just when the caterpillar thought the world was ending, it became a butterfly. {topic} symbolizes transformation.",
        "💝 The best things in life aren't things – they're moments like this {topic} experience.",
        "🌟 Stars can't shine without darkness. Finding light in {topic} and sharing it with the world.",
        "🌻 Turn your face to the sun and the shadows will fall behind you. {topic} brings out my brightest self!"
    ],
    casual: [
        "Just another day living my best life with some {topic} vibes ✌️",
        "Current status: {topic} mode activated 😎 How's your day going?",
        "Keeping it real with some quality {topic} time. Sometimes simple is best 🤷‍♀️",
        "Weekend mood: {topic} and good company. What more do you need? 📸",
        "No caption needed, just {topic} and good vibes all around 🙌",
        "Casual {topic} session because sometimes that's exactly what you need 💫",
        "Living for these {topic} moments. Nothing fancy, just pure contentment ☺️",
        "Today's agenda: {topic} and zero worries. Mission accomplished! ✅",
        "Simple pleasures: {topic} edition. These are the moments I live for 💛",
        "Spontaneous {topic} adventure because life's too short for boring moments! 🌟"
    ],
    romantic: [
        "💕 Love is in the details, and today's {topic} moment was pure magic with my favorite person.",
        "💖 You're my favorite hello and hardest goodbye. {topic} dates like this make my heart full.",
        "🌹 In your arms is where I belong. This {topic} adventure with you was absolutely perfect.",
        "💝 Love isn't just something you feel, it's something you do. Grateful for {topic} moments like these.",
        "💫 You + Me + {topic} = Perfect equation for happiness. Love you to the moon and back!",
        "❤️ Every love story is beautiful, but ours is my favorite. {topic} memories with you are treasures.",
        "💍 Home isn't a place, it's a person. Finding home in {topic} moments with you.",
        "🥰 You make my heart smile in ways I never knew possible. {topic} with you feels like a dream.",
        "💞 Together is a wonderful place to be. {topic} adventures are better when shared with you.",
        "🌺 You're the reason I believe in love stories. Creating our own with {topic} and endless laughter."
    ],
    professional: [
        "Excited to share insights from today's {topic} experience. Growth mindset in action! 💼",
        "Professional development never stops. Today's {topic} session reinforced the importance of continuous learning.",
        "Building excellence one day at a time. Grateful for {topic} opportunities that challenge and inspire.",
        "Success is a journey, not a destination. Today's {topic} experience added valuable perspective to mine.",
        "Investing in growth and development through {topic}. The best investment you can make is in yourself.",
        "Leadership is about continuous learning. {topic} sessions like this expand my perspective and skills.",
        "Excellence is not an act, but a habit. Cultivating that through meaningful {topic} experiences.",
        "Innovation happens when we step outside our comfort zones. {topic} challenges push creative boundaries.",
        "Professional growth requires intentional action. Today's {topic} experience was exactly that.",
        "Networking isn't about collecting contacts, it's about connecting with people. {topic} creates authentic connections."
    ],
    adventurous: [
        "🌟 Adventure awaits those who seek it! Today's {topic} expedition was absolutely incredible.",
        "🗺️ Life is either a daring adventure or nothing at all. {topic} never disappoints when it comes to thrills!",
        "⛰️ The best view comes after the hardest climb. This {topic} journey was worth every step!",
        "🚀 Collect moments, not things. Another unforgettable {topic} adventure in the books!",
        "🌍 Wanderlust and {topic} make the perfect combination for creating lifelong memories.",
        "🧭 Not all who wander are lost. Sometimes they're just finding amazing {topic} experiences!",
        "🏕️ Adventure is out there, you just have to be brave enough to find it. {topic} led me to magic!",
        "🌊 Life begins at the end of your comfort zone. {topic} adventures prove that every single time!",
        "🎒 Pack light, dream big, adventure often. {topic} expeditions fill the soul with wonder!",
        "🔥 Adventure is calling and I must go! {topic} experiences fuel my wandering spirit."
    ],
    grateful: [
        "🙏 Gratitude turns what we have into enough. So thankful for {topic} moments like these.",
        "💝 Blessed beyond measure. Today's {topic} experience reminded me of all life's gifts.",
        "✨ Counting blessings, not problems. {topic} fills my heart with so much joy and appreciation.",
        "🌻 Gratitude is the best attitude. Feeling incredibly blessed for {topic} and all the good in my life.",
        "💛 Thankful heart, happy life. {topic} moments like this remind me how good life really is.",
        "🕊️ In every season, there's something to be grateful for. {topic} brings so much joy to my days.",
        "🌈 Gratitude makes sense of our past, brings peace for today, and creates vision for tomorrow. Thank you, {topic}!",
        "💫 When we focus on our gratitude, the tide of disappointment goes out. {topic} fills me with appreciation.",
        "🌸 Gratitude is not only the greatest virtue but the parent of all others. {topic} teaches me this daily.",
        "☀️ Be thankful for what you have; you'll end up having more. {topic} abundance surrounds me always!"
    ]
};

// Hashtag collections for different categories
const hashtagSets = {
    general: [
        "#love", "#instagood", "#photooftheday", "#beautiful", "#happy", 
        "#picoftheday", "#amazing", "#life", "#good", "#instadaily",
        "#follow", "#nature", "#art", "#photography", "#style"
    ],
    motivational: [
        "#motivation", "#inspiration", "#goals", "#success", "#mindset", 
        "#hustle", "#grind", "#nevergiveup", "#believeinyourself", "#determination",
        "#growth", "#achievement", "#progress", "#strength", "#warrior"
    ],
    lifestyle: [
        "#lifestyle", "#vibes", "#mood", "#goodvibes", "#blessed", 
        "#grateful", "#positivity", "#selfcare", "#mindfulness", "#balance",
        "#wellness", "#happiness", "#peace", "#joy", "#serenity"
    ],
    adventure: [
        "#adventure", "#explore", "#travel", "#wanderlust", "#journey", 
        "#discover", "#experience", "#memories", "#freedom", "#outdoor",
        "#hiking", "#nature", "#expedition", "#explore", "#wild"
    ],
    professional: [
        "#professional", "#career", "#growth", "#development", "#learning", 
        "#leadership", "#teamwork", "#success", "#business", "#networking",
        "#innovation", "#excellence", "#skills", "#expertise", "#industry"
    ],
    creative: [
        "#creative", "#art", "#design", "#inspiration", "#artistic", 
        "#creativity", "#original", "#unique", "#expression", "#vision",
        "#aesthetic", "#beauty", "#artistry", "#imagination", "#innovation"
    ],
    food: [
        "#food", "#foodie", "#delicious", "#yummy", "#tasty", 
        "#foodporn", "#cooking", "#recipe", "#chef", "#kitchen",
        "#nutrition", "#healthy", "#organic", "#fresh", "#homemade"
    ],
    fitness: [
        "#fitness", "#workout", "#gym", "#health", "#fit", 
        "#training", "#exercise", "#strength", "#cardio", "#wellness",
        "#healthy", "#active", "#lifestyle", "#strong", "#motivation"
    ]
};

// Trending hashtags that get rotated
const trendingHashtags = [
    "#trending", "#viral", "#fyp", "#foryou", "#explore", 
    "#reels", "#instareels", "#new", "#2024", "#today",
    "#weekend", "#vibes", "#mood", "#aesthetic", "#content"
];

// Main function to generate captions
function generateCaption() {
    const topic = document.getElementById('topic').value.trim() || 'life';
    const mood = document.getElementById('mood').value;
    const hashtagCount = parseInt(document.getElementById('hashtags').value);
    
    // Show loading state
    const outputElement = document.getElementById('output');
    outputElement.classList.add('loading');
    outputElement.textContent = '';
    
    // Simulate processing time for better UX
    setTimeout(() => {
        // Get random caption template
        const templates = captionTemplates[mood];
        const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
        const caption = randomTemplate.replace(/{topic}/g, topic);

        // Generate hashtags
        const hashtags = generateHashtags(topic, mood, hashtagCount);
        
        // Combine caption and hashtags
        const fullCaption = caption + '\n\n' + hashtags;

        // Display result
        outputElement.classList.remove('loading');
        outputElement.textContent = fullCaption;
        
        // Enable copy button
        const copyBtn = document.getElementById('copyBtn');
        copyBtn.disabled = false;
        copyBtn.classList.remove('copied');
        
        // Update hashtag count
        const actualHashtagCount = hashtags.split('#').length - 1;
        document.getElementById('hashtagCount').textContent = `${actualHashtagCount} hashtags included`;
        
        // Add subtle animation to output
        outputElement.style.transform = 'scale(0.95)';
        outputElement.style.opacity = '0.7';
        
        setTimeout(() => {
            outputElement.style.transform = 'scale(1)';
            outputElement.style.opacity = '1';
        }, 150);
        
    }, 800);
}

// Advanced hashtag generation with smart categorization
function generateHashtags(topic, mood, count) {
    let hashtags = [];
    const topicLower = topic.toLowerCase().replace(/\s+/g, '');
    
    // Add topic-related hashtags (priority)
    hashtags.push(`#${topicLower}`);
    if (topic.includes(' ')) {
        hashtags.push(`#${topicLower}life`);
        hashtags.push(`#${topicLower}vibes`);
    }
    
    // Add mood-specific hashtags (30% of total)
    const moodHashtags = hashtagSets[mood] || hashtagSets.general;
    const moodCount = Math.floor(count * 0.3);
    hashtags = hashtags.concat(shuffleArray(moodHashtags).slice(0, moodCount));
    
    // Add category-specific hashtags based on topic
    const categoryHashtags = getCategoryHashtags(topic);
    const categoryCount = Math.floor(count * 0.25);
    hashtags = hashtags.concat(shuffleArray(categoryHashtags).slice(0, categoryCount));
    
    // Add general popular hashtags (25% of total)
    const generalCount = Math.floor(count * 0.25);
    hashtags = hashtags.concat(shuffleArray(hashtagSets.general).slice(0, generalCount));
    
    // Add lifestyle hashtags (15% of total)
    const lifestyleCount = Math.floor(count * 0.15);
    hashtags = hashtags.concat(shuffleArray(hashtagSets.lifestyle).slice(0, lifestyleCount));
    
    // Add trending hashtags (remaining spots)
    const trendingCount = Math.floor(count * 0.1);
    hashtags = hashtags.concat(shuffleArray(trendingHashtags).slice(0, trendingCount));
    
    // Remove duplicates and trim to requested count
    hashtags = [...new Set(hashtags)].slice(0, count);
    
    // Fill remaining spots with additional relevant hashtags if needed
    const additionalTags = [
        "#instamood", "#followme", "#instacool", "#bestoftheday", "#smile", 
        "#fun", "#instapic", "#igers", "#webstagram", "#instalike",
        "#tagsforlikes", "#follow4follow", "#like4like", "#instagramhub", "#instafamous"
    ];
    
    while (hashtags.length < count && additionalTags.length > 0) {
        const tag = additionalTags.shift();
        if (!hashtags.includes(tag)) {
            hashtags.push(tag);
        }
    }
    
    return shuffleArray(hashtags).join(' ');
}

// Get category-specific hashtags based on topic keywords
function getCategoryHashtags(topic) {
    const topicLower = topic.toLowerCase();
    
    if (topicLower.includes('food') || topicLower.includes('coffee') || topicLower.includes('dinner') || topicLower.includes('lunch')) {
        return hashtagSets.food;
    } else if (topicLower.includes('workout') || topicLower.includes('gym') || topicLower.includes('fitness') || topicLower.includes('run')) {
        return hashtagSets.fitness;
    } else if (topicLower.includes('travel') || topicLower.includes('adventure') || topicLower.includes('hiking') || topicLower.includes('beach')) {
        return hashtagSets.adventure;
    } else if (topicLower.includes('art') || topicLower.includes('design') || topicLower.includes('creative') || topicLower.includes('photo')) {
        return hashtagSets.creative;
    } else if (topicLower.includes('work') || topicLower.includes('business') || topicLower.includes('meeting') || topicLower.includes('office')) {
        return hashtagSets.professional;
    }
    
    return hashtagSets.lifestyle;
}

// Utility function to shuffle arrays
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Enhanced copy function with better feedback
function copyCaption() {
    const output = document.getElementById('output');
    const text = output.textContent;
    
    if (!text || text === 'Your generated caption will appear here...') {
        alert('Please generate a caption first!');
        return;
    }
    
    // Try modern clipboard API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
            showCopySuccess();
        }).catch(function(err) {
            // Fallback for older browsers
            fallbackCopyTextToClipboard(text);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(text);
    }
}

// Fallback copy method for older browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopySuccess();
        } else {
            showCopyError();
        }
    } catch (err) {
        showCopyError();
    }
    
    document.body.removeChild(textArea);
}

// Show copy success feedback
function showCopySuccess() {
    const button = document.getElementById('copyBtn');
    const originalText = button.textContent;
    
    button.textContent = '✅ Copied!';
    button.classList.add('copied');
    
    setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('copied');
    }, 2500);
}

// Show copy error feedback
function showCopyError() {
    alert('Could not copy caption automatically. Please select the text and copy manually (Ctrl+C or Cmd+C).');
}