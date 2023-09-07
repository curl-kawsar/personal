/*
CATATAN PENTING:

Ubah setiap nama variable:
- var_tree_career
- var_hierarchy_career
- var_select_career
- var_data_career
- MyTree_career
- myTree_career
- .hierarchy-container-career

Sesuai keperluan. Gunakan CTRL+H untuk "replace all", pastikan Match Case aktif.
*/



"use strict";

/*jshint esversion: 6 */
(function () {
  'use strict';
}());

let var_tree_career = d3.tree;
let var_hierarchy_career = d3.hierarchy;
let var_select_career = d3.select;
let var_data_career = {
  "name": "Outline of Careers",
  "children": [

    // =========================================================================================================== //

    {
      "name": "👨🏻‍🎨 1 Arts, Crafts, and Design",
      "children": [
        {
          "name": "👉 1.1 Product designer",
          "children": [
            { "name": "Vehicle designer" },
            { "name": "Health care engineer" },
            { "name": "Consumer product designer" },
            { "name": "Ergonomist" },
            { "name": "Architectural technician" },
            { "name": "Creative technologist" },
            { "name": "Design engineer" },
            { "name": "Exhibition designer" },
          ]
        },
        {
          "name": "👉 1.2 Textile designer",
          "children": [
            { "name": "Wallpaper designer" },
            { "name": "Fashion designer" },
            { "name": "Interior designer" },
            { "name": "Textile conservator" },
            { "name": "Clothing and Textile technologist" },
            { "name": "Furniture designer" },
          ]
        },
        {
          "name": "👉 1.3 Graphic designer",
          "children": [
            { "name": "Art director" },
            { "name": "Web designer" },
            { "name": "Exhibition designer" },
            { "name": "Marketing consultant" },
            { "name": "Advertising art director" },
          ]
        },
        {
          "name": "👉 1.4 Photographer",
          "children": [
            { "name": "General practice photographer" },
            { "name": "Fashion photographer" },
            { "name": "Press photographer" },
            { "name": "Corporate photographer" },
            { "name": "Medical photographer" },
            { "name": "Animator" },
            { "name": "Art director" },
            { "name": "Drone Pilot" },
            { "name": "TV Camera operator" },
          ]
        },
        {
          "name": "👉 1.5 Illustrator",
          "children": [
            { "name": "Animator" },
            { "name": "Book or Magazine illustrator" },
            { "name": "Medical or Technical illustrator" },
            { "name": "Art director" },
            { "name": "Cartoonist" },
            { "name": "Storyboard artist" },
          ]
        },
        {
          "name": "👉 1.6 Jewellery designer",
          "children": [
            { "name": "Jewellery manufacturer" },
            { "name": "Silversmith" },
            { "name": "Gemologist" },
            { "name": "Ceramics designer" },
            { "name": "Watchmaker" },
            { "name": "Woodworker" },
          ]
        },
        {
          "name": "👉 1.7 Fashion designer",
          "children": [
            { "name": "Specialist designer" },
            { "name": "Technical designer" },
            { "name": "Fashion stylist" },
            { "name": "Fashion buyer" },
            { "name": "Costume designer" },
            { "name": "Dressmaker/Tailor" },
            { "name": "Fashion model" },
          ]
        },
        {
          "name": "👉 1.8 Make-up artist",
          "children": [
            { "name": "Make-up and Hair designer" },
            { "name": "Wedding make-up stylist" },
            { "name": "Prosthetics artist" },
            { "name": "Cosmetics developer" },
            { "name": "Beauty and Fashion blogger" },
            { "name": "Costume designer" },
            { "name": "Hairdresser" },
            { "name": "Wigmaker" },
          ]
        },
        {
          "name": "👉 1.9 Interior designer",
          "children": [
            { "name": "Head of practice" },
            { "name": "Architectural designer" },
            { "name": "Lighting designer" },
            { "name": "Furniture designer" },
            { "name": "Exhibition designer" },
            { "name": "Painter and decorator" },
            { "name": "Set designer" },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "🕵🏻 2 Performing arts, Media, and Journalism",
      "children": [
        {
          "name": "👉 2.1 Musician",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 2.2 Dancer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 2.3 Actor",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 2.4 TV/Film director",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 2.5 TV/Film producer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 2.6 Camera operator",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 2.7 Sound engineer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 2.8 Writer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 2.9 Journalist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 2.10 Editor",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "🦸🏻‍♂️ 3 Sales, Marketing, and Advertising",
      "children": [
        {
          "name": "👉 3.1 Sales executive",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 3.2 Store manager",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 3.3 Buyer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 3.4 Estate agent",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 3.5 Marketing executive",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 3.6 Market researcher",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 3.7 Advertising account manager",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 3.8 Public relations officer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "👨🏻‍💼 4 Administration and Business management",
      "children": [
        {
          "name": "👉 4.1 Customer service manager",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 4.2 Human resource manager",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 4.3 Project manager",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 4.4 Management consultant",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 4.5 Personal assistant",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 4.6 Events manager",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 4.7 Charity fundraiser",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 4.8 Translator",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "👨🏻‍⚖️ 5 Finance, Law, and Politics",
      "children": [
        {
          "name": "👉 5.1 Bank manager",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 5.2 Trader",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 5.3 Investment analyst",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 5.4 Accountant",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 5.5 Actuary",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 5.6 Financial adviser",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 5.7 Economist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 5.8 Solicitor",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 5.9 Barrister",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 5.10 Politician",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "👨🏻‍💻 6 Information technology and Computing",
      "children": [
        {
          "name": "👉 6.1 Software engineer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 6.2 Systems analyst",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 6.3 Database administrator",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 6.4 Network engineer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 6.5 IT support executive",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 6.6 Web designer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 6.7 Games developer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 6.8 Cyber-security analyst",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "👨🏻‍🔬 7 Science and Research",
      "children": [
        {
          "name": "👉 7.1 Biotechnologist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 7.2 Microbiologist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 7.3 Pharmacologist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 7.4 Food scientist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 7.5 Marine biologist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 7.6 Forensic scientist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 7.7 Geoscientist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 7.8 Materials scientist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 7.9 Meteorologist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 7.10 Astronomer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 7.11 Astronaut",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "👨🏻‍🌾 8 Animals, Farming, and the Environment",
      "children": [
        {
          "name": "👉 8.1 Vet",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 8.2 Animal care worker",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 8.3 Zookeeper",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 8.4 Farm manager",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 8.5 Horticultural worker",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 8.6 Landscape architect",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 8.7 Ecologist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "👨🏻‍🏭 9 Engineering and Manufacturing",
      "children": [
        {
          "name": "👉 9.1 Civil engineer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 9.2 Drilling engineer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 9.3 Chemical engineer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 9.4 Mechanical engineer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 9.5 Motor vehicle technician",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 9.6 Electrical engineer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 9.7 Telecoms engineer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 9.8 Aerospace engineer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "👷🏻 10 Construction",
      "children": [
        {
          "name": "👉 10.1 Architect",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 10.2 Structural engineer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 10.3 Quantity surveyor",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 10.4 Town planner",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 10.5 Builder",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 10.6 Construction manager",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 10.7 Carpenter",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 10.8 Electrician",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 10.9 Plumber",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "👨🏻‍✈️ 11 Transport",
      "children": [
        {
          "name": "👉 11.1 Airline pilot",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 11.2 Air-traffic controller",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 11.3 Transport planner",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 11.4 Ship's captain",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 11.5 Train driver",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 11.6 Truck driver",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 11.7 Logistics manager",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "👨🏻‍🚒 12 Security and Emergency services",
      "children": [
        {
          "name": "👉 12.1 Soldier",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 12.2 Armed forces pilot",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 12.3 Navy sailor",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 12.4 Royal Marines commando",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 12.5 Coastguard",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 12.6 Police officer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 12.7 Prison officer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 12.8 Probation officer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 12.9 Intelligence officer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 12.10 Firefighter",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 12.11 Paramedic",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "👨🏻‍🏫 13 Social care and Teaching",
      "children": [
        {
          "name": "👉 13.1 Psychologist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 13.2 Counsellor",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 13.3 Social worker",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 13.4 Youth worker",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 13.5 Care home manager",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 13.6 Nursery worker",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 13.7 Primary school teacher",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 13.8 Secondary school teacher",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 13.9 Higher education lecturer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 13.10 Librarian",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "👨🏻‍⚕️ 14 Health and Medicine",
      "children": [
        {
          "name": "👉 14.1 Doctor",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 14.2 Nurse",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 14.3 Midwife",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 14.4 Dentist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 14.5 Pharmacist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 14.6 Radiographer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 14.7 Physiotherapist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 14.8 Speech and language therapist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 14.9 Occupational therapist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 14.10 Optometrist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
      ]
    },

    // =========================================================================================================== //

    {
      "name": "👨🏻‍🍳 15 Sports, Leisure, and Tourism",
      "children": [
        {
          "name": "👉 15.1 Sport professional",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 15.2 Personal trainer",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 15.3 Beauty therapist",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 15.4 Hotel manager",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 15.5 Travel agent",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 15.6 Airline cabin crew",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 15.7 Cheft",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
        {
          "name": "👉 15.8 Museum curator",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },
      ]
    },

    // =========================================================================================================== //

  ]
};

class MyTree_career {
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
      let nodes = this.var_tree_career(this.root);
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
    this.var_tree_career = var_tree_career().size([this.width, this.height]);
    // this.tree = tree().nodeSize([0, 30]);
    this.var_tree_career = var_tree_career().nodeSize([0, 30]);
    this.root = this.var_tree_career(var_hierarchy_career(var_data_career));
    this.root.each((d) => {
      d.name = d.id; //transferring name to a name variable
      d.id = this.i; //Assigning numerical Ids
      this.i++;
    });
    this.root.x0 = this.root.x;
    this.root.y0 = this.root.y;
    this.svg = var_select_career('.hierarchy-container-career').append('svg')
      .attr('width', this.width + this.margin.right + this.margin.left)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    // this.root.children.forEach(this.collapse);
    this.update(this.root);
  }
}
;
let myTree_career = new MyTree_career();
myTree_career.$onInit();