
/* =====================================
   OFFBEAT PRODUCT DATABASE
   All prices are in Malaysian Ringgit
===================================== */

const products = [
    // ROCK
    {
id: 1,
    title: "AM",
    artist: "Arctic Monkeys",
    genre: "Rock",
    price: 119.00,
    image: "images/albums/am.png",

    description: "AM is the fifth studio album by Arctic Monkeys. Released in 2013, it blends alternative rock, blues influences, and atmospheric sounds.",

    tracks: [
        "Do I Wanna Know?",
        "R U Mine?",
        "One for the Road",
        "Arabella",
        "I Want It All",
        "No. 1 Party Anthem",
        "Mad Sounds",
        "Fireside",
        "Why'd You Only Call Me When You're High?",
        "Snap Out of It",
        "Knee Socks",
        "I Wanna Be Yours"
    ]


    },

    {
        id: 6,
        title: "Abbey Road",
        artist: "The Beatles",
        genre: "Rock",
        price: 139.00,
        image: "images/albums/abbey-road.png",
        description: "Abbey Road is The Beatles' 1969 studio album, celebrated for its memorable songwriting, innovative production, and iconic cover artwork.",
        tracks: [
            "Come Together",
            "Something",
            "Maxwell's Silver Hammer",
            "Oh! Darling",
            "Octopus's Garden",
            "I Want You (She's So Heavy)",
            "Here Comes the Sun",
            "Because",
            "You Never Give Me Your Money",
            "Sun King",
            "Mean Mr. Mustard",
            "Polythene Pam",
            "She Came In Through the Bathroom Window",
            "Golden Slumbers",
            "Carry That Weight",
            "The End",
            "Her Majesty"
        ]
    },


    {
        id: 7,
        title: "Nevermind",
        artist: "Nirvana",
        genre: "Rock",
        price: 129.00,
        image: "images/albums/nevermind.png",
        description: "Nevermind is Nirvana's 1991 breakthrough album. Featuring powerful guitars and memorable melodies, it helped bring grunge music into the mainstream.",
        tracks: [
            "Smells Like Teen Spirit",
            "In Bloom",
            "Come as You Are",
            "Breed",
            "Lithium",
            "Polly",
            "Territorial Pissings",
            "Drain You",
            "Lounge Act",
            "Stay Away",
            "On a Plain",
            "Something in the Way"
        ]
    },



    // R&B
    {
        id: 2,
        title: "SOS",
        artist: "SZA",
        genre: "R&B",
        price: 129.00,
        image: "images/albums/sos.png",
        description: "SOS is SZA's second studio album, released in 2022. It blends contemporary R&B, pop, and alternative influences while exploring relationships, identity, and personal growth.",
        tracks: [
            "SOS",
            "Kill Bill",
            "Seek & Destroy",
            "Low",
            "Love Language",
            "Blind",
            "Used",
            "Snooze",
            "Notice Me",
            "Gone Girl",
            "Smoking on My Ex Pack",
            "Ghost in the Machine",
            "F2F",
            "Nobody Gets Me",
            "Conceited",
            "Special",
            "Too Late",
            "Far",
            "Shirt",
            "Open Arms",
            "I Hate U",
            "Good Days",
            "Forgiveless"
         ]
    },


    {
        id: 4,
        title: "Blonde",
        artist: "Frank Ocean",
        genre: "R&B",
        price: 149.00,
        image: "images/albums/blonde.png",
        description: "Blonde is Frank Ocean's 2016 studio album, known for its atmospheric production, introspective lyrics, and experimental approach to R&B.",
        tracks: [
        "Nikes",
        "Ivy",
        "Pink + White",
        "Be Yourself",
        "Solo",
        "Skyline To",
        "Self Control",
        "Good Guy",
        "Nights",
        "Solo (Reprise)",
        "Pretty Sweet",
        "Facebook Story",
        "Close to You",
        "White Ferrari",
        "Seigfried",
        "Godspeed",
        "Futura Free"
        ]
    },


    {
        id: 5,
        title: "Ctrl",
        artist: "SZA",
        genre: "R&B",
        price: 119.00,
        image: "images/albums/ctrl.png",
        description: "Ctrl is SZA's debut studio album, released in 2017. Its honest songwriting explores love, insecurity, independence, and self-discovery.",
        tracks: [
            "Supermodel",
            "Love Galore",
            "Doves in the Wind",
            "Drew Barrymore",
            "Prom",
            "The Weekend",
            "Go Gina",
            "Garden (Say It Like Dat)",
            "Broken Clocks",
            "Anything",
            "Wavy (Interlude)",
            "Normal Girl",
            "Pretty Little Birds",
            "20 Something"
        ]
    },



    // HIP-HOP
    {
        id: 8,
        title: "IGOR",
        artist: "Tyler, The Creator",
        genre: "Hip-Hop",
        price: 139.00,
        image: "images/albums/igor.png",
        description: "IGOR is Tyler, The Creator's 2019 studio album. It combines hip-hop, soul, funk, and electronic elements in a story about love and heartbreak.",
        tracks: [
            "IGOR'S THEME",
            "EARFQUAKE",
            "I THINK",
            "EXACTLY WHAT YOU RUN FROM YOU END UP CHASING",
            "RUNNING OUT OF TIME",
            "NEW MAGIC WAND",
            "A BOY IS A GUN*",
            "PUPPET",
            "WHAT'S GOOD",
            "GONE, GONE / THANK YOU",
            "I DON'T LOVE YOU ANYMORE",
            "ARE WE STILL FRIENDS?"
        ]
    },


    {
        id: 9,
        title: "DAMN.",
        artist: "Kendrick Lamar",
        genre: "Hip-Hop",
        price: 129.00,
        image: "images/albums/damn.png",
        description: "DAMN. is Kendrick Lamar's 2017 album, exploring morality, identity, faith, and personal conflict through powerful storytelling and production.",
        tracks: [
            "BLOOD.",
            "DNA.",
            "YAH.",
            "ELEMENT.",
            "FEEL.",
            "LOYALTY.",
            "PRIDE.",
            "HUMBLE.",
            "LUST.",
            "LOVE.",
            "XXX.",
            "FEAR.",
            "GOD.",
            "DUCKWORTH."
        ]
    },


    {
        id: 10,
        title: "UTOPIA",
        artist: "Travis Scott",
        genre: "Hip-Hop",
        price: 149.00,
        image: "images/albums/utopia.png",
        description: "UTOPIA is Travis Scott's 2023 studio album, featuring experimental hip-hop production, cinematic soundscapes, and collaborations with numerous artists.",
        tracks: [
            "HYAENA",
            "THANK GOD",
            "MODERN JAM",
            "MY EYES",
            "GOD'S COUNTRY",
            "SIRENS",
            "MELTDOWN",
            "FE!N",
            "DELRESTO (ECHOES)",
            "I KNOW ?",
            "TOPIA TWINS",
            "CIRCUS MAXIMUS",
            "PARASAIL",
            "SKITZO",
            "LOST FOREVER",
            "LOOOVE",
            "K-POP",
            "TELEKINESIS",
            "TIL FURTHER NOTICE"
        ]
    },


    // POP
    {
        id: 11,
        title: "After Hours",
        artist: "The Weeknd",
        genre: "Pop",
        price: 139.00,
        image: "images/albums/after-hours.png",
        description: "After Hours is The Weeknd's 2020 album, blending synth-pop, R&B, and dark electronic production with themes of loneliness and relationships.",
        tracks: [
            "Alone Again",
            "Too Late",
            "Hardest to Love",
            "Scared to Live",
            "Snowchild",
            "Escape from LA",
            "Heartless",
            "Faith",
            "Blinding Lights",
            "In Your Eyes",
            "Save Your Tears",
            "Repeat After Me (Interlude)",
            "After Hours",
            "Until I Bleed Out"
        ]
    },


    {
        id: 12,
        title: "1989",
        artist: "Taylor Swift",
        genre: "Pop",
        price: 129.00,
        image: "images/albums/1989.png",
        description: "1989 is Taylor Swift's pop-focused fifth studio album, originally released in 2014. It features polished production and memorable synth-pop melodies.",
        tracks: [
            "Welcome to New York",
            "Blank Space",
            "Style",
            "Out of the Woods",
            "All You Had to Do Was Stay",
            "Shake It Off",
            "I Wish You Would",
            "Bad Blood",
            "Wildest Dreams",
            "How You Get the Girl",
            "This Love",
            "I Know Places",
            "Clean"

        ]   
    },
    {
        id: 13,
        title: "Future Nostalgia",
        artist: "Dua Lipa",
        genre: "Pop",
        price: 119.00,
        image: "images/albums/future-nostalgia.png",
        description: "Future Nostalgia is Dua Lipa's second studio album, released in 2020. It combines disco, dance-pop, and retro-inspired production with energetic modern pop music.",
        tracks: [
            "Future Nostalgia",
            "Don't Start Now",
            "Cool",
            "Physical",
            "Levitating",
            "Pretty Please",
            "Hallucinate",
            "Love Again",
            "Break My Heart",
            "Good in Bed",
            "Boys Will Be Boys"
        ]
    },



    // ELECTRONIC
    {
        id: 3,
        title: "Random Access Memories",
        artist: "Daft Punk",
        genre: "Electronic",
        price: 139.00,
        image: "images/albums/random-access-memory.png",
        description: "Random Access Memories is Daft Punk's fourth studio album, released in 2013. It combines electronic music with disco, funk, and live instrumentation, featuring the hit Get Lucky.",
        tracks: [
            "Give Life Back to Music",
            "The Game of Love",
            "Giorgio by Moroder",
            "Within",
            "Instant Crush",
            "Lose Yourself to Dance",
            "Touch",
            "Get Lucky",
            "Beyond",
            "Motherboard",
            "Fragments of Time",
            "Doin' It Right",
            "Contact"
        ]
    },
    {
        id: 14,
        title: "Discovery",
        artist: "Daft Punk",
        genre: "Electronic",
        price: 129.00,
        image: "images/albums/dicovery.png",
        description: "Discovery is Daft Punk's second studio album, released in 2001. It blends French house, disco, and electronic music, featuring memorable tracks such as One More Time and Harder, Better, Faster, Stronger.",

        tracks: [
            "One More Time",
            "Aerodynamic",
            "Digital Love",
            "Harder, Better, Faster, Stronger",
            "Crescendolls",
            "Nightvision",
            "Superheroes",
            "High Life",
            "Something About Us",
            "Voyager",
            "Veridis Quo",
            "Short Circuit",
            "Face to Face",
            "Too Long"
        ]
    },
    {
        id: 15,
        title: "True",
        artist: "Avicii",
        genre: "Electronic",
        price: 119.00,
        image: "images/albums/true.png",
        description: "True is Avicii's debut studio album, released in 2013. It combines electronic dance music with country, folk, and pop influences, featuring the popular singles Wake Me Up and Hey Brother.",

        tracks: [
            "Wake Me Up",
            "You Make Me",
            "Hey Brother",
            "Addicted to You",
            "Dear Boy",
            "Liar Liar",
            "Shame on Me",
            "Lay Me Down",
            "Hope There's Someone",
            "Heart Upon My Sleeve"
        ]
    }
];

/* Find a product using its ID */
function getProductById(id) {
    return products.find(product => product.id === Number(id));
}

/* Display prices in RM */
function formatPrice(price) {
    return `RM ${price.toFixed(2)}`;
}
