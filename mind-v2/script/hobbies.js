const { ref } = Vue;

const app = Vue.createApp({
  setup() {
    const filter = ref("");
    const filterRef = ref(null);

    // 1️⃣ ATUR NODE YANG TERBUKA PERTAMA KALI
    let nilai = ref([
      "List of Hobbies",
      "1 General hobbies",
      "2 Educational hobbies",
      "3 Collection hobbies",
      "4 Competitive hobbies",
      "5 Observation hobbies",
    ])

    // 2️⃣ ATUR DEFAULT NODE YANG TERBUKA (SAMA KAYA POINT 1 DI ATAS)
    function defaultNode(nilai) {
      let node = [
        "List of Hobbies",
        "1 General hobbies",
        "2 Educational hobbies",
        "3 Collection hobbies",
        "4 Competitive hobbies",
        "5 Observation hobbies",
      ]
      setTimeout(() => { nilai.tree.collapseAll() }, 100);                // tutup seluruh node
      setTimeout(() => { nilai.tree.setExpanded(node[0], true) }, 100);   // true/buka node "Root"
      setTimeout(() => { nilai.tree.setExpanded(node[1], true) }, 100);   // true/buka node "1 General hobbies"
      setTimeout(() => { nilai.tree.setExpanded(node[2], true) }, 100);   // true/buka node "2 Educational hobbies"
      setTimeout(() => { nilai.tree.setExpanded(node[3], true) }, 100);   // true/buka node "3 Collection hobbies"
      setTimeout(() => { nilai.tree.setExpanded(node[4], true) }, 100);   // true/buka node "4 Competitive hobbies"
      setTimeout(() => { nilai.tree.setExpanded(node[5], true) }, 100);   // true/buka node "5 Observation hobbies"
    }

    // 3️⃣ JIKA DIPERLUKAN GUNAKAN TOGGLE UNTUK NODE TERTENTU
    function toggleNode(nilai) {
      let node = "List of Hobbies"
      nilai.tree.isExpanded(node) === true ? nilai.tree.setExpanded(node, false) : nilai.tree.setExpanded(node, true)
    }

    return {
      filter,
      filterRef,
      defaultNode,
      toggleNode,

      // ⚠️ NODE YANG AKTIF (SELECTED) PERTAMA KALI
      selected: ref("List of Hobbies"),

      // ⚠️ NODE YANG TERBUKA (EXPANDED) PERTAMA KALI
      expanded: nilai,

      simple: [
        {
          label: "List of Hobbies",
          avatar: "../assets/hobbies/hobbies-headline.png",
          children: [

            // =========================================================================================================== //

            {
              label: "1 General hobbies",
              avatar: "../assets/hobbies/hobbies-1-general.png",
              children: [
                {
                  label: "1.1 General",
                  icon: "feed",
                  children: [
                    { label: "3D printing" },
                    { label: "Acroyoga" },
                    { label: "Acting" },
                    { label: "Animation" },
                    { label: "Anime" },
                    { label: "Aquascaping" },
                    { label: "Art" },
                    { label: "Astrology" },
                    { label: "Astronomy" },
                    { label: "Babysitting" },
                    { label: "Baking" },
                    { label: "Barbershop Music" },
                    { label: "Bartending" },
                    { label: "Baton twirling" },
                    { label: "Beatboxing" },
                    { label: "Beer tasting" },
                    { label: "Bell ringing" },
                    { label: "Binge watching" },
                    { label: "Blacksmith" },
                    { label: "Blogging" },
                    { label: "Board/tabletop games" },
                    { label: "Book discussion clubs" },
                    { label: "Book restoration" },
                    { label: "Bowling" },
                    { label: "Brazilian jiu-jitsu" },
                    { label: "Breadmaking" },
                    { label: "Building" },
                    { label: "Bullet journaling" },
                    { label: "Butchering" },
                    { label: "Calligraphy" },
                    { label: "Candle making" },
                    { label: "Candy making" },
                    { label: "Car spotting" },
                    { label: "Car fixing & building" },
                    { label: "Card games" },
                    { label: "Cardistry" },
                    { label: "Ceramics" },
                    { label: "Chatting" },
                    { label: "Cheesemaking" },
                    { label: "Chess" },
                    { label: "Cleaning" },
                    { label: "Clothesmaking" },
                    { label: "Coffee roasting" },
                    { label: "Collecting" },
                    { label: "Coloring" },
                    { label: "Communication" },
                    { label: "Community activism" },
                    { label: "Computer programming" },
                    { label: "Confectionery" },
                    { label: "Conlanging" },
                    { label: "Construction" },
                    { label: "Cooking" },
                    { label: "Cosplaying" },
                    { label: "Couponing" },
                    { label: "Craft" },
                    { label: "Creative writing" },
                    { label: "Crocheting" },
                    { label: "Cross-stitch" },
                    { label: "Crossword puzzles" },
                    { label: "Cryptography" },
                    { label: "Cue sports" },
                    { label: "Dance" },
                    { label: "Decorating" },
                    { label: "Digital arts" },
                    { label: "Dining" },
                    { label: "Diorama" },
                    { label: "Distro Hopping" },
                    { label: "Diving" },
                    { label: "Djembe" },
                    { label: "DJing" },
                    { label: "Do it yourself" },
                    { label: "Drama" },
                    { label: "Drawing" },
                    { label: "Drink mixing" },
                    { label: "Editing" },
                    { label: "Electronic games" },
                    { label: "Electronics" },
                    { label: "Embroidery" },
                    { label: "Engraving" },
                    { label: "Entertaining" },
                    { label: "Everyday carry" },
                    { label: "Experimenting" },
                    { label: "Fantasy sports" },
                    { label: "Fashion" },
                    { label: "Fashion design" },
                    { label: "Feng shui decorating" },
                    { label: "Filmmaking" },
                    { label: "Fingerpainting" },
                    { label: "Fishfarming" },
                    { label: "Fishkeeping" },
                    { label: "Flower arranging" },
                    { label: "Fly tying" },
                    { label: "Foreign language learning" },
                    { label: "Furniture building" },
                    { label: "Gaming (tabletop games, role-playing games, Electronic games)" },
                    { label: "Genealogy" },
                    { label: "Gingerbread house making" },
                    { label: "Giving advice" },
                    { label: "Glassblowing" },
                    { label: "Gardening" },
                    { label: "Gongfu tea" },
                    { label: "Graphic design" },
                    { label: "Gunsmithing" },
                    { label: "Hacking" },
                    { label: "Hairstyle" },
                    { label: "Hardware" },
                    { label: "Herp keeping" },
                    { label: "Home improvement" },
                    { label: "Homebrewing" },
                    { label: "Houseplant care" },
                    { label: "Hula hooping" },
                    { label: "Hydroponics" },
                    { label: "Ice skating" },
                    { label: "Inventing" },
                    { label: "Jewelry making" },
                    { label: "Jigsaw puzzles" },
                    { label: "Journaling" },
                    { label: "Judo" },
                    { label: "Juggling" },
                    { label: "Karaoke" },
                    { label: "Karate" },
                    { label: "Kendama" },
                    { label: "Knife making" },
                    { label: "Knitting" },
                    { label: "Knot tying" },
                    { label: "Kombucha brewing" },
                    { label: "Kung fu" },
                    { label: "Lace making" },
                    { label: "Lapidary" },
                    { label: "Leather crafting" },
                    { label: "Lego building" },
                    { label: "Livestreaming" },
                    { label: "Listening to music" },
                    { label: "Listening to podcasts" },
                    { label: "Lock picking" },
                    { label: "Machining" },
                    { label: "Macrame" },
                    { label: "Magic" },
                    { label: "Makeup" },
                    { label: "Manga" },
                    { label: "Massaging" },
                    { label: "Mazes (indoor/outdoor)" },
                    { label: "Mechanics" },
                    { label: "Meditation" },
                    { label: "Memory training" },
                    { label: "Metalworking" },
                    { label: "Miniature art" },
                    { label: "Minimalism" },
                    { label: "Model building" },
                    { label: "Modeling" },
                    { label: "Model engineering" },
                    { label: "Music" },
                    { label: "Nail art" },
                    { label: "Needlepoint" },
                    { label: "Origami" },
                    { label: "Painting" },
                    { label: "Pen Spinning" },
                    { label: "Performance" },
                    { label: "Pet sitting" },
                    { label: "Philately" },
                    { label: "Photography" },
                    { label: "Pilates" },
                    { label: "Planning" },
                    { label: "Plastic art" },
                    { label: "Playing musical instruments" },
                    { label: "Poetry" },
                    { label: "Poi" },
                    { label: "Pole dancing" },
                    { label: "Postcrossing" },
                    { label: "Pottery" },
                    { label: "Practical jokes" },
                    { label: "Pressed flower craft" },
                    { label: "Proofreading and editing" },
                    { label: "Proverbs" },
                    { label: "Public speaking" },
                    { label: "Puppetry" },
                    { label: "Puzzles" },
                    { label: "Pyrography" },
                    { label: "Quilling" },
                    { label: "Quilting" },
                    { label: "Quizzes" },
                    { label: "Radio-controlled model playing" },
                    { label: "Rail transport modeling" },
                    { label: "Rapping" },
                    { label: "Reading" },
                    { label: "Recipe creation" },
                    { label: "Refinishing" },
                    { label: "Reiki" },
                    { label: "Reviewing Gadgets" },
                    { label: "Robot combat" },
                    { label: "Rubik's Cube" },
                    { label: "Scrapbooking" },
                    { label: "Scuba Diving" },
                    { label: "Sculpting" },
                    { label: "Sewing" },
                    { label: "Shoemaking" },
                    { label: "Singing" },
                    { label: "Sketching" },
                    { label: "Skipping rope" },
                    { label: "Slot car" },
                    { label: "Soapmaking" },
                    { label: "Social media" },
                    { label: "Spreadsheets" },
                    { label: "Stamp collecting" },
                    { label: "Stand-up comedy" },
                    { label: "Storytelling" },
                    { label: "Stretching" },
                    { label: "Stripping" },
                    { label: "Sudoku" },
                    { label: "Talking" },
                    { label: "Taekwondo" },
                    { label: "Tapestry" },
                    { label: "Tarot" },
                    { label: "Tatebanko or diorama" },
                    { label: "Tattooing" },
                    { label: "Taxidermy" },
                    { label: "Telling jokes" },
                    { label: "Thrifting" },
                    { label: "Upcycling" },
                    { label: "Video editing" },
                    { label: "Video game developing" },
                    { label: "Video gaming" },
                    { label: "Video making" },
                    { label: "VR Gaming" },
                    { label: "Wargaming" },
                    { label: "Watch making" },
                    { label: "Watching documentaries" },
                    { label: "Watching movies" },
                    { label: "Watching television" },
                    { label: "Wax sealing" },
                    { label: "Waxing" },
                    { label: "Weaving" },
                    { label: "Webtooning" },
                    { label: "Weight training" },
                    { label: "Welding" },
                    { label: "Whittling" },
                    { label: "Wikipedia editing" },
                    { label: "Wine tasting" },
                    { label: "Winemaking" },
                    { label: "Witchcraft" },
                    { label: "Wood carving" },
                    { label: "Woodworking" },
                    { label: "Word searches" },
                    { label: "Worldbuilding" },
                    { label: "Wikipedia racing/Wikiracing" },
                    { label: "Writing" },
                    { label: "Writing music" },
                    { label: "Yo-yoing" },
                    { label: "Yoga" },
                    { label: "Zumba" },
                  ]
                },
                {
                  label: "1.2 Outdoors and sports",
                  icon: "feed",
                  children: [
                    { label: "Air sports" },
                    { label: "Airsoft" },
                    { label: "Amateur geology" },
                    { label: "Amusement park visiting" },
                    { label: "Archery" },
                    { label: "Auto detailing" },
                    { label: "Automobilism" },
                    { label: "Astronomy" },
                    { label: "Backpacking" },
                    { label: "Badminton" },
                    { label: "BASE jumping" },
                    { label: "Baseball" },
                    { label: "Basketball" },
                    { label: "Beachcombing" },
                    { label: "Beekeeping" },
                    { label: "Birdwatching" },
                    { label: "Blacksmithing" },
                    { label: "BMX" },
                    { label: "Board sports" },
                    { label: "Bodybuilding" },
                    { label: "Bus riding" },
                    { label: "Camping" },
                    { label: "Canoeing" },
                    { label: "Canyoning" },
                    { label: "Car riding" },
                    { label: "Car tuning" },
                    { label: "Caving" },
                    { label: "City trip" },
                    { label: "Climbing" },
                    { label: "Composting" },
                    { label: "Croquet" },
                    { label: "Cycling" },
                    { label: "Dairy Farming" },
                    { label: "Dandyism" },
                    { label: "Darts" },
                    { label: "Dodgeball" },
                    { label: "Dog training" },
                    { label: "Dog walking" },
                    { label: "Dowsing" },
                    { label: "Driving" },
                    { label: "Farming" },
                    { label: "Farming (Animal)" },
                    { label: "Fishing" },
                    { label: "Flag football" },
                    { label: "Flower growing" },
                    { label: "Flying" },
                    { label: "Flying disc" },
                    { label: "Flying model planes" },
                    { label: "Foraging" },
                    { label: "Fossicking" },
                    { label: "Freestyle football" },
                    { label: "Fruit picking" },
                    { label: "Gardening" },
                    { label: "Geocaching" },
                    { label: "Ghost hunting" },
                    { label: "Gold prospecting" },
                    { label: "Graffiti" },
                    { label: "Groundhopping" },
                    { label: "Guerrilla gardening" },
                    { label: "Gymnastics" },
                    { label: "Handball" },
                    { label: "Herbalism" },
                    { label: "Herping" },
                    { label: "High-power rocketry" },
                    { label: "Hiking" },
                    { label: "Hobby horsing" },
                    { label: "Hobby tunneling" },
                    { label: "Hooping" },
                    { label: "Horseback riding" },
                    { label: "Hunting" },
                    { label: "Inline skating" },
                    { label: "Jogging" },
                    { label: "Jumping rope" },
                    { label: "Karting" },
                    { label: "Kayaking" },
                    { label: "Kite flying" },
                    { label: "Kitesurfing" },
                    { label: "Lacrosse" },
                    { label: "LARPing" },
                    { label: "Letterboxing" },
                    { label: "Lomography" },
                    { label: "Longboarding" },
                    { label: "Martial arts" },
                    { label: "Metal detecting" },
                    { label: "Motorcycling" },
                    { label: "Meteorology" },
                    { label: "Motor sports" },
                    { label: "Mountain biking" },
                    { label: "Mountaineering" },
                    { label: "Museum visiting" },
                    { label: "Mushroom hunting/mycology" },
                    { label: "Netball" },
                    { label: "Noodling" },
                    { label: "Nordic skating" },
                    { label: "Orienteering" },
                    { label: "Paintball" },
                    { label: "Paragliding" },
                    { label: "Parkour" },
                    { label: "Photography" },
                    { label: "Pickleball" },
                    { label: "Picnicking" },
                    { label: "Podcast hosting" },
                    { label: "Polo" },
                    { label: "Powerlifting" },
                    { label: "Public transport riding" },
                    { label: "Qigong" },
                    { label: "Radio-controlled model playing" },
                    { label: "Rafting" },
                    { label: "Railway journeys" },
                    { label: "Railway modelling" },
                    { label: "Rappelling" },
                    { label: "Renaissance fair" },
                    { label: "Renovating" },
                    { label: "Road biking" },
                    { label: "Rock climbing" },
                    { label: "Rock painting" },
                    { label: "Roller skating" },
                    { label: "Rugby" },
                    { label: "Running" },
                    { label: "Safari" },
                    { label: "Sailing" },
                    { label: "Sand art" },
                    { label: "Scouting" },
                    { label: "Scuba diving" },
                    { label: "Sculling or rowing" },
                    { label: "Shooting" },
                    { label: "Shopping" },
                    { label: "Shuffleboard" },
                    { label: "Skateboarding" },
                    { label: "Skiing" },
                    { label: "Skimboarding" },
                    { label: "Skydiving" },
                    { label: "Slacklining" },
                    { label: "Sledding" },
                    { label: "Snorkeling" },
                    { label: "Snowboarding" },
                    { label: "Snowmobiling" },
                    { label: "Snowshoeing" },
                    { label: "Soccer" },
                    { label: "Stone skipping" },
                    { label: "Storm chasing" },
                    { label: "Sun bathing" },
                    { label: "Surfing" },
                    { label: "Survivalism" },
                    { label: "Swimming" },
                    { label: "Table tennis playing" },
                    { label: "Taekwondo" },
                    { label: "Tai chi" },
                    { label: "Tennis" },
                    { label: "Thru-hiking" },
                    { label: "Topiary" },
                    { label: "Tourism" },
                    { label: "Trade fair visiting" },
                    { label: "Travel" },
                    { label: "Unicycling" },
                    { label: "Urban exploration" },
                    { label: "Vacation" },
                    { label: "Vegetable farming" },
                    { label: "Vehicle restoration" },
                    { label: "Videography" },
                    { label: "Volleyball" },
                    { label: "Volunteering" },
                    { label: "Walking" },
                    { label: "Water sports" },
                    { label: "Zoo visiting" },
                  ]
                },
              ]
            },

            // =========================================================================================================== //

            {
              label: "2 Educational hobbies",
              avatar: "../assets/hobbies/hobbies-2-educational.png",
              children: [
                {
                  label: "2.1 Educational",
                  icon: "feed",
                  children: [
                    { label: "Archaeology" },
                    { label: "Astronomy" },
                    { label: "Animation" },
                    { label: "Aerospace" },
                    { label: "Biology" },
                    { label: "Botany" },
                    { label: "Business" },
                    { label: "Chemistry" },
                    { label: "English" },
                    { label: "Entrepreneurship" },
                    { label: "Geography" },
                    { label: "History" },
                    { label: "Linguistics" },
                    { label: "Literature" },
                    { label: "Mathematics" },
                    { label: "Medical science" },
                    { label: "Microbiology" },
                    { label: "Mycology" },
                    { label: "Neuroscience" },
                    { label: "Philosophy" },
                    { label: "Physics" },
                    { label: "Psychology" },
                    { label: "Railway studies" },
                    { label: "Research" },
                    { label: "Science and technology studies" },
                    { label: "Social studies" },
                    { label: "Sociology" },
                    { label: "Sports science" },
                    { label: "Story writing" },
                    { label: "Life science" },
                    { label: "Teaching" },
                    { label: "Web design" },
                  ]
                },
              ]
            },

            // =========================================================================================================== //

            {
              label: "3 Collection hobbies",
              avatar: "../assets/hobbies/hobbies-3-collection.png",
              children: [
                {
                  label: "3.1 Indoors",
                  icon: "feed",
                  children: [
                    { label: "Action figure" },
                    { label: "Antiquing" },
                    { label: "Ant-keeping" },
                    { label: "Art collecting" },
                    { label: "Book collecting" },
                    { label: "Button collecting" },
                    { label: "Cartophily (card collecting)" },
                    { label: "Coin collecting" },
                    { label: "Comic book collecting" },
                    { label: "Compact discs" },
                    { label: "Crystals" },
                    { label: "Deltiology (postcard collecting)" },
                    { label: "Die-cast toy" },
                    { label: "Digital hoarding" },
                    { label: "Dolls" },
                    { label: "Element collecting" },
                    { label: "Ephemera collecting" },
                    { label: "Films" },
                    { label: "Fingerprint collecting" },
                    { label: "Fusilately (phonecard collecting)" },
                    { label: "Knife collecting" },
                    { label: "Lapel pin" },
                    { label: "Lotology (lottery ticket collecting)" },
                    { label: "Movie memorabilia collecting" },
                    { label: "Perfume" },
                    { label: "Philately" },
                    { label: "Phillumeny" },
                    { label: "Radio-controlled model collecting" },
                    { label: "Rail transport modelling" },
                    { label: "Record collecting" },
                    { label: "Rock tumbling" },
                    { label: "Scutelliphily" },
                    { label: "Shoes" },
                    { label: "Slot car" },
                    { label: "Sports memorabilia" },
                    { label: "Stamp collecting" },
                    { label: "Stuffed toy collecting" },
                    { label: "Tea bag collecting" },
                    { label: "Ticket collecting" },
                    { label: "Transit map collecting" },
                    { label: "Video game collecting" },
                    { label: "Vintage cars" },
                    { label: "Vintage clothing" },
                    { label: "Vinyl Records" },
                    { label: "Wikipedia editing" },
                  ]
                },
                {
                  label: "3.2 Outdoors",
                  icon: "feed",
                  children: [
                    { label: "Antiquities" },
                    { label: "Auto audiophilia" },
                    { label: "Flower collecting and pressing" },
                    { label: "Fossil hunting" },
                    { label: "Insect collecting" },
                    { label: "Leaves" },
                    { label: "Magnet fishing" },
                    { label: "Metal detecting" },
                    { label: "Mineral collecting" },
                    { label: "Rock balancing" },
                    { label: "Sea glass collecting" },
                    { label: "Seashell collecting" },
                    { label: "Stone collecting" },
                  ]
                },
              ]
            },

            // =========================================================================================================== //

            {
              label: "4 Competitive hobbies",
              avatar: "../assets/hobbies/hobbies-4-competitive.png",
              children: [
                {
                  label: "4.1 Indoors",
                  icon: "feed",
                  children: [
                    { label: "Air hockey" },
                    { label: "Animal fancy" },
                    { label: "Axe throwing" },
                    { label: "Backgammon" },
                    { label: "Badminton" },
                    { label: "Baking" },
                    { label: "Ballet dancing" },
                    { label: "Ballroom dancing" },
                    { label: "Baton twirling" },
                    { label: "Beauty pageants" },
                    { label: "Billiards" },
                    { label: "Book folding" },
                    { label: "Bowling" },
                    { label: "Boxing" },
                    { label: "Cooking" },
                    { label: "Bridge" },
                    { label: "Checkers (draughts)" },
                    { label: "Cheerleading" },
                    { label: "Chess" },
                    { label: "Color guard" },
                    { label: "Cribbage" },
                    { label: "Curling" },
                    { label: "Dancing" },
                    { label: "Darts" },
                    { label: "Debate" },
                    { label: "Dominoes" },
                    { label: "Eating" },
                    { label: "Esports" },
                    { label: "Fencing" },
                    { label: "Figure Skating" },
                    { label: "Go" },
                    { label: "Gymnastics" },
                    { label: "Ice hockey" },
                    { label: "Ice skating" },
                    { label: "Judo" },
                    { label: "Jujitsu" },
                    { label: "Kabaddi" },
                    { label: "Knowledge/word games" },
                    { label: "Laser tag" },
                    { label: "Magic" },
                    { label: "Mahjong" },
                    { label: "Marbles" },
                    { label: "Martial arts" },
                    { label: "Model racing" },
                    { label: "Model United Nations" },
                    { label: "Poker" },
                    { label: "Pole dancing" },
                    { label: "Pool" },
                    { label: "Radio-controlled model playing" },
                    { label: "Role-playing games" },
                    { label: "Rughooking" },
                    { label: "Shogi" },
                    { label: "Slot car racing" },
                    { label: "Speedcubing" },
                    { label: "Sport stacking" },
                    { label: "Table football" },
                    { label: "Table tennis" },
                    { label: "Volleyball" },
                    { label: "Video gaming" },
                    { label: "VR Gaming" },
                    { label: "Weightlifting" },
                    { label: "Wrestling" },
                  ]
                },
                {
                  label: "4.2 Outdoors",
                  icon: "feed",
                  children: [
                    { label: "Airsoft" },
                    { label: "Archery" },
                    { label: "Association football" },
                    { label: "Australian rules football" },
                    { label: "Auto racing" },
                    { label: "Baseball" },
                    { label: "Beach volleyball" },
                    { label: "Breakdancing" },
                    { label: "Climbing" },
                    { label: "Cornhole" },
                    { label: "Cricket" },
                    { label: "Croquet" },
                    { label: "Cycling" },
                    { label: "Disc golf" },
                    { label: "Dog sport" },
                    { label: "Equestrianism" },
                    { label: "Exhibition drill" },
                    { label: "Field hockey" },
                    { label: "Figure skating" },
                    { label: "Fishing" },
                    { label: "Fitness" },
                    { label: "Footbag" },
                    { label: "Frisbee" },
                    { label: "Golfing" },
                    { label: "Handball" },
                    { label: "Horseback riding" },
                    { label: "Horsemanship" },
                    { label: "Horseshoes" },
                    { label: "Iceboat racing" },
                    { label: "Jukskei" },
                    { label: "Kart racing" },
                    { label: "Knife throwing" },
                    { label: "Lacrosse" },
                    { label: "Longboarding" },
                    { label: "Long-distance running" },
                    { label: "Marching band" },
                    { label: "Mini Golf" },
                    { label: "Model aircraft" },
                    { label: "Orienteering" },
                    { label: "Pickleball" },
                    { label: "Powerboat racing" },
                    { label: "Quidditch" },
                    { label: "Race walking" },
                    { label: "Racquetball" },
                    { label: "Radio-controlled car racing" },
                    { label: "Radio-controlled model playing" },
                    { label: "Roller derby" },
                    { label: "Rugby league football" },
                    { label: "Sculling or rowing" },
                    { label: "Shooting sports" },
                    { label: "Skateboarding" },
                    { label: "Skiing" },
                    { label: "Sled dog racing" },
                    { label: "Softball" },
                    { label: "Speed skating" },
                    { label: "Squash" },
                    { label: "Surfing" },
                    { label: "Swimming" },
                    { label: "Table tennis" },
                    { label: "Tennis" },
                    { label: "Tennis polo" },
                    { label: "Tether car" },
                    { label: "Tour skating" },
                    { label: "Tourism" },
                    { label: "Trapshooting" },
                    { label: "Triathlon" },
                    { label: "Ultimate frisbee" },
                    { label: "Volleyball" },
                    { label: "Water polo" },
                  ]
                },
              ]
            },

            // =========================================================================================================== //

            {
              label: "5 Observation hobbies",
              avatar: "../assets/hobbies/hobbies-5-observation.png",
              children: [
                {
                  label: "5.1 Indoors",
                  icon: "feed",
                  children: [
                    { label: "Audiophile" },
                    { label: "Fishkeeping" },
                    { label: "Learning" },
                    { label: "Meditation" },
                    { label: "Microscopy" },
                    { label: "Reading" },
                    { label: "Research" },
                    { label: "Shortwave listening" },
                  ]
                },
                {
                  label: "5.2 Outdoors",
                  icon: "feed",
                  children: [
                    { label: "Aircraft spotting" },
                    { label: "Amateur astronomy" },
                    { label: "Benchmarking" },
                    { label: "Birdwatching" },
                    { label: "Bus spotting" },
                    { label: "Butterfly watching" },
                    { label: "Geocaching" },
                    { label: "Gongoozling" },
                    { label: "Herping" },
                    { label: "Hiking/backpacking" },
                    { label: "Meteorology" },
                    { label: "People-watching" },
                    { label: "Photography" },
                    { label: "Satellite watching" },
                    { label: "Trainspotting" },
                    { label: "Whale watching" },
                  ]
                },
              ]
            },

            // =========================================================================================================== //

          ]
        }
      ],

      resetFilter() {
        filter.value = "";
        filterRef.value.focus();
      }
    };
  }
});

app.use(Quasar, { config: {} });
app.mount("#q-app");