/** Array containing countries, capitals, difficulty level, link to flag image 
 * Credit for these question ideas and difficulty catergorisations: 
 * https://www.sporcle.com/games/FilipinoBreloom/world-capitals-by-difficulty
 */

const questions = [{
        country: "USA",
        capital: "Washington, D.C.",
        difficulty: "Easy",
        flag: "assets/images/flags/usa.jpg"
    },

    {
        country: "United Kingdom",
        capital: "London",
        difficulty: "Easy",
        flag: "assets/images/flags/uk.jpg"
    },

    {
        country: "France",
        capital: "Paris",
        difficulty: "Easy",
        flag: "assets/images/flags/france.png"
    },

    {
        country: "Russia",
        capital: "Moscow",
        difficulty: "Easy",
        flag: "assets/images/flags/russia.png"
    },

    {
        country: "Netherlands",
        capital: "Amsterdam",
        difficulty: "Easy",
        flag: "assets/images/flags/netherlands.png"
    },

    {
        country: "Germany",
        capital: "Berlin",
        difficulty: "Easy",
        flag: "assets/images/flags/germany.png"
    },

    {
        country: "Japan",
        capital: "Tokyo",
        difficulty: "Easy",
        flag: "assets/images/flags/japan.png"
    },

    {
        country: "Italy",
        capital: "Rome",
        difficulty: "Easy",
        flag: "assets/images/flags/italy.png"
    },

    {
        country: "China",
        capital: "Beijing",
        difficulty: "Easy",
        flag: "assets/images/flags/china.png"
    },

    {
        country: "Egypt",
        capital: "Cairo",
        difficulty: "Easy",
        flag: "assets/images/flags/egypt.png"
    },

    {
        country: "Canada",
        capital: "Ottawa",
        difficulty: "Easy",
        flag: "assets/images/flags/canada.png"
    },

    {
        country: "Portugal",
        capital: "Lisbon",
        difficulty: "Easy",
        flag: "assets/images/flags/portugal.png"
    },

    {
        country: "Brazil",
        capital: "Brasília",
        difficulty: "Easy",
        flag: "assets/images/flags/brazil.png"
    },

    {
        country: "Australia",
        capital: "Canberra",
        difficulty: "Easy",
        flag: "assets/images/flags/australia.png"
    },

    {
        country: "Sweden",
        capital: "Stockholm",
        difficulty: "Easy",
        flag: "assets/images/flags/sweden.png"
    },

    {
        country: "Spain",
        capital: "Madrid",
        difficulty: "Easy",
        flag: "assets/images/flags/spain.png"
    },

    {
        country: "Iceland",
        capital: "Reykjavik",
        difficulty: "Medium",
        flag: "assets/images/flags/iceland.png"
    },

    {
        country: "Indonesia",
        capital: "Jakarta",
        difficulty: "Medium",
        flag: "assets/images/flags/indonesia.png"
    },

    {
        country: "Philippines",
        capital: "Manila",
        difficulty: "Medium",
        flag: "assets/images/flags/philippines.png"
    },

    {
        country: "Belarus",
        capital: "Minsk",
        difficulty: "Medium",
        flag: "assets/images/flags/belarus.png"
    },

    {
        country: "Kenya",
        capital: "Nairobi",
        difficulty: "Medium",
        flag: "assets/images/flags/kenya.png"
    },

    {
        country: "India",
        capital: "New Delhi",
        difficulty: "Medium",
        flag: "assets/images/flags/india.png"
    },

    {
        country: "Haiti",
        capital: "Port-au-Prince",
        difficulty: "Medium",
        flag: "assets/images/flags/haiti.png"
    },

    {
        country: "Libya",
        capital: "Tripoli",
        difficulty: "Medium",
        flag: "assets/images/flags/libya.png"
    },

    {
        country: "Croatia",
        capital: "Zagreb",
        difficulty: "Medium",
        flag: "assets/images/flags/croatia.png"
    },

    {
        country: "Estonia",
        capital: "Tallinn",
        difficulty: "Medium",
        flag: "assets/images/flags/estonia.png"
    },

    {
        country: "United Arab Emirates",
        capital: "Abu Dhabi",
        difficulty: "Medium",
        flag: "assets/images/flags/uae.png"
    },

    {
        country: "Morocco",
        capital: "Rabat",
        difficulty: "Medium",
        flag: "assets/images/flags/morocco.png"
    },

    {
        country: "Slovakia",
        capital: "Bratislava",
        difficulty: "Medium",
        flag: "assets/images/flags/slovakia.png"
    },

    {
        country: "Liechtenstein",
        capital: "Vaduz",
        difficulty: "Medium",
        flag: "assets/images/flags/liechtenstein.png"
    },

    {
        country: "Liberia",
        capital: "Monrovia",
        difficulty: "Medium",
        flag: "assets/images/flags/liberia.png"
    },

    {
        country: "Thailand",
        capital: "Bangkok",
        difficulty: "Medium",
        flag: "assets/images/flags/thailand.png"
    },


    {
        country: "Nicaragua",
        capital: "Managua",
        difficulty: "Hard",
        flag: "assets/images/flags/nicaragua.png"
    },

    {
        country: "Slovenia",
        capital: "Ljubljana",
        difficulty: "Hard",
        flag: "assets/images/flags/slovenia.png"
    },

    {
        country: "Kosovo",
        capital: "Pristina",
        difficulty: "Hard",
        flag: "assets/images/flags/kosovo.png"
    },

    {
        country: "Sudan",
        capital: "Khartoum",
        difficulty: "Hard",
        flag: "assets/images/flags/sudan.png"
    },

    {
        country: "Seychelles",
        capital: "Victoria",
        difficulty: "Hard",
        flag: "assets/images/flags/seychelles.png"
    },

    {
        country: "Venezuela",
        capital: "Caracas",
        difficulty: "Hard",
        flag: "assets/images/flags/venezuela.png"
    },

    {
        country: "Uzbekistan",
        capital: "Tashkent",
        difficulty: "Hard",
        flag: "assets/images/flags/uzbekistan.png"
    },

    {
        country: "Suriname",
        capital: "Paramaribo",
        difficulty: "Hard",
        flag: "assets/images/flags/suriname.png"
    },

    {
        country: "Fiji",
        capital: "Suva",
        difficulty: "Hard",
        flag: "assets/images/flags/fiji.png"
    },

    {
        country: "Laos",
        capital: "Vientiane",
        difficulty: "Hard",
        flag: "assets/images/flags/laos.png"
    },

    {
        country: "Bahrain",
        capital: "Manama",
        difficulty: "Hard",
        flag: "assets/images/flags/bahrain.png"
    },

    {
        country: "Bangladesh",
        capital: "Dhaka",
        difficulty: "Hard",
        flag: "assets/images/flags/bangladesh.png"
    },

    {
        country: "Nigeria",
        capital: "Abuja",
        difficulty: "Hard",
        flag: "assets/images/flags/nigeria.png"
    },

    {
        country: "Uganda",
        capital: "Kampala",
        difficulty: "Hard",
        flag: "assets/images/flags/uganda.png"
    },

    {
        country: "Burkina Faso",
        capital: "Ouagadougou",
        difficulty: "Hard",
        flag: "assets/images/flags/burkina-faso.png"
    },

    {
        country: "Sri Lanka",
        capital: "Colombo",
        difficulty: "Hard",
        flag: "assets/images/flags/sri-lanka.png"
    },

]