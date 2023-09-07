/*
CATATAN PENTING:

Ubah setiap nama variable:
- var_tree_hobby
- var_hierarchy_hobby
- var_select_hobby
- var_data_hobby
- MyTree_hobby
- myTree_academic_hobby
- .hierarchy-container-hobby

Sesuai keperluan. Gunakan CTRL+H untuk "replace all", pastikan Match Case aktif.
*/



"use strict";

/*jshint esversion: 6 */
(function () {
  'use strict';
}());

let var_tree_hobby = d3.tree;
let var_hierarchy_hobby = d3.hierarchy;
let var_select_hobby = d3.select;
let var_data_hobby = {
  "name": "List of Hobbies",
  "children": [

    // =========================================================================================================== //

    {
      "name": "📕 1 General hobbies",
      "children": [
        {
          "name": "👉 1.1 General",
          "children": [
            { "name": "3D printing" },
            { "name": "Acroyoga" },
            { "name": "Acting" },
            { "name": "Animation" },
            { "name": "Anime" },
            { "name": "Aquascaping" },
            { "name": "Art" },
            { "name": "Astrology" },
            { "name": "Astronomy" },
            { "name": "Babysitting" },
            { "name": "Baking" },
            { "name": "Barbershop Music" },
            { "name": "Bartending" },
            { "name": "Baton twirling" },
            { "name": "Beatboxing" },
            { "name": "Beer tasting" },
            { "name": "Bell ringing" },
            { "name": "Binge watching" },
            { "name": "Blacksmith" },
            { "name": "Blogging" },
            { "name": "Board/tabletop games" },
            { "name": "Book discussion clubs" },
            { "name": "Book restoration" },
            { "name": "Bowling" },
            { "name": "Brazilian jiu-jitsu" },
            { "name": "Breadmaking" },
            { "name": "Building" },
            { "name": "Bullet journaling" },
            { "name": "Butchering" },
            { "name": "Calligraphy" },
            { "name": "Candle making" },
            { "name": "Candy making" },
            { "name": "Car spotting" },
            { "name": "Car fixing & building" },
            { "name": "Card games" },
            { "name": "Cardistry" },
            { "name": "Ceramics" },
            { "name": "Chatting" },
            { "name": "Cheesemaking" },
            { "name": "Chess" },
            { "name": "Cleaning" },
            { "name": "Clothesmaking" },
            { "name": "Coffee roasting" },
            { "name": "Collecting" },
            { "name": "Coloring" },
            { "name": "Communication" },
            { "name": "Community activism" },
            { "name": "Computer programming" },
            { "name": "Confectionery" },
            { "name": "Conlanging" },
            { "name": "Construction" },
            { "name": "Cooking" },
            { "name": "Cosplaying" },
            { "name": "Couponing" },
            { "name": "Craft" },
            { "name": "Creative writing" },
            { "name": "Crocheting" },
            { "name": "Cross-stitch" },
            { "name": "Crossword puzzles" },
            { "name": "Cryptography" },
            { "name": "Cue sports" },
            { "name": "Dance" },
            { "name": "Decorating" },
            { "name": "Digital arts" },
            { "name": "Dining" },
            { "name": "Diorama" },
            { "name": "Distro Hopping" },
            { "name": "Diving" },
            { "name": "Djembe" },
            { "name": "DJing" },
            { "name": "Do it yourself" },
            { "name": "Drama" },
            { "name": "Drawing" },
            { "name": "Drink mixing" },
            { "name": "Editing" },
            { "name": "Electronic games" },
            { "name": "Electronics" },
            { "name": "Embroidery" },
            { "name": "Engraving" },
            { "name": "Entertaining" },
            { "name": "Everyday carry" },
            { "name": "Experimenting" },
            { "name": "Fantasy sports" },
            { "name": "Fashion" },
            { "name": "Fashion design" },
            { "name": "Feng shui decorating" },
            { "name": "Filmmaking" },
            { "name": "Fingerpainting" },
            { "name": "Fishfarming" },
            { "name": "Fishkeeping" },
            { "name": "Flower arranging" },
            { "name": "Fly tying" },
            { "name": "Foreign language learning" },
            { "name": "Furniture building" },
            { "name": "Gaming (tabletop games, role-playing games, Electronic games)" },
            { "name": "Genealogy" },
            { "name": "Gingerbread house making" },
            { "name": "Giving advice" },
            { "name": "Glassblowing" },
            { "name": "Gardening" },
            { "name": "Gongfu tea" },
            { "name": "Graphic design" },
            { "name": "Gunsmithing" },
            { "name": "Hacking" },
            { "name": "Hairstyle" },
            { "name": "Hardware" },
            { "name": "Herp keeping" },
            { "name": "Home improvement" },
            { "name": "Homebrewing" },
            { "name": "Houseplant care" },
            { "name": "Hula hooping" },
            { "name": "Hydroponics" },
            { "name": "Ice skating" },
            { "name": "Inventing" },
            { "name": "Jewelry making" },
            { "name": "Jigsaw puzzles" },
            { "name": "Journaling" },
            { "name": "Judo" },
            { "name": "Juggling" },
            { "name": "Karaoke" },
            { "name": "Karate" },
            { "name": "Kendama" },
            { "name": "Knife making" },
            { "name": "Knitting" },
            { "name": "Knot tying" },
            { "name": "Kombucha brewing" },
            { "name": "Kung fu" },
            { "name": "Lace making" },
            { "name": "Lapidary" },
            { "name": "Leather crafting" },
            { "name": "Lego building" },
            { "name": "Livestreaming" },
            { "name": "Listening to music" },
            { "name": "Listening to podcasts" },
            { "name": "Lock picking" },
            { "name": "Machining" },
            { "name": "Macrame" },
            { "name": "Magic" },
            { "name": "Makeup" },
            { "name": "Manga" },
            { "name": "Massaging" },
            { "name": "Mazes (indoor/outdoor)" },
            { "name": "Mechanics" },
            { "name": "Meditation" },
            { "name": "Memory training" },
            { "name": "Metalworking" },
            { "name": "Miniature art" },
            { "name": "Minimalism" },
            { "name": "Model building" },
            { "name": "Modeling" },
            { "name": "Model engineering" },
            { "name": "Music" },
            { "name": "Nail art" },
            { "name": "Needlepoint" },
            { "name": "Origami" },
            { "name": "Painting" },
            { "name": "Pen Spinning" },
            { "name": "Performance" },
            { "name": "Pet sitting" },
            { "name": "Philately" },
            { "name": "Photography" },
            { "name": "Pilates" },
            { "name": "Planning" },
            { "name": "Plastic art" },
            { "name": "Playing musical instruments" },
            { "name": "Poetry" },
            { "name": "Poi" },
            { "name": "Pole dancing" },
            { "name": "Postcrossing" },
            { "name": "Pottery" },
            { "name": "Practical jokes" },
            { "name": "Pressed flower craft" },
            { "name": "Proofreading and editing" },
            { "name": "Proverbs" },
            { "name": "Public speaking" },
            { "name": "Puppetry" },
            { "name": "Puzzles" },
            { "name": "Pyrography" },
            { "name": "Quilling" },
            { "name": "Quilting" },
            { "name": "Quizzes" },
            { "name": "Radio-controlled model playing" },
            { "name": "Rail transport modeling" },
            { "name": "Rapping" },
            { "name": "Reading" },
            { "name": "Recipe creation" },
            { "name": "Refinishing" },
            { "name": "Reiki" },
            { "name": "Reviewing Gadgets" },
            { "name": "Robot combat" },
            { "name": "Rubik's Cube" },
            { "name": "Scrapbooking" },
            { "name": "Scuba Diving" },
            { "name": "Sculpting" },
            { "name": "Sewing" },
            { "name": "Shoemaking" },
            { "name": "Singing" },
            { "name": "Sketching" },
            { "name": "Skipping rope" },
            { "name": "Slot car" },
            { "name": "Soapmaking" },
            { "name": "Social media" },
            { "name": "Spreadsheets" },
            { "name": "Stamp collecting" },
            { "name": "Stand-up comedy" },
            { "name": "Storytelling" },
            { "name": "Stretching" },
            { "name": "Stripping" },
            { "name": "Sudoku" },
            { "name": "Talking" },
            { "name": "Taekwondo" },
            { "name": "Tapestry" },
            { "name": "Tarot" },
            { "name": "Tatebanko or diorama" },
            { "name": "Tattooing" },
            { "name": "Taxidermy" },
            { "name": "Telling jokes" },
            { "name": "Thrifting" },
            { "name": "Upcycling" },
            { "name": "Video editing" },
            { "name": "Video game developing" },
            { "name": "Video gaming" },
            { "name": "Video making" },
            { "name": "VR Gaming" },
            { "name": "Wargaming" },
            { "name": "Watch making" },
            { "name": "Watching documentaries" },
            { "name": "Watching movies" },
            { "name": "Watching television" },
            { "name": "Wax sealing" },
            { "name": "Waxing" },
            { "name": "Weaving" },
            { "name": "Webtooning" },
            { "name": "Weight training" },
            { "name": "Welding" },
            { "name": "Whittling" },
            { "name": "Wikipedia editing" },
            { "name": "Wine tasting" },
            { "name": "Winemaking" },
            { "name": "Witchcraft" },
            { "name": "Wood carving" },
            { "name": "Woodworking" },
            { "name": "Word searches" },
            { "name": "Worldbuilding" },
            { "name": "Wikipedia racing/Wikiracing" },
            { "name": "Writing" },
            { "name": "Writing music" },
            { "name": "Yo-yoing" },
            { "name": "Yoga" },
            { "name": "Zumba" },
          ]
        },
        {
          "name": "👉 1.2 Outdoors and sports",
          "children": [
            { "name": "Air sports" },
            { "name": "Airsoft" },
            { "name": "Amateur geology" },
            { "name": "Amusement park visiting" },
            { "name": "Archery" },
            { "name": "Auto detailing" },
            { "name": "Automobilism" },
            { "name": "Astronomy" },
            { "name": "Backpacking" },
            { "name": "Badminton" },
            { "name": "BASE jumping" },
            { "name": "Baseball" },
            { "name": "Basketball" },
            { "name": "Beachcombing" },
            { "name": "Beekeeping" },
            { "name": "Birdwatching" },
            { "name": "Blacksmithing" },
            { "name": "BMX" },
            { "name": "Board sports" },
            { "name": "Bodybuilding" },
            { "name": "Bus riding" },
            { "name": "Camping" },
            { "name": "Canoeing" },
            { "name": "Canyoning" },
            { "name": "Car riding" },
            { "name": "Car tuning" },
            { "name": "Caving" },
            { "name": "City trip" },
            { "name": "Climbing" },
            { "name": "Composting" },
            { "name": "Croquet" },
            { "name": "Cycling" },
            { "name": "Dairy Farming" },
            { "name": "Dandyism" },
            { "name": "Darts" },
            { "name": "Dodgeball" },
            { "name": "Dog training" },
            { "name": "Dog walking" },
            { "name": "Dowsing" },
            { "name": "Driving" },
            { "name": "Farming" },
            { "name": "Farming (Animal)" },
            { "name": "Fishing" },
            { "name": "Flag football" },
            { "name": "Flower growing" },
            { "name": "Flying" },
            { "name": "Flying disc" },
            { "name": "Flying model planes" },
            { "name": "Foraging" },
            { "name": "Fossicking" },
            { "name": "Freestyle football" },
            { "name": "Fruit picking" },
            { "name": "Gardening" },
            { "name": "Geocaching" },
            { "name": "Ghost hunting" },
            { "name": "Gold prospecting" },
            { "name": "Graffiti" },
            { "name": "Groundhopping" },
            { "name": "Guerrilla gardening" },
            { "name": "Gymnastics" },
            { "name": "Handball" },
            { "name": "Herbalism" },
            { "name": "Herping" },
            { "name": "High-power rocketry" },
            { "name": "Hiking" },
            { "name": "Hobby horsing" },
            { "name": "Hobby tunneling" },
            { "name": "Hooping" },
            { "name": "Horseback riding" },
            { "name": "Hunting" },
            { "name": "Inline skating" },
            { "name": "Jogging" },
            { "name": "Jumping rope" },
            { "name": "Karting" },
            { "name": "Kayaking" },
            { "name": "Kite flying" },
            { "name": "Kitesurfing" },
            { "name": "Lacrosse" },
            { "name": "LARPing" },
            { "name": "Letterboxing" },
            { "name": "Lomography" },
            { "name": "Longboarding" },
            { "name": "Martial arts" },
            { "name": "Metal detecting" },
            { "name": "Motorcycling" },
            { "name": "Meteorology" },
            { "name": "Motor sports" },
            { "name": "Mountain biking" },
            { "name": "Mountaineering" },
            { "name": "Museum visiting" },
            { "name": "Mushroom hunting/mycology" },
            { "name": "Netball" },
            { "name": "Noodling" },
            { "name": "Nordic skating" },
            { "name": "Orienteering" },
            { "name": "Paintball" },
            { "name": "Paragliding" },
            { "name": "Parkour" },
            { "name": "Photography" },
            { "name": "Pickleball" },
            { "name": "Picnicking" },
            { "name": "Podcast hosting" },
            { "name": "Polo" },
            { "name": "Powerlifting" },
            { "name": "Public transport riding" },
            { "name": "Qigong" },
            { "name": "Radio-controlled model playing" },
            { "name": "Rafting" },
            { "name": "Railway journeys" },
            { "name": "Railway modelling" },
            { "name": "Rappelling" },
            { "name": "Renaissance fair" },
            { "name": "Renovating" },
            { "name": "Road biking" },
            { "name": "Rock climbing" },
            { "name": "Rock painting" },
            { "name": "Roller skating" },
            { "name": "Rugby" },
            { "name": "Running" },
            { "name": "Safari" },
            { "name": "Sailing" },
            { "name": "Sand art" },
            { "name": "Scouting" },
            { "name": "Scuba diving" },
            { "name": "Sculling or rowing" },
            { "name": "Shooting" },
            { "name": "Shopping" },
            { "name": "Shuffleboard" },
            { "name": "Skateboarding" },
            { "name": "Skiing" },
            { "name": "Skimboarding" },
            { "name": "Skydiving" },
            { "name": "Slacklining" },
            { "name": "Sledding" },
            { "name": "Snorkeling" },
            { "name": "Snowboarding" },
            { "name": "Snowmobiling" },
            { "name": "Snowshoeing" },
            { "name": "Soccer" },
            { "name": "Stone skipping" },
            { "name": "Storm chasing" },
            { "name": "Sun bathing" },
            { "name": "Surfing" },
            { "name": "Survivalism" },
            { "name": "Swimming" },
            { "name": "Table tennis playing" },
            { "name": "Taekwondo" },
            { "name": "Tai chi" },
            { "name": "Tennis" },
            { "name": "Thru-hiking" },
            { "name": "Topiary" },
            { "name": "Tourism" },
            { "name": "Trade fair visiting" },
            { "name": "Travel" },
            { "name": "Unicycling" },
            { "name": "Urban exploration" },
            { "name": "Vacation" },
            { "name": "Vegetable farming" },
            { "name": "Vehicle restoration" },
            { "name": "Videography" },
            { "name": "Volleyball" },
            { "name": "Volunteering" },
            { "name": "Walking" },
            { "name": "Water sports" },
            { "name": "Zoo visiting" },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "📒 2 Educational hobbies",
      "children": [
        {
          "name": "👉 2.1 Educational",
          "children": [
            { "name": "Archaeology" },
            { "name": "Astronomy" },
            { "name": "Animation" },
            { "name": "Aerospace" },
            { "name": "Biology" },
            { "name": "Botany" },
            { "name": "Business" },
            { "name": "Chemistry" },
            { "name": "English" },
            { "name": "Entrepreneurship" },
            { "name": "Geography" },
            { "name": "History" },
            { "name": "Linguistics" },
            { "name": "Literature" },
            { "name": "Mathematics" },
            { "name": "Medical science" },
            { "name": "Microbiology" },
            { "name": "Mycology" },
            { "name": "Neuroscience" },
            { "name": "Philosophy" },
            { "name": "Physics" },
            { "name": "Psychology" },
            { "name": "Railway studies" },
            { "name": "Research" },
            { "name": "Science and technology studies" },
            { "name": "Social studies" },
            { "name": "Sociology" },
            { "name": "Sports science" },
            { "name": "Story writing" },
            { "name": "Life science" },
            { "name": "Teaching" },
            { "name": "Web design" },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "📗 3 Collection hobbies",
      "children": [
        {
          "name": "👉 3.1 Indoors",
          "children": [
            { "name": "Action figure" },
            { "name": "Antiquing" },
            { "name": "Ant-keeping" },
            { "name": "Art collecting" },
            { "name": "Book collecting" },
            { "name": "Button collecting" },
            { "name": "Cartophily (card collecting)" },
            { "name": "Coin collecting" },
            { "name": "Comic book collecting" },
            { "name": "Compact discs" },
            { "name": "Crystals" },
            { "name": "Deltiology (postcard collecting)" },
            { "name": "Die-cast toy" },
            { "name": "Digital hoarding" },
            { "name": "Dolls" },
            { "name": "Element collecting" },
            { "name": "Ephemera collecting" },
            { "name": "Films" },
            { "name": "Fingerprint collecting" },
            { "name": "Fusilately (phonecard collecting)" },
            { "name": "Knife collecting" },
            { "name": "Lapel pin" },
            { "name": "Lotology (lottery ticket collecting)" },
            { "name": "Movie memorabilia collecting" },
            { "name": "Perfume" },
            { "name": "Philately" },
            { "name": "Phillumeny" },
            { "name": "Radio-controlled model collecting" },
            { "name": "Rail transport modelling" },
            { "name": "Record collecting" },
            { "name": "Rock tumbling" },
            { "name": "Scutelliphily" },
            { "name": "Shoes" },
            { "name": "Slot car" },
            { "name": "Sports memorabilia" },
            { "name": "Stamp collecting" },
            { "name": "Stuffed toy collecting" },
            { "name": "Tea bag collecting" },
            { "name": "Ticket collecting" },
            { "name": "Transit map collecting" },
            { "name": "Video game collecting" },
            { "name": "Vintage cars" },
            { "name": "Vintage clothing" },
            { "name": "Vinyl Records" },
            { "name": "Wikipedia editing" },
          ]
        },
        {
          "name": "👉 3.2 Outdoors",
          "children": [
            { "name": "Antiquities" },
            { "name": "Auto audiophilia" },
            { "name": "Flower collecting and pressing" },
            { "name": "Fossil hunting" },
            { "name": "Insect collecting" },
            { "name": "Leaves" },
            { "name": "Magnet fishing" },
            { "name": "Metal detecting" },
            { "name": "Mineral collecting" },
            { "name": "Rock balancing" },
            { "name": "Sea glass collecting" },
            { "name": "Seashell collecting" },
            { "name": "Stone collecting" },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "📘 4 Competitive hobbies",
      "children": [
        {
          "name": "👉 4.1 Indoors",
          "children": [
            { "name": "Air hockey" },
            { "name": "Animal fancy" },
            { "name": "Axe throwing" },
            { "name": "Backgammon" },
            { "name": "Badminton" },
            { "name": "Baking" },
            { "name": "Ballet dancing" },
            { "name": "Ballroom dancing" },
            { "name": "Baton twirling" },
            { "name": "Beauty pageants" },
            { "name": "Billiards" },
            { "name": "Book folding" },
            { "name": "Bowling" },
            { "name": "Boxing" },
            { "name": "Cooking" },
            { "name": "Bridge" },
            { "name": "Checkers (draughts)" },
            { "name": "Cheerleading" },
            { "name": "Chess" },
            { "name": "Color guard" },
            { "name": "Cribbage" },
            { "name": "Curling" },
            { "name": "Dancing" },
            { "name": "Darts" },
            { "name": "Debate" },
            { "name": "Dominoes" },
            { "name": "Eating" },
            { "name": "Esports" },
            { "name": "Fencing" },
            { "name": "Figure Skating" },
            { "name": "Go" },
            { "name": "Gymnastics" },
            { "name": "Ice hockey" },
            { "name": "Ice skating" },
            { "name": "Judo" },
            { "name": "Jujitsu" },
            { "name": "Kabaddi" },
            { "name": "Knowledge/word games" },
            { "name": "Laser tag" },
            { "name": "Magic" },
            { "name": "Mahjong" },
            { "name": "Marbles" },
            { "name": "Martial arts" },
            { "name": "Model racing" },
            { "name": "Model United Nations" },
            { "name": "Poker" },
            { "name": "Pole dancing" },
            { "name": "Pool" },
            { "name": "Radio-controlled model playing" },
            { "name": "Role-playing games" },
            { "name": "Rughooking" },
            { "name": "Shogi" },
            { "name": "Slot car racing" },
            { "name": "Speedcubing" },
            { "name": "Sport stacking" },
            { "name": "Table football" },
            { "name": "Table tennis" },
            { "name": "Volleyball" },
            { "name": "Video gaming" },
            { "name": "VR Gaming" },
            { "name": "Weightlifting" },
            { "name": "Wrestling" },
          ]
        },
        {
          "name": "👉 4.2 Outdoors",
          "children": [
            { "name": "Airsoft" },
            { "name": "Archery" },
            { "name": "Association football" },
            { "name": "Australian rules football" },
            { "name": "Auto racing" },
            { "name": "Baseball" },
            { "name": "Beach volleyball" },
            { "name": "Breakdancing" },
            { "name": "Climbing" },
            { "name": "Cornhole" },
            { "name": "Cricket" },
            { "name": "Croquet" },
            { "name": "Cycling" },
            { "name": "Disc golf" },
            { "name": "Dog sport" },
            { "name": "Equestrianism" },
            { "name": "Exhibition drill" },
            { "name": "Field hockey" },
            { "name": "Figure skating" },
            { "name": "Fishing" },
            { "name": "Fitness" },
            { "name": "Footbag" },
            { "name": "Frisbee" },
            { "name": "Golfing" },
            { "name": "Handball" },
            { "name": "Horseback riding" },
            { "name": "Horsemanship" },
            { "name": "Horseshoes" },
            { "name": "Iceboat racing" },
            { "name": "Jukskei" },
            { "name": "Kart racing" },
            { "name": "Knife throwing" },
            { "name": "Lacrosse" },
            { "name": "Longboarding" },
            { "name": "Long-distance running" },
            { "name": "Marching band" },
            { "name": "Mini Golf" },
            { "name": "Model aircraft" },
            { "name": "Orienteering" },
            { "name": "Pickleball" },
            { "name": "Powerboat racing" },
            { "name": "Quidditch" },
            { "name": "Race walking" },
            { "name": "Racquetball" },
            { "name": "Radio-controlled car racing" },
            { "name": "Radio-controlled model playing" },
            { "name": "Roller derby" },
            { "name": "Rugby league football" },
            { "name": "Sculling or rowing" },
            { "name": "Shooting sports" },
            { "name": "Skateboarding" },
            { "name": "Skiing" },
            { "name": "Sled dog racing" },
            { "name": "Softball" },
            { "name": "Speed skating" },
            { "name": "Squash" },
            { "name": "Surfing" },
            { "name": "Swimming" },
            { "name": "Table tennis" },
            { "name": "Tennis" },
            { "name": "Tennis polo" },
            { "name": "Tether car" },
            { "name": "Tour skating" },
            { "name": "Tourism" },
            { "name": "Trapshooting" },
            { "name": "Triathlon" },
            { "name": "Ultimate frisbee" },
            { "name": "Volleyball" },
            { "name": "Water polo" },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "📙 5 Observation hobbies",
      "children": [
        {
          "name": "👉 5.1 Indoors",
          "children": [
            { "name": "Audiophile" },
            { "name": "Fishkeeping" },
            { "name": "Learning" },
            { "name": "Meditation" },
            { "name": "Microscopy" },
            { "name": "Reading" },
            { "name": "Research" },
            { "name": "Shortwave listening" },
          ]
        },
        {
          "name": "👉 5.2 Outdoors",
          "children": [
            { "name": "Aircraft spotting" },
            { "name": "Amateur astronomy" },
            { "name": "Benchmarking" },
            { "name": "Birdwatching" },
            { "name": "Bus spotting" },
            { "name": "Butterfly watching" },
            { "name": "Geocaching" },
            { "name": "Gongoozling" },
            { "name": "Herping" },
            { "name": "Hiking/backpacking" },
            { "name": "Meteorology" },
            { "name": "People-watching" },
            { "name": "Photography" },
            { "name": "Satellite watching" },
            { "name": "Trainspotting" },
            { "name": "Whale watching" },
          ]
        },
      ]
    },

    // =========================================================================================================== //

  ]
};

class MyTree_hobby {
  constructor() {
    this.connector = function (d) {
      //curved 
      /*return "M" + d.y + "," + d.x +
         "C" + (d.y + d.parent.y) / 2 + "," + d.x +
         " " + (d.y + d.parent.y) / 2 + "," + d.parent.x +
         " " + d.parent.y + "," + d.parent.x;*/
      //straight
      return "M" + d.parent.y + "," + d.parent.x
        + "V" + d.x + "H" + d.y;
    };
    this.collapse = (d) => {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(this.collapse);
        d.children = null;
      }
    };
    this.click = (d) => {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      }
      else {
        d.children = d._children;
        d._children = null;
      }
      this.update(d);
    };
    this.update = (source) => {
      this.width = 800;
      // Compute the new tree layout.
      let nodes = this.var_tree_hobby(this.root);
      let nodesSort = [];
      nodes.eachBefore(function (n) {
        nodesSort.push(n);
      });
      this.height = Math.max(500, nodesSort.length * this.barHeight + this.margin.top + this.margin.bottom);
      let links = nodesSort.slice(1);
      // Compute the "layout".
      nodesSort.forEach((n, i) => {
        n.x = i * this.barHeight;
      });
      d3.select('svg').transition()
        .duration(this.duration)
        .attr("height", this.height);
      // Update the nodes…
      let node = this.svg.selectAll('g.node')
        .data(nodesSort, function (d) {
          return d.id || (d.id = ++this.i);
        });
      // Enter any new nodes at the parent's previous position.
      var nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr('transform', function () {
          return 'translate(' + source.y0 + ',' + source.x0 + ')';
        })
        .on('click', this.click);
      nodeEnter.append('circle')
        .attr('r', 1e-6)
        .style('fill', function (d) {
          return d._children ? 'lightsteelblue' : '#fff';
        });
      nodeEnter.append('text')
        .attr('x', function (d) {
          return d.children || d._children ? 10 : 10;
        })
        .attr('dy', '.35em')
        .attr('text-anchor', function (d) {
          return d.children || d._children ? 'start' : 'start';
        })
        .text(function (d) {
          if (d.data.name.length > 100) { // <--⚠️⚠️⚠️Jumlah karakter sebelum di collapse (...)⚠️⚠️⚠️
            return d.data.name.substring(0, 100) + '...'; // <--⚠️⚠️⚠️Jumlah karakter sebelum di collapse (...)⚠️⚠️⚠️
          }
          else {
            return d.data.name;
          }
        })
        .style('fill-opacity', 1e-6);
      nodeEnter.append('svg:title').text(function (d) {
        return d.data.name;
      });
      // Transition nodes to their new position.
      let nodeUpdate = node.merge(nodeEnter)
        .transition()
        .duration(this.duration);
      nodeUpdate
        .attr('transform', function (d) {
          return 'translate(' + d.y + ',' + d.x + ')';
        });
      nodeUpdate.select('circle')
        .attr('r', 4.5)
        .style('fill', function (d) {
          return d._children ? 'lightsteelblue' : '#fff';
        });
      nodeUpdate.select('text')
        .style('fill-opacity', 1);
      // Transition exiting nodes to the parent's new position (and remove the nodes)
      var nodeExit = node.exit().transition()
        .duration(this.duration);
      nodeExit
        .attr('transform', function (d) {
          return 'translate(' + source.y + ',' + source.x + ')';
        })
        .remove();
      nodeExit.select('circle')
        .attr('r', 1e-6);
      nodeExit.select('text')
        .style('fill-opacity', 1e-6);
      // Update the links…
      var link = this.svg.selectAll('path.link')
        .data(links, function (d) {
          // return d.target.id;
          var id = d.id + '->' + d.parent.id;
          return id;
        });
      // Enter any new links at the parent's previous position.
      let linkEnter = link.enter().insert('path', 'g')
        .attr('class', 'link')
        .attr('d', (d) => {
          var o = { x: source.x0, y: source.y0, parent: { x: source.x0, y: source.y0 } };
          return this.connector(o);
        });
      // Transition links to their new position.
      link.merge(linkEnter).transition()
        .duration(this.duration)
        .attr('d', this.connector);
      // // Transition exiting nodes to the parent's new position.
      link.exit().transition()
        .duration(this.duration)
        .attr('d', (d) => {
          var o = { x: source.x, y: source.y, parent: { x: source.x, y: source.y } };
          return this.connector(o);
        })
        .remove();
      // Stash the old positions for transition.
      nodesSort.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    };
  }
  $onInit() {
    this.margin = { top: 20, right: 10, bottom: 20, left: 10 };
    this.width = 1400 - this.margin.right - this.margin.left;
    this.height = 800 - this.margin.top - this.margin.bottom;
    this.barHeight = 20;
    this.barWidth = this.width * .8;
    this.i = 0;
    this.duration = 750;
    this.var_tree_hobby = var_tree_hobby().size([this.width, this.height]);
    // this.tree = tree().nodeSize([0, 30]);
    this.var_tree_hobby = var_tree_hobby().nodeSize([0, 30]);
    this.root = this.var_tree_hobby(var_hierarchy_hobby(var_data_hobby));
    this.root.each((d) => {
      d.name = d.id; //transferring name to a name variable
      d.id = this.i; //Assigning numerical Ids
      this.i++;
    });
    this.root.x0 = this.root.x;
    this.root.y0 = this.root.y;
    this.svg = var_select_hobby('.hierarchy-container-hobby').append('svg')
      .attr('width', this.width + this.margin.right + this.margin.left)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    // this.root.children.forEach(this.collapse);
    this.update(this.root);
  }
}
;
let myTree_academic_hobby = new MyTree_hobby();
myTree_academic_hobby.$onInit();