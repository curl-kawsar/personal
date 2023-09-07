/*
CATATAN PENTING:

Ubah setiap nama variable:
- var_tree_academic_detail
- var_hierarchy_academic_detail
- var_select_academic_detail
- var_data_academic_detail
- MyTree_academic_detail
- myTree_academic_detail
- .hierarchy-container-academic-detail

Sesuai keperluan. Gunakan CTRL+H untuk "replace all", pastikan Match Case aktif.
*/



"use strict";

/*jshint esversion: 6 */
(function () {
  'use strict';
}());

let var_tree_academic_detail = d3.tree;
let var_hierarchy_academic_detail = d3.hierarchy;
let var_select_academic_detail = d3.select;
let var_data_academic_detail = {
  "name": "Outline of Acedemic Disciplines",
  "children": [

    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

    {
      "name": "📕 1 Humanities",
      "children": [

        // =========================================================================================================== //

        {
          "name": "👉 1.1 Performing arts",
          "children": [
            {
              "name": "Music",
              "children": [
                { "name": "Accompanying" },
                { "name": "Chamber music" },
                { "name": "Church music" },
                {
                  "name": "Conducting",
                  "children": [
                    { "name": "Choral conducting" },
                    { "name": "Orchestral conducting" },
                    { "name": "Wind ensemble conducting" },
                  ]
                },
                { "name": "Early music" },
                { "name": "Jazz studies" },
                { "name": "Musical composition" },
                { "name": "Music education" },
                { "name": "Music history" },
                {
                  "name": "Musicology",
                  "children": [
                    { "name": "Historical musicology" },
                    { "name": "Systematic musicology" },
                  ]
                },
                { "name": "Ethnomusicology" },
                { "name": "Music theory" },
                { "name": "Orchestral studies" },
                {
                  "name": "Organology",
                  "children": [
                    { "name": "Organ and historical keyboards" },
                    { "name": "Piano" },
                    { "name": "Strings, harp, oud, and guitar" },
                    { "name": "Singing" },
                    { "name": "Woodwinds, brass, and percussion" },
                  ]
                },
                { "name": "Recording" },
              ]
            },
            {
              "name": "Dance",
              "children": [
                { "name": "Choreography" },
                { "name": "Dance notation" },
                { "name": "Ethnochoreology" },
                { "name": "History of dance" },
              ]
            },
            {
              "name": "Television",
              "children": [
                { "name": "Television studies" },
              ]
            },
            {
              "name": "Theatre",
              "children": [
                { "name": "Acting" },
                { "name": "Directing" },
                { "name": "Dramaturgy" },
                { "name": "History" },
                { "name": "Musical theatre" },
                { "name": "Playwrighting" },
                { "name": "Puppetry" },
                { "name": "Scenography" },
                { "name": "Stage design" },
                { "name": "Ventriloquism" },
              ]
            },
            {
              "name": "Film",
              "children": [
                { "name": "Animation" },
                { "name": "Film criticism" },
                { "name": "Filmmaking" },
                { "name": "Film theory" },
                { "name": "Live action" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 1.2 Visual arts",
          "children": [
            {
              "name": "Applied arts",
              "children": [
                { "name": "Animation" },
                { "name": "Calligraphy" },
                { "name": "Decorative arts" },
                { "name": "Mixed media" },
                { "name": "Printmaking" },
                { "name": "Studio art" },
                {
                  "name": "Architecture",
                  "children": [
                    { "name": "Interior architecture" },
                    {
                      "name": "Landscape architecture",
                      "children": [
                        { "name": "Landscape design" },
                        { "name": "Landscape planning" },
                      ]
                    },
                    { "name": "Architectural analytics" },
                    { "name": "Historic preservation" },
                    { "name": "Interior design (interior architecture)" },
                    { "name": "Technical drawing" },
                  ]
                },
              ]
            },
            {
              "name": "Fashion",
            },
            {
              "name": "Fine arts",
              "children": [
                {
                  "name": "Graphic arts", "children": [
                    { "name": "Drawing" },
                    { "name": "Painting" },
                    { "name": "Photography" },
                  ]
                },
                { "name": "Sculpture" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 1.3 History",
          "children": [
            { "name": "African history" },
            { "name": "American history" },
            {
              "name": "Ancient history",
              "children": [
                { "name": "Ancient Egypt" },
                { "name": "Carthage" },
                { "name": "Ancient Greek history" },
                { "name": "Ancient Roman history" },
                { "name": "Assyrian Civilization" },
                { "name": "Bronze Age Civilizations" },
                { "name": "Biblical history" },
                { "name": "History of the Indus Valley Civilization" },
                { "name": "Preclassic Maya" },
                { "name": "History of Mesopotamia" },
                { "name": "The Stone Age" },
                { "name": "History of the Yangtze civilization" },
                { "name": "History of the Yellow River civilization" },
              ]
            },
            {
              "name": "Asian history",
              "children": [
                { "name": "Chinese history" },
                { "name": "Indian history" },
                { "name": "Indonesian history" },
                { "name": "Iranian history" },
              ]
            },
            { "name": "Australian history" },
            { "name": "Cultural history" },
            { "name": "Ecclesiastical history of the Catholic Church" },
            { "name": "Economic history" },
            { "name": "Environmental history" },
            { "name": "European history" },
            { "name": "Intellectual history" },
            { "name": "Jewish history" },
            { "name": "Latin American history" },
            { "name": "Modern history" },
            {
              "name": "Philosophical history",
              "children": [
                { "name": "Ancient philosophy" },
                { "name": "Contemporary philosophy" },
                {
                  "name": "Medieval philosophy",
                  "children": [
                    { "name": "Humanism" },
                    { "name": "Scholasticism" },
                  ]
                },
                { "name": "Modern philosophy" },
              ]
            },
            {
              "name": "Political history", "children": [
                { "name": "History of political thought" },
              ]
            },
            { "name": "Pre-Columbian era history" },
            { "name": "Prehistory" },
            { "name": "Public history" },
            { "name": "Russian history" },
            { "name": "Scientific history" },
            { "name": "Technological history" },
            { "name": "World history" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 1.4 Languages and literature",
          "children": [
            {
              "name": "Linguistics",
              "children": [
                { "name": "Applied linguistics" },
                { "name": "Composition studies" },
                { "name": "Computational linguistics" },
                { "name": "Discourse analysis" },
                { "name": "English studies" },
                { "name": "Etymology" },
                { "name": "Grammar" },
                { "name": "Grammatology" },
                { "name": "Historical linguistics" },
                { "name": "History of linguistics" },
                { "name": "Interlinguistics" },
                { "name": "Lexicology" },
                { "name": "Linguistic typology" },
                { "name": "Morphology (linguistics)" },
                { "name": "Natural language processing" },
                { "name": "Philology" },
                { "name": "Phonetics" },
                { "name": "Phonology" },
                { "name": "Pragmatics" },
                { "name": "Psycholinguistics" },
                { "name": "Rhetoric" },
                { "name": "Semantics" },
                { "name": "Semiotics" },
                { "name": "Sociolinguistics" },
                { "name": "Syntax" },
                { "name": "Usage" },
                { "name": "Word usage" },
              ]
            },
            { "name": "Comics studies" },
            { "name": "Comparative literature" },
            {
              "name": "Creative writing", "children": [
                { "name": "Fiction" },
                { "name": "Non-fiction" },
              ]
            },
            { "name": "English literature" },
            {
              "name": "History of literature",
              "children": [
                { "name": "Ancient literature" },
                { "name": "Medieval literature" },
                { "name": "Post-colonial literature" },
                { "name": "Post-modern literature" },
              ]
            },
            {
              "name": "Literary theory",
              "children": [
                { "name": "Critical theory" },
                { "name": "Literary criticism" },
                { "name": "Poetics" },
              ]
            },
            { "name": "Poetry" },
            {
              "name": "World literature",
              "children": [
                { "name": "African-American literature" },
                { "name": "American literature" },
                { "name": "British literature" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 1.5 Law",
          "children": [
            { "name": "Administrative law" },
            { "name": "Canon law" },
            {
              "name": "Civil law",
              "children": [
                { "name": "Admiralty law" },
                { "name": "Animal law/Animal rights" },
                { "name": "Civil procedure" },
                { "name": "Common law" },
                { "name": "Contract law" },
                { "name": "Corporations" },
                { "name": "Environmental law" },
                { "name": "Family law" },
                { "name": "Federal law" },
                {
                  "name": "International law",
                  "children": [
                    { "name": "Public international law" },
                    { "name": "Supranational law" },
                  ]
                },
                { "name": "Labor law" },
                { "name": "Property law" },
                { "name": "Tax law" },
                { "name": "Tort law" },
              ]
            },
            { "name": "Comparative law" },
            { "name": "Competition law" },
            { "name": "Constitutional law" },
            {
              "name": "Criminal law",
              "children": [
                { "name": "Criminal justice" },
                {
                  "name": "Criminal procedure",
                  "children": [
                    { "name": "Forensic science" },
                    { "name": "Police science" },
                  ]
                },
              ]
            },
            { "name": "Islamic law" },
            { "name": "Jewish law" },
            { "name": "Jurisprudence (Philosophy of Law)" },
            {
              "name": "Legal management",
              "children": [
                { "name": "Commercial law" },
                { "name": "Corporate law" },
              ]
            },
            { "name": "Procedural law" },
            { "name": "Substantive law" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 1.6 Philosophy",
          "children": [
            { "name": "Aesthetics" },
            {
              "name": "Applied philosophy",
              "children": [
                { "name": "Philosophy of economics" },
                { "name": "Philosophy of education" },
                { "name": "Philosophy of engineering" },
                { "name": "Philosophy of history" },
                { "name": "Philosophy of language" },
                { "name": "Philosophy of law" },
                { "name": "Philosophy of mathematics" },
                { "name": "Philosophy of music" },
                { "name": "Philosophy of psychology" },
                { "name": "Philosophy of religion" },
                {
                  "name": "Philosophy of physical sciences",
                  "children": [
                    { "name": "Philosophy of biology" },
                    { "name": "Philosophy of chemistry" },
                    { "name": "Philosophy of physics" },
                  ]
                },
                { "name": "Philosophy of social science" },
                { "name": "Philosophy of technology" },
                { "name": "Systems philosophy" },
              ]
            },
            {
              "name": "Epistemology",
              "children": [
                { "name": "Justification" },
                { "name": "Reasoning errors" },
              ]
            },
            {
              "name": "Ethics",
              "children": [
                {
                  "name": "Applied ethics",
                  "children": [
                    { "name": "Animal rights" },
                    { "name": "Bioethics" },
                    { "name": "Environmental ethics" },
                  ]
                },
                { "name": "Meta-ethics" },
                { "name": "Moral psychology, Descriptive ethics, Value theory" },
                {
                  "name": "Normative ethics",
                  "children": [
                    { "name": "Virtue ethics" },
                  ]
                },
              ]
            },
            {
              "name": "Logic",
              "children": [
                { "name": "Mathematical logic" },
                { "name": "Philosophical logic" },
              ]
            },
            { "name": "Meta-philosophy" },
            {
              "name": "Metaphysics",
              "children": [
                { "name": "Philosophy of Action" },
                { "name": "Determinism and Free will" },
                { "name": "Ontology" },
                {
                  "name": "Philosophy of mind",
                  "children": [
                    { "name": "Philosophy of pain" },
                    { "name": "Philosophy of artificial intelligence" },
                    { "name": "Philosophy of perception" },
                  ]
                },
                { "name": "Philosophy of space and time" },
                { "name": "Teleology" },
                { "name": "Theism and Atheism" },
              ]
            },
            {
              "name": "Philosophical traditions and schools",
              "children": [
                { "name": "African philosophy" },
                { "name": "Analytic philosophy" },
                { "name": "Aristotelianism" },
                { "name": "Continental philosophy" },
                { "name": "Eastern philosophy" },
                { "name": "Feminist philosophy" },
                { "name": "Platonism" },
              ]
            },
            {
              "name": "Social philosophy and political philosophy",
              "children": [
                { "name": "Anarchism" },
                { "name": "Feminist philosophy" },
                { "name": "Libertarianism" },
                { "name": "Marxism" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 1.7 Theology",
          "children": [
            {
              "name": "Biblical studies",
              "children": [
                { "name": "Biblical Hebrew, Koine Greek, Aramaic" },
              ]
            },
            { "name": "Religious studies" },
            {
              "name": "Buddhist theology",
              "children": [
                { "name": "Pali Studies" },
              ]
            },
            {
              "name": "Christian theology",
              "children": [
                { "name": "Anglican theology" },
                { "name": "Baptist theology" },
                { "name": "Catholic theology" },
                { "name": "Eastern Orthodox theology" },
                { "name": "Protestant theology" },
              ]
            },
            {
              "name": "Hindu theology",
              "children": [
                { "name": "Sanskrit Studies" },
                { "name": "Dravidian Studies" },
              ]
            },
            { "name": "Jewish theology" },
            {
              "name": "Muslim theology",
              "children": [
                { "name": "Arabic Studies" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

      ]
    },

    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

    {
      "name": "📒 2 Social science",
      "children": [

        // =========================================================================================================== //

        {
          "name": "👉 2.1 Anthropology",
          "children": [
            { "name": "Biological anthropology" },
            { "name": "Linguistic anthropology" },
            { "name": "Cultural anthropology" },
            { "name": "Social anthropology" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 2.2 Archaeology",
          "children": [
            { "name": "Biocultural anthropology" },
            { "name": "Evolutionary anthropology" },
            { "name": "Feminist archaeology" },
            { "name": "Forensic anthropology" },
            { "name": "Maritime archaeology" },
            { "name": "Palaeoanthropology" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 2.3 Economics",
          "children": [
            { "name": "Agricultural economics" },
            { "name": "Anarchist economics" },
            { "name": "Applied economics" },
            { "name": "Behavioural economics" },
            { "name": "Bioeconomics" },
            { "name": "Complexity economics" },
            { "name": "Computational economics" },
            { "name": "Consumer economics" },
            { "name": "Development economics" },
            { "name": "Ecological economics" },
            { "name": "Econometrics" },
            { "name": "Economic geography" },
            { "name": "Economic sociology" },
            { "name": "Economic systems" },
            { "name": "Education economics" },
            { "name": "Energy economics" },
            { "name": "Entrepreneurial economics" },
            { "name": "Environmental economics" },
            { "name": "Evolutionary economics" },
            { "name": "Experimental economics" },
            { "name": "Feminist economics" },
            { "name": "Financial econometrics" },
            { "name": "Financial economics" },
            { "name": "Green economics" },
            { "name": "Growth economics" },
            { "name": "Human development theory" },
            { "name": "Industrial organization" },
            { "name": "Information economics" },
            { "name": "Institutional economics" },
            { "name": "International economics" },
            { "name": "Islamic economics" },
            { "name": "Labor economics" },
            { "name": "Law and economics" },
            { "name": "Macroeconomics" },
            { "name": "Managerial economics" },
            { "name": "Marxian economics" },
            { "name": "Mathematical economics" },
            { "name": "Microeconomics" },
            { "name": "Monetary economics" },
            { "name": "Neuroeconomics" },
            { "name": "Participatory economics" },
            { "name": "Political economy" },
            { "name": "Public economics" },
            { "name": "Public finance" },
            { "name": "Real estate economics" },
            { "name": "Resource economics" },
            { "name": "Social choice theory" },
            { "name": "Socialist economics" },
            { "name": "Socioeconomics" },
            { "name": "Transport economics" },
            { "name": "Welfare economics" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 2.4 Geography",
          "children": [
            {
              "name": "Physical geography",
              "children": [
                { "name": "Atmology" },
                { "name": "Biogeography" },
                { "name": "Climatology" },
                { "name": "Coastal geography" },
                { "name": "Emergency management" },
                { "name": "Environmental geography" },
                { "name": "Geobiology" },
                { "name": "Geochemistry" },
                { "name": "Geology" },
                { "name": "Geomatics" },
                { "name": "Geomorphology" },
                { "name": "Geophysics" },
                { "name": "Glaciology" },
                { "name": "Hydrology" },
                { "name": "Landscape ecology" },
                { "name": "Lithology" },
                { "name": "Meteorology" },
                { "name": "Mineralogy" },
                { "name": "Oceanography" },
                { "name": "Palaeogeography" },
                { "name": "Palaeontology" },
                { "name": "Petrology" },
                { "name": "Quaternary science" },
                { "name": "Soil geography" },
              ]
            },
            {
              "name": "Human geography",
              "children": [
                { "name": "Behavioural geography" },
                { "name": "Cognitive geography" },
                { "name": "Cultural geography" },
                { "name": "Development geography" },
                { "name": "Economic geography" },
                { "name": "Health geography" },
                { "name": "Historical geography" },
                { "name": "Language geography" },
                { "name": "Mathematical geography" },
                { "name": "Marketing geography" },
                { "name": "Military geography" },
                { "name": "Political geography" },
                { "name": "Population geography" },
                { "name": "Religion geography" },
                { "name": "Social geography" },
                { "name": "Strategic geography" },
                { "name": "Time geography" },
                { "name": "Tourism geography" },
                { "name": "Transport geography" },
                { "name": "Urban geography" },
              ]
            },
            { "name": "Integrated geography" },
            {
              "name": "Cartography",
              "children": [
                { "name": "Celestial cartography" },
                { "name": "Planetary cartography" },
                { "name": "Topography" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 2.5 Political science",
          "children": [
            { "name": "American politics" },
            { "name": "Canadian politics" },
            { "name": "Civics" },
            { "name": "Comparative politics" },
            { "name": "European studies" },
            { "name": "Geopolitics (Political geography)" },
            { "name": "International relations" },
            { "name": "International organizations" },
            { "name": "Nationalism studies" },
            { "name": "Peace and conflict studies" },
            { "name": "Policy studies" },
            { "name": "Political behavior" },
            { "name": "Political culture" },
            { "name": "Political economy" },
            { "name": "Political history" },
            { "name": "Political philosophy" },
            { "name": "Public administration" },
            { "name": "Public law" },
            { "name": "Psephology" },
            { "name": "Social choice theory" },
            { "name": "Singapore politics" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 2.6 Psychology",
          "children": [
            { "name": "Abnormal psychology" },
            { "name": "Applied psychology" },
            { "name": "Biological psychology" },
            { "name": "Clinical neuropsychology" },
            { "name": "Clinical psychology" },
            { "name": "Cognitive psychology" },
            { "name": "Community psychology" },
            { "name": "Comparative psychology" },
            { "name": "Conservation psychology" },
            { "name": "Consumer psychology" },
            { "name": "Counseling psychology" },
            { "name": "Criminal psychology" },
            {
              "name": "Cultural psychology", "children": [
                { "name": "Asian psychology" },
                { "name": "Black psychology" },
              ]
            },
            { "name": "Developmental psychology" },
            { "name": "Differential psychology" },
            { "name": "Ecological psychology" },
            { "name": "Educational psychology" },
            { "name": "Environmental psychology" },
            { "name": "Evolutionary psychology" },
            { "name": "Experimental psychology" },
            { "name": "Group psychology" },
            { "name": "Family psychology" },
            { "name": "Feminine psychology" },
            { "name": "Forensic developmental psychology" },
            { "name": "Forensic psychology" },
            { "name": "Health psychology" },
            { "name": "Humanistic psychology" },
            { "name": "Indigenous psychology" },
            { "name": "Legal psychology" },
            { "name": "Mathematical psychology" },
            { "name": "Media psychology" },
            { "name": "Medical psychology" },
            { "name": "Military psychology" },
            { "name": "Moral psychology and Descriptive ethics" },
            { "name": "Music psychology" },
            { "name": "Neuropsychology" },
            { "name": "Occupational health psychology" },
            { "name": "Occupational psychology" },
            { "name": "Organizational psychology (a.k.a., Industrial Psychology)" },
            { "name": "Parapsychology" },
            { "name": "Pediatric psychology" },
            { "name": "Pedology (children study)" },
            { "name": "Personality psychology" },
            { "name": "Phenomenology" },
            { "name": "Political psychology" },
            { "name": "Positive psychology" },
            { "name": "Psychoanalysis" },
            { "name": "Psychobiology" },
            { "name": "Psychology of religion" },
            { "name": "Psychometrics" },
            {
              "name": "Psychopathology",
              "children": [
                { "name": "Child psychopathology" },
              ]
            },
            { "name": "Psychophysics" },
            { "name": "Quantitative psychology" },
            { "name": "Rehabilitation psychology" },
            { "name": "School psychology" },
            { "name": "Social psychology" },
            { "name": "Sport psychology" },
            { "name": "Traffic psychology" },
            { "name": "Transpersonal psychology" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 2.7 Sociology",
          "children": [
            { "name": "Analytical sociology" },
            {
              "name": "Applied sociology", "children": [
                { "name": "Leisure studies" },
                { "name": "Political sociology" },
                { "name": "Public sociology" },
                { "name": "Social engineering" },
              ]
            },
            { "name": "Architectural sociology" },
            {
              "name": "Area studies",
              "children": [
                { "name": "African studies" },
                {
                  "name": "American studies",
                  "children": [
                    { "name": "Appalachian studies" },
                    { "name": "Canadian studies" },
                    { "name": "Latin American studies" },
                  ]
                },
                {
                  "name": "Asian studies",
                  "children": [
                    { "name": "Central Asian studies" },
                    { "name": "East Asian studies" },
                    { "name": "Indology" },
                    { "name": "Iranian studies" },
                    { "name": "Japanese studies" },
                    { "name": "Korean studies" },
                    { "name": "Pakistan studies" },
                    { "name": "Sindhology" },
                    { "name": "Sinology" },
                    { "name": "Southeast Asian studies" },
                    { "name": "Thai studies" },
                  ]
                },
                { "name": "Australian studies" },
                {
                  "name": "European studies",
                  "children": [
                    { "name": "Celtic studies" },
                    { "name": "German studies" },
                    { "name": "Sociology in Poland" },
                    { "name": "Scandinavian studies" },
                    { "name": "Slavic studies" },
                  ]
                },
                {
                  "name": "Middle Eastern studies",
                  "children": [
                    { "name": "Arab studies" },
                    { "name": "Assyriology" },
                    { "name": "Egyptology" },
                    { "name": "Jewish studies" },
                  ]
                },
              ]
            },
            { "name": "Behavioral sociology" },
            {
              "name": "Collective behavior",
              "children": [
                { "name": "Social movements" },
              ]
            },
            {
              "name": "Community informatics",
              "children": [
                { "name": "Social network analysis" },
              ]
            },
            { "name": "Comparative sociology" },
            { "name": "Conflict theory" },
            { "name": "Criminology/Criminal justice" },
            { "name": "Critical management studies" },
            { "name": "Critical sociology" },
            { "name": "Cultural sociology" },
            {
              "name": "Cultural studies/ethnic studies",
              "children": [
                { "name": "Africana studies" },
                { "name": "Cross-cultural studies" },
                { "name": "Culturology" },
                { "name": "Deaf studies" },
                { "name": "Ethnology" },
                { "name": "Utopian studies" },
                { "name": "Whiteness studies" },
              ]
            },
            { "name": "Demography/Population" },
            { "name": "Digital sociology" },
            { "name": "Dramaturgical sociology" },
            { "name": "Economic sociology" },
            { "name": "Educational sociology" },
            { "name": "Empirical sociology" },
            { "name": "Environmental sociology" },
            { "name": "Evolutionary sociology" },
            { "name": "Feminist sociology" },
            { "name": "Figurational sociology" },
            { "name": "Futures studies" },
            {
              "name": "Gender studies",
              "children": [
                { "name": "Men's studies" },
                { "name": "Women's studies" },
              ]
            },
            { "name": "Historical sociology" },
            { "name": "Human ecology" },
            { "name": "Humanistic sociology" },
            { "name": "Industrial sociology" },
            { "name": "Interactionism" },
            {
              "name": "Interpretive sociology",
              "children": [
                { "name": "Ethnomethodology" },
                { "name": "Phenomenology" },
                { "name": "Social constructionism" },
                { "name": "Symbolic interactionism" },
              ]
            },
            { "name": "Jealousy sociology" },
            { "name": "Macrosociology" },
            { "name": "Marxist sociology" },
            { "name": "Mathematical sociology" },
            { "name": "Medical sociology" },
            { "name": "Mesosociology" },
            { "name": "Microsociology" },
            { "name": "Military sociology" },
            { "name": "Natural resource sociology" },
            { "name": "Organizational studies" },
            { "name": "Phenomenological sociology" },
            { "name": "Policy sociology" },
            { "name": "Psychoanalytic sociology" },
            { "name": "Science studies/Science and technology studies" },
            {
              "name": "Sexology",
              "children": [
                { "name": "Heterosexism" },
                { "name": "Human sexual behavior" },
                { "name": "Human sexuality" },
                { "name": "Queer studies/Queer theory" },
                { "name": "Sex education" },
              ]
            },
            { "name": "Social capital" },
            { "name": "Social change" },
            { "name": "Social conflict theory" },
            {
              "name": "Social control",
              "children": [
                { "name": "Pure sociology" },
              ]
            },
            { "name": "Social economy" },
            { "name": "Social philosophy" },
            { "name": "Social policy" },
            { "name": "Social psychology" },
            { "name": "Social stratification" },
            { "name": "Social theory" },
            {
              "name": "Social transformation",
              "children": [
                { "name": "Computational sociology" },
                {
                  "name": "Economic sociology/Socioeconomics",
                  "children": [
                    { "name": "Economic development" },
                    { "name": "Social development" },
                  ]
                },
              ]
            },
            { "name": "Sociobiology" },
            { "name": "Sociocybernetics" },
            { "name": "Sociolinguistics" },
            { "name": "Sociology of aging" },
            { "name": "Sociology of agriculture" },
            { "name": "Sociology of art" },
            { "name": "Sociology of autism" },
            { "name": "Sociology of childhood" },
            { "name": "Sociology of conflict" },
            { "name": "Sociology of culture" },
            { "name": "Sociology of cyberspace" },
            { "name": "Sociology of development" },
            { "name": "Sociology of deviance" },
            { "name": "Sociology of disaster" },
            { "name": "Sociology of education" },
            { "name": "Sociology of emotions" },
            { "name": "Sociology of fatherhood" },
            { "name": "Sociology of finance" },
            { "name": "Sociology of food" },
            { "name": "Sociology of gender" },
            { "name": "Sociology of generations" },
            { "name": "Sociology of globalization" },
            { "name": "Sociology of government" },
            { "name": "Sociology of health and illness" },
            { "name": "Sociology of human consciousness" },
            { "name": "Sociology of immigration" },
            { "name": "Sociology of knowledge" },
            { "name": "Sociology of language" },
            { "name": "Sociology of law" },
            { "name": "Sociology of leisure" },
            { "name": "Sociology of literature" },
            { "name": "Sociology of markets" },
            { "name": "Sociology of marriage" },
            { "name": "Sociology of motherhood" },
            { "name": "Sociology of music" },
            { "name": "Sociology of natural resources" },
            { "name": "Sociology of organizations" },
            { "name": "Sociology of peace, war, and social conflict" },
            { "name": "Sociology of punishment" },
            { "name": "Sociology of race and ethnic relations" },
            { "name": "Sociology of religion" },
            { "name": "Sociology of risk" },
            { "name": "Sociology of science" },
            { "name": "Sociology of scientific knowledge" },
            { "name": "Sociology of social change" },
            { "name": "Sociology of social movements" },
            { "name": "Sociology of space" },
            { "name": "Sociology of sport" },
            { "name": "Sociology of technology" },
            { "name": "Sociology of terrorism" },
            { "name": "Sociology of the body" },
            { "name": "Sociology of the family" },
            { "name": "Sociology of the history of science" },
            { "name": "Sociology of the Internet" },
            { "name": "Sociology of work" },
            { "name": "Sociomusicology" },
            { "name": "Structural sociology" },
            { "name": "Theoretical sociology" },
            { "name": "Urban studies or Urban sociology/Rural sociology" },
            { "name": "Victimology" },
            { "name": "Visual sociology" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 2.8 Social work",
          "children": [
            { "name": "Clinical social work" },
            { "name": "Community practice" },
            { "name": "Mental health" },
            { "name": "Psychosocial rehabilitation" },
            { "name": "Person-centered therapy" },
            { "name": "Family therapy" },
            { "name": "Financial social work" },
          ]
        },

        // =========================================================================================================== //

      ]
    },

    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

    {
      "name": "📗 3 Natural science",
      "children": [

        // =========================================================================================================== //

        {
          "name": "👉 3.1 Biology",
          "children": [
            { "name": "Aerobiology" },
            {
              "name": "Anatomy",
              "children": [
                { "name": "Comparative anatomy" },
                { "name": "Human anatomy" },
              ]
            },
            { "name": "Biochemistry" },
            { "name": "Bioinformatics" },
            { "name": "Biophysics" },
            { "name": "Biotechnology" },
            {
              "name": "Botany",
              "children": [
                { "name": "Ethnobotany" },
                { "name": "Phycology" },
              ]
            },
            { "name": "Cell biology" },
            { "name": "Chronobiology" },
            { "name": "Computational biology" },
            { "name": "Cryobiology" },
            {
              "name": "Developmental biology",
              "children": [
                { "name": "Embryology" },
                { "name": "Teratology" },
              ]
            },
            {
              "name": "Ecology",
              "children": [
                { "name": "Agroecology" },
                { "name": "Ethnoecology" },
                { "name": "Human ecology" },
                { "name": "Landscape ecology" },
              ]
            },
            { "name": "Endocrinology" },
            { "name": "Epigenetics" },
            {
              "name": "Ethnobiology",
              "children": [
                { "name": "Anthrozoology" },
              ]
            },
            { "name": "Evolutionary biology" },
            {
              "name": "Genetics",
              "children": [
                { "name": "Behavioural genetics" },
                { "name": "Molecular genetics" },
                { "name": "Population genetics" },
              ]
            },
            { "name": "Histology" },
            { "name": "Human biology" },
            { "name": "Immunology" },
            { "name": "Limnology" },
            { "name": "Linnaean taxonomy" },
            { "name": "Marine biology" },
            { "name": "Mathematical biology" },
            {
              "name": "Microbiology",
              "children": [
                { "name": "Bacteriology" },
                { "name": "Protistology" },
              ]
            },
            { "name": "Molecular biology" },
            { "name": "Mycology" },
            {
              "name": "Neuroscience",
              "children": [
                { "name": "Behavioral neuroscience" },
              ]
            },
            { "name": "Nutrition" },
            {
              "name": "Paleobiology",
              "children": [
                { "name": "Paleontology" },
              ]
            },
            { "name": "Parasitology" },
            {
              "name": "Pathology",
              "children": [
                { "name": "Anatomical pathology" },
                { "name": "Clinical pathology" },
                { "name": "Dermatopathology" },
                { "name": "Forensic pathology" },
                { "name": "Hematopathology" },
                { "name": "Histopathology" },
                { "name": "Molecular pathology" },
                { "name": "Surgical pathology" },
              ]
            },
            {
              "name": "Physiology",
              "children": [
                {
                  "name": "Human physiology",
                  "children": [
                    { "name": "Exercise physiology" },
                  ]
                },
              ]
            },
            { "name": "Structural Biology" },
            { "name": "Systematics (Taxonomy)" },
            { "name": "Systems biology" },
            {
              "name": "Virology",
              "children": [
                { "name": "Molecular virology" },
              ]
            },
            { "name": "Xenobiology" },
            {
              "name": "Zoology",
              "children": [
                { "name": "Animal communications" },
                { "name": "Apiology" },
                { "name": "Arachnology" },
                { "name": "Arthropodology" },
                { "name": "Batrachology" },
                { "name": "Bryozoology" },
                { "name": "Carcinology" },
                { "name": "Cetology" },
                { "name": "Cnidariology" },
                {
                  "name": "Entomology",
                  "children": [
                    { "name": "Forensic entomology" },
                  ]
                },
                { "name": "Ethnozoology" },
                { "name": "Ethology" },
                { "name": "Helminthology" },
                { "name": "Herpetology" },
                { "name": "Ichthyology" },
                { "name": "Invertebrate zoology" },
                {
                  "name": "Mammalogy",
                  "children": [
                    { "name": "Cynology" },
                    { "name": "Felinology" },
                  ]
                },
                {
                  "name": "Malacology",
                  "children": [
                    { "name": "Conchology" },
                    { "name": "Limacology" },
                    { "name": "Teuthology" },
                  ]
                },
                { "name": "Myriapodology" },
                { "name": "Myrmecology" },
                { "name": "Nematology" },
                { "name": "Neuroethology" },
                { "name": "Oology" },
                { "name": "Ornithology" },
                { "name": "Planktology" },
                { "name": "Primatology" },
                { "name": "Zootomy" },
                { "name": "Zoosemiotics" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 3.2 Chemistry",
          "children": [
            { "name": "Agrochemistry" },
            { "name": "Analytical chemistry" },
            { "name": "Astrochemistry" },
            { "name": "Atmospheric chemistry" },
            { "name": "Biochemistry" },
            { "name": "Chemical biology" },
            { "name": "Chemical engineering" },
            { "name": "Cheminformatics" },
            { "name": "Computational chemistry" },
            { "name": "Cosmochemistry" },
            { "name": "Electrochemistry" },
            { "name": "Environmental chemistry" },
            { "name": "Femtochemistry" },
            { "name": "Flavor" },
            { "name": "Flow chemistry" },
            { "name": "Geochemistry" },
            { "name": "Green chemistry" },
            { "name": "Histochemistry" },
            { "name": "Hydrogenation" },
            { "name": "Immunochemistry" },
            { "name": "Inorganic chemistry" },
            { "name": "Marine chemistry" },
            { "name": "Mathematical chemistry" },
            { "name": "Mechanochemistry" },
            { "name": "Medicinal chemistry" },
            { "name": "Molecular biology" },
            { "name": "Molecular mechanics" },
            { "name": "Nanotechnology" },
            { "name": "Natural product chemistry" },
            { "name": "Neurochemistry" },
            { "name": "Oenology" },
            { "name": "Organic chemistry" },
            { "name": "Organometallic chemistry" },
            { "name": "Petrochemistry" },
            { "name": "Pharmacology" },
            { "name": "Photochemistry" },
            { "name": "Physical chemistry" },
            { "name": "Physical organic chemistry" },
            { "name": "Phytochemistry" },
            { "name": "Polymer chemistry" },
            { "name": "Quantum chemistry" },
            { "name": "Radiochemistry" },
            { "name": "Solid-state chemistry" },
            { "name": "Sonochemistry" },
            { "name": "Supramolecular chemistry" },
            { "name": "Surface chemistry" },
            { "name": "Synthetic chemistry" },
            { "name": "Theoretical chemistry" },
            { "name": "Thermochemistry" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 3.3 Earth science",
          "children": [
            { "name": "Edaphology" },
            { "name": "Environmental chemistry" },
            { "name": "Environmental science" },
            { "name": "Gemology" },
            { "name": "Geochemistry" },
            { "name": "Geodesy" },
            {
              "name": "Physical geography",
              "children": [
                { "name": "Atmospheric science / Meteorology" },
                { "name": "Biogeography / Phytogeography" },
                { "name": "Climatology / Paleoclimatology / Palaeogeography" },
                { "name": "Coastal geography / Oceanography" },
                { "name": "Edaphology / Pedology or Soil science" },
                { "name": "Geobiology" },
                { "name": "Geology (Geomorphology, Mineralogy, Petrology, Sedimentology, Speleology, Tectonics, Volcanology)" },
                { "name": "Geostatistics" },
                { "name": "Glaciology" },
                { "name": "Hydrology/ Limnology / Hydrogeology" },
                { "name": "Landscape ecology" },
                { "name": "Quaternary science" },
              ]
            },
            { "name": "Geophysics" },
            {
              "name": "Paleontology",
              "children": [
                { "name": "Paleobiology" },
                { "name": "Paleoecology" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 3.4 Space science",
          "children": [
            { "name": "Astrobiology" },
            {
              "name": "Astronomy",
              "children": [
                {
                  "name": "Observational astronomy",
                  "children": [
                    { "name": "Gamma ray astronomy" },
                    { "name": "Infrared astronomy" },
                    { "name": "Microwave astronomy" },
                    { "name": "Optical astronomy" },
                    { "name": "Radio astronomy" },
                    { "name": "UV astronomy" },
                    { "name": "X-ray astronomy" },
                  ]
                },
              ]
            },
            {
              "name": "Astrophysics",
              "children": [
                {
                  "name": "Gravitational astronomy",
                  "children": [
                    { "name": "Black holes" },
                  ]
                },
              ]
            },
            {
              "name": "Cosmology",
              "children": [
                { "name": "Physical cosmology" },
              ]
            },
            { "name": "Interstellar medium" },
            {
              "name": "Numerical simulations",
              "children": [
                { "name": "Astrophysical plasma" },
                { "name": "Galaxy formation and evolution" },
                { "name": "High-energy astrophysics" },
                { "name": "Hydrodynamics" },
                { "name": "Magnetohydrodynamics" },
                { "name": "Star formation" },
              ]
            },
            {
              "name": "Stellar astrophysics",
              "children": [
                { "name": "Helioseismology" },
                { "name": "Stellar evolution" },
                { "name": "Stellar nucleosynthesis" },
              ]
            },
            { "name": "Planetary science" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 3.5 Physics",
          "children": [
            { "name": "Acoustics" },
            { "name": "Aerodynamics" },
            { "name": "Applied physics" },
            { "name": "Astrophysics" },
            { "name": "Atomic, molecular, and optical physics" },
            { "name": "Biophysics" },
            { "name": "Computational physics" },
            { "name": "Condensed matter physics" },
            { "name": "Cryogenics" },
            { "name": "Electricity" },
            { "name": "Electromagnetism" },
            { "name": "Elementary particle physics" },
            { "name": "Experimental physics" },
            { "name": "Fluid dynamics" },
            { "name": "Geophysics" },
            { "name": "Mathematical physics" },
            { "name": "Mechanics" },
            { "name": "Medical physics" },
            { "name": "Molecular physics" },
            { "name": "Newtonian dynamics" },
            { "name": "Nuclear physics" },
            { "name": "Optics" },
            { "name": "Plasma physics" },
            { "name": "Quantum physics" },
            { "name": "Solid mechanics" },
            { "name": "Solid state physics" },
            { "name": "Statistical mechanics" },
            { "name": "Theoretical physics" },
            { "name": "Thermal physics" },
            { "name": "Thermodynamics" },
          ]
        },

        // =========================================================================================================== //

      ]
    },

    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

    {
      "name": "📘 4 Formal science",
      "children": [

        // =========================================================================================================== //

        {
          "name": "👉 4.1 Computer science",
          "children": [
            {
              "name": "Logic in computer science",
              "children": [
                { "name": "Formal methods (Formal verification)" },
                { "name": "Logic programming" },
                {
                  "name": "Multi-valued logic",
                  "children": [
                    { "name": "Fuzzy logic" },
                  ]
                },
                { "name": "Programming language semantics" },
                { "name": "Type theory" },
              ]
            },
            {
              "name": "Algorithms",
              "children": [
                { "name": "Computational geometry" },
                { "name": "Distributed algorithms" },
                { "name": "Parallel algorithms" },
                { "name": "Randomized algorithms" },
              ]
            },
            {
              "name": "Artificial intelligence",
              "children": [
                {
                  "name": "Cognitive science",
                  "children": [
                    { "name": "Automated reasoning" },
                    { "name": "Computer vision" },
                    {
                      "name": "Machine learning",
                      "children": [
                        { "name": "Artificial neural networks" },
                      ]
                    },
                    { "name": "Natural language processing (Computational linguistics)" },
                  ]
                },
                { "name": "Expert systems" },
                { "name": "Robotics" },
              ]
            },
            { "name": "Data structures" },
            { "name": "Computer architecture" },
            {
              "name": "Computer graphics",
              "children": [
                { "name": "Image processing" },
                { "name": "Scientific visualization" },
              ]
            },
            {
              "name": "Computer communications (networks)",
              "children": [
                { "name": "Cloud computing" },
                { "name": "Information theory" },
                { "name": "Internet, World Wide Web" },
                { "name": "Ubiquitous computing" },
                { "name": "Wireless computing (Mobile computing)" },
              ]
            },
            {
              "name": "Computer security and reliability",
              "children": [
                { "name": "Cryptography" },
                { "name": "Fault-tolerant computing" },
              ]
            },
            {
              "name": "Computing in mathematics, natural sciences, engineering, and medicine",
              "children": [
                { "name": "Algebraic (symbolic) computation" },
                { "name": "Computational biology (bioinformatics)" },
                { "name": "Computational chemistry" },
                { "name": "Computational mathematics" },
                { "name": "Computational neuroscience" },
                { "name": "Computational number theory" },
                { "name": "Computational physics" },
                {
                  "name": "Computer-aided engineering",
                  "children": [
                    { "name": "Computational fluid dynamics" },
                    { "name": "Finite element analysis" },
                  ]
                },
                { "name": "Numerical analysis" },
                { "name": "Scientific computing (Computational science)" },
              ]
            },
            {
              "name": "Computing in social sciences, arts, humanities, and professions",
              "children": [
                { "name": "Community informatics" },
                { "name": "Computational economics" },
                { "name": "Computational finance" },
                { "name": "Computational sociology" },
                { "name": "Digital humanities (Humanities computing)" },
                { "name": "History of computer hardware" },
                { "name": "History of computer science" },
                { "name": "Humanistic informatics" },
                {
                  "name": "Databases",
                  "children": [
                    { "name": "Distributed databases" },
                    { "name": "Object databases" },
                    { "name": "Relational databases" },
                  ]
                },
                { "name": "Data management" },
                { "name": "Data mining" },
                { "name": "Information architecture" },
                { "name": "Information management" },
                { "name": "Information retrieval" },
                { "name": "Knowledge management" },
                {
                  "name": "Multimedia, hypermedia",
                  "children": [
                    { "name": "Sound and music computing" },
                  ]
                },
              ]
            },
            {
              "name": "Distributed computing",
              "children": [
                { "name": "Grid computing" },
              ]
            },
            { "name": "Human-computer interaction" },
            { "name": "Operating systems" },
            {
              "name": "Parallel computing",
              "children": [
                { "name": "High-performance computing" },
              ]
            },
            {
              "name": "Programming languages",
              "children": [
                { "name": "Compilers" },
                {
                  "name": "Programming paradigms",
                  "children": [
                    { "name": "Concurrent programming" },
                    { "name": "Functional programming" },
                    { "name": "Imperative programming" },
                    { "name": "Logic programming" },
                    { "name": "Object-oriented programming" },
                  ]
                },
                { "name": "Program semantics" },
                { "name": "Type theory" },
              ]
            },
            { "name": "Quantum computing" },
            {
              "name": "Software engineering",
              "children": [
                { "name": "Formal methods (Formal verification)" },
              ]
            },
            {
              "name": "Theory of computation",
              "children": [
                { "name": "Automata theory (Formal languages)" },
                { "name": "Computability theory" },
                { "name": "Computational complexity theory" },
                { "name": "Concurrency theory" },
              ]
            },
            { "name": "VLSI design" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 4.2 Pure Mathematics",
          "children": [
            {
              "name": "Mathematical logic and Foundations of mathematics",
              "children": [
                { "name": "Intuitionistic logic" },
                { "name": "Modal logic" },
                { "name": "Model theory" },
                { "name": "Proof theory" },
                { "name": "Recursion theory" },
                { "name": "Set theory" },
              ]
            },
            {
              "name": "Algebra",
              "children": [
                { "name": "Associative algebra" },
                {
                  "name": "Category theory",
                  "children": [
                    { "name": "Topos theory" },
                  ]
                },
                { "name": "Differential algebra" },
                { "name": "Field theory" },
                {
                  "name": "Group theory",
                  "children": [
                    { "name": "Group representation" },
                  ]
                },
                { "name": "Homological algebra" },
                { "name": "K-theory" },
                { "name": "Lattice theory (Order theory)" },
                { "name": "Lie algebra" },
                { "name": "Linear algebra (Vector space)" },
                { "name": "Multilinear algebra" },
                { "name": "Non-associative algebra" },
                { "name": "Representation theory" },
                {
                  "name": "Ring theory",
                  "children": [
                    { "name": "Commutative algebra" },
                    { "name": "Noncommutative algebra" },
                  ]
                },
                { "name": "Universal algebra" },
              ]
            },
            {
              "name": "Analysis",
              "children": [
                { "name": "Complex analysis" },
                {
                  "name": "Functional analysis",
                  "children": [
                    { "name": "Operator theory" },
                  ]
                },
                {
                  "name": "Harmonic analysis",
                  "children": [
                    { "name": "Fourier analysis" },
                  ]
                },
                { "name": "Non-standard analysis" },
                { "name": "Ordinary differential equations" },
                { "name": "p-adic analysis" },
                { "name": "Partial differential equations" },
                {
                  "name": "Real analysis",
                  "children": [
                    { "name": "Calculus" },
                  ]
                },
              ]
            },
            {
              "name": "Probability theory",
              "children": [
                { "name": "Ergodic theory" },
                {
                  "name": "Measure theory",
                  "children": [
                    { "name": "Integral geometry" },
                  ]
                },
                { "name": "Stochastic process" },
              ]
            },
            {
              "name": "Geometry and Topology",
              "children": [
                { "name": "Affine geometry" },
                { "name": "Algebraic geometry" },
                { "name": "Algebraic topology" },
                { "name": "Convex geometry" },
                { "name": "Differential topology" },
                { "name": "Discrete geometry" },
                { "name": "Finite geometry" },
                { "name": "Galois geometry" },
                { "name": "General topology" },
                { "name": "Geometric topology" },
                { "name": "Integral geometry" },
                { "name": "Noncommutative geometry" },
                { "name": "Non-Euclidean geometry" },
                { "name": "Projective geometry" },
              ]
            },
            {
              "name": "Number theory",
              "children": [
                { "name": "Algebraic number theory" },
                { "name": "Analytic number theory" },
                { "name": "Arithmetic combinatorics" },
                { "name": "Geometric number theory" },
              ]
            },
          ]
        },

        {
          "name": "👉 4.3 Applied Mathematics",
          "children": [
            { "name": "Approximation theory" },
            {
              "name": "Combinatorics",
              "children": [
                { "name": "Coding theory" },
              ]
            },
            { "name": "Cryptography" },
            {
              "name": "Dynamical systems",
              "children": [
                { "name": "Chaos theory" },
                { "name": "Fractal geometry" },
              ]
            },
            { "name": "Game theory" },
            { "name": "Graph theory" },
            { "name": "Information theory" },
            {
              "name": "Mathematical physics",
              "children": [
                { "name": "Quantum field theory" },
                {
                  "name": "Quantum gravity",
                  "children": [
                    { "name": "String theory" },
                  ]
                },
                { "name": "Quantum mechanics" },
                { "name": "Statistical mechanics" },
              ]
            },
            { "name": "Numerical analysis" },
            {
              "name": "Operations research",
              "children": [
                { "name": "Assignment problem" },
                { "name": "Decision analysis" },
                { "name": "Dynamic programming" },
                { "name": "Inventory theory" },
                { "name": "Linear programming" },
                { "name": "Mathematical optimization" },
                { "name": "Optimal maintenance" },
                { "name": "Real options analysis" },
                { "name": "Scheduling" },
                { "name": "Stochastic processes" },
                { "name": "Systems analysis" },
              ]
            },
            {
              "name": "Statistics",
              "children": [
                { "name": "Actuarial science" },
                { "name": "Demography" },
                { "name": "Econometrics" },
                { "name": "Mathematical statistics" },
                { "name": "Data visualization" },
              ]
            },
            {
              "name": "Theory of computation",
              "children": [
                { "name": "Computational complexity theory" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

      ]
    },

    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

    {
      "name": "📙 5 Applied science",
      "children": [

        // =========================================================================================================== //

        {
          "name": "👉 5.1 Agriculture",
          "children": [
            { "name": "Aeroponics" },
            { "name": "Agroecology" },
            { "name": "Agrology" },
            { "name": "Agronomy" },
            {
              "name": "Animal husbandry (Animal science)",
              "children": [
                { "name": "Beekeeping (Apiculture)" },
              ]
            },
            { "name": "Anthroponics" },
            { "name": "Agricultural economics" },
            {
              "name": "Agricultural engineering",
              "children": [
                { "name": "Biological systems engineering" },
                { "name": "Food engineering" },
              ]
            },
            { "name": "Aquaculture" },
            { "name": "Aquaponics" },
            { "name": "Enology" },
            { "name": "Entomology" },
            { "name": "Fogponics" },
            {
              "name": "Food science",
              "children": [
                { "name": "Culinary arts" },
              ]
            },
            { "name": "Forestry" },
            { "name": "Horticulture" },
            { "name": "Hydrology" },
            { "name": "Hydroponics" },
            { "name": "Pedology" },
            {
              "name": "Plant science",
              "children": [
                { "name": "Pomology" },
              ]
            },
            { "name": "Pest control" },
            { "name": "Purification" },
            { "name": "Viticulture" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.2 Architecture and design",
          "children": [
            {
              "name": "Architecture",
              "children": [
                { "name": "Interior architecture" },
                { "name": "Landscape architecture" },
              ]
            },
            { "name": "Architectural analytics" },
            { "name": "Historic preservation" },
            { "name": "Interior design (interior architecture)" },
            { "name": "Landscape architecture (landscape planning)" },
            { "name": "Landscape design" },
            { "name": "Urban planning (urban design)" },
            {
              "name": "Visual communication",
              "children": [
                {
                  "name": "Graphic design",
                  "children": [
                    { "name": "Type design" },
                  ]
                },
                { "name": "Technical drawing" },
              ]
            },
            {
              "name": "Industrial design (product design)",
              "children": [
                { "name": "Ergonomics" },
                { "name": "Toy and amusement design" },
              ]
            },
            {
              "name": "User experience design",
              "children": [
                { "name": "Interaction design" },
                { "name": "Information architecture" },
                { "name": "User interface design" },
                { "name": "User experience evaluation" },
              ]
            },
            { "name": "Decorative arts" },
            { "name": "Fashion design" },
            { "name": "Textile design" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.3 Business",
          "children": [
            {
              "name": "Accounting",
              "children": [
                { "name": "Accounting research" },
                { "name": "Accounting scholarship" },
              ]
            },
            { "name": "Business administration" },
            { "name": "Business analysis" },
            { "name": "Business ethics" },
            { "name": "Business law" },
            { "name": "Business management" },
            { "name": "E-Business" },
            { "name": "Entrepreneurship" },
            { "name": "Finance" },
            {
              "name": "Industrial and labor relations",
              "children": [
                { "name": "Collective bargaining" },
                { "name": "Human resources" },
                { "name": "Organizational studies" },
                { "name": "Labor economics" },
                { "name": "Labor history" },
              ]
            },
            {
              "name": "Information systems (Business informatics)",
              "children": [
                { "name": "Management information systems" },
                { "name": "Health informatics" },
              ]
            },
            { "name": "Information technology" },
            { "name": "International trade" },
            { "name": "Management" },
            { "name": "Marketing" },
            { "name": "Operations management" },
            { "name": "Purchasing" },
            { "name": "Risk management and insurance" },
            { "name": "Systems science" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.4 Divinity",
          "children": [
            { "name": "Canon law" },
            { "name": "Church history" },
            {
              "name": "Field ministry",
              "children": [
                { "name": "Pastoral counseling" },
                { "name": "Pastoral theology" },
                { "name": "Religious education techniques" },
                { "name": "Homiletics" },
                { "name": "Liturgy" },
                { "name": "Sacred music" },
                { "name": "Missiology" },
              ]
            },
            { "name": "Hermeneutics" },
            {
              "name": "Scriptural study and languages",
              "children": [
                { "name": "Biblical Hebrew" },
                { "name": "Biblical studies/Sacred scripture" },
                { "name": "Vedic Study" },
                { "name": "New Testament Greek" },
                { "name": "Latin" },
                { "name": "Old Church Slavonic" },
              ]
            },
            {
              "name": "Theology",
              "children": [
                { "name": "Dogmatic theology" },
                { "name": "Ecclesiology" },
                { "name": "Sacramental theology" },
                { "name": "Systematic theology" },
                { "name": "Christian ethics" },
                { "name": "Hindu ethics" },
                { "name": "Moral theology" },
                { "name": "Historical theology" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.5 Education",
          "children": [
            { "name": "Comparative education" },
            { "name": "Critical pedagogy" },
            {
              "name": "Curriculum and instruction",
              "children": [
                { "name": "Alternative education" },
                { "name": "Early childhood education" },
                { "name": "Elementary education" },
                { "name": "Secondary education" },
                { "name": "Higher education" },
                { "name": "Mastery learning" },
                { "name": "Cooperative learning" },
                { "name": "Agricultural education" },
                { "name": "Art education" },
                { "name": "Bilingual education" },
                { "name": "Chemistry education" },
                { "name": "Counselor education" },
                { "name": "Language education" },
                { "name": "Legal education" },
                { "name": "Mathematics education" },
                { "name": "Medical education" },
                { "name": "Military education and training" },
                { "name": "Music education" },
                { "name": "Nursing education" },
                { "name": "Outdoor education" },
                { "name": "Peace education" },
                { "name": "Physical education/Sports coaching" },
                { "name": "Physics education" },
                { "name": "Reading education" },
                { "name": "Religious education" },
                { "name": "Science education" },
                { "name": "Special education" },
                { "name": "Sex education" },
                { "name": "Sociology of education" },
                { "name": "Technology education" },
                { "name": "Vocational education" },
              ]
            },
            { "name": "Educational leadership" },
            { "name": "Educational philosophy" },
            { "name": "Educational psychology" },
            { "name": "Educational technology" },
            { "name": "Distance education" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.6 Engineering and technology",
          "children": [
            {
              "name": "Chemical Engineering",
              "children": [
                {
                  "name": "Bioengineering",
                  "children": [
                    { "name": "Biochemical engineering" },
                    { "name": "Biomolecular engineering" },
                  ]
                },
                { "name": "Catalysis" },
                { "name": "Materials engineering" },
                { "name": "Molecular engineering" },
                { "name": "Nanotechnology" },
                { "name": "Polymer engineering" },
                {
                  "name": "Process design",
                  "children": [
                    { "name": "Petroleum engineering" },
                    { "name": "Nuclear engineering" },
                    { "name": "Food engineering" },
                  ]
                },
                { "name": "Process engineering" },
                { "name": "Reaction engineering" },
                { "name": "Thermodynamics" },
                { "name": "Transport phenomena" },
              ]
            },
            {
              "name": "Civil Engineering",
              "children": [
                { "name": "Coastal engineering" },
                { "name": "Earthquake engineering" },
                { "name": "Ecological engineering" },
                { "name": "Environmental engineering" },
                {
                  "name": "Geotechnical engineering",
                  "children": [
                    { "name": "Engineering geology" },
                  ]
                },
                { "name": "Hydraulic engineering" },
                { "name": "Mining engineering" },
                {
                  "name": "Transportation engineering",
                  "children": [
                    { "name": "Highway engineering" },
                  ]
                },
                {
                  "name": "Structural engineering",
                  "children": [
                    { "name": "Architectural engineering" },
                  ]
                },
                { "name": "Structural mechanics" },
                { "name": "Surveying" },
              ]
            },
            {
              "name": "Educational Technology",
              "children": [
                {
                  "name": "Instructional design",
                  "children": [
                    { "name": "Distance education" },
                    { "name": "Instructional simulation" },
                  ]
                },
                { "name": "Human performance technology" },
                { "name": "Knowledge management" },
              ]
            },
            {
              "name": "Electrical Engineering",
              "children": [
                { "name": "Applied physics" },
                { "name": "Computer engineering" },
                { "name": "Computer science" },
                {
                  "name": "Control systems engineering",
                  "children": [
                    { "name": "Control theory" },
                  ]
                },
                {
                  "name": "Electronic engineering",
                  "children": [
                    { "name": "Instrumentation engineering" },
                  ]
                },
                {
                  "name": "Engineering physics",
                  "children": [
                    { "name": "Photonics" },
                  ]
                },
                { "name": "Information theory" },
                { "name": "Mechatronics" },
                { "name": "Power engineering" },
                { "name": "Quantum computing" },
                { "name": "Robotics" },
                { "name": "Semiconductors" },
                { "name": "Telecommunications engineering" },
              ]
            },
            {
              "name": "Materials Science and Engineering",
              "children": [
                { "name": "Biomaterials" },
                { "name": "Ceramic engineering" },
                { "name": "Crystallography" },
                { "name": "Nanomaterials" },
                { "name": "Photonics" },
                { "name": "Physical Metallurgy" },
                { "name": "Polymer engineering" },
                { "name": "Polymer science" },
                { "name": "Semiconductors" },
              ]
            },
            {
              "name": "Mechanical Engineering",
              "children": [
                {
                  "name": "Aerospace engineering",
                  "children": [
                    { "name": "Aeronautics" },
                    { "name": "Astronautics" },
                  ]
                },
                { "name": "Acoustical engineering" },
                { "name": "Automotive engineering" },
                {
                  "name": "Biomedical engineering",
                  "children": [
                    { "name": "Biomechanical engineering" },
                    { "name": "Neural engineering" },
                  ]
                },
                { "name": "Continuum mechanics" },
                { "name": "Fluid mechanics" },
                { "name": "Heat transfer" },
                { "name": "Industrial engineering" },
                { "name": "Manufacturing engineering" },
                { "name": "Marine engineering" },
                { "name": "Mass transfer" },
                { "name": "Mechatronics" },
                { "name": "Nanoengineering" },
                { "name": "Ocean engineering" },
                { "name": "Optical engineering" },
                { "name": "Robotics" },
                { "name": "Thermodynamics" },
              ]
            },
            {
              "name": "Systems science",
              "children": [
                { "name": "Chaos theory" },
                { "name": "Complex systems" },
                { "name": "Conceptual systems" },
                {
                  "name": "Control theory",
                  "children": [
                    { "name": "Affect control theory" },
                    { "name": "Control engineering" },
                    { "name": "Control systems" },
                    { "name": "Dynamical systems" },
                    { "name": "Perceptual control theory" },
                  ]
                },
                {
                  "name": "Cybernetics",
                  "children": [
                    { "name": "Biocybernetics" },
                    { "name": "Engineering cybernetics" },
                    { "name": "Management cybernetics" },
                    { "name": "Medical cybernetics" },
                    { "name": "New Cybernetics" },
                    { "name": "Second-order cybernetics" },
                    { "name": "Sociocybernetics" },
                  ]
                },
                { "name": "Network science" },
                { "name": "Operations research" },
                {
                  "name": "Systems biology",
                  "children": [
                    { "name": "Computational systems biology" },
                    { "name": "Synthetic biology" },
                    { "name": "Systems immunology" },
                    { "name": "Systems neuroscience" },
                  ]
                },
                {
                  "name": "System dynamics",
                  "children": [
                    { "name": "Social dynamics" },
                  ]
                },
                {
                  "name": "Systems ecology",
                  "children": [
                    { "name": "Ecosystem ecology" },
                  ]
                },
                {
                  "name": "Systems engineering",
                  "children": [
                    { "name": "Biological systems engineering" },
                    { "name": "Earth systems engineering and management" },
                    { "name": "Enterprise systems engineering" },
                    { "name": "Systems analysis" },
                  ]
                },
                {
                  "name": "Systems psychology",
                  "children": [
                    { "name": "Ergonomics" },
                    { "name": "Family systems theory" },
                    { "name": "Systemic therapy" },
                  ]
                },
                {
                  "name": "Systems theory",
                  "children": [
                    { "name": "Biochemical systems theory" },
                    { "name": "Ecological systems theory" },
                    { "name": "Developmental systems theory" },
                    { "name": "General systems theory" },
                    { "name": "Living systems theory" },
                    { "name": "LTI system theory" },
                    { "name": "Mathematical system theory" },
                    { "name": "Sociotechnical systems theory" },
                    { "name": "World-systems theory" },
                  ]
                },
                { "name": "Systems theory in anthropology" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.7 Environmental studies and forestry",
          "children": [
            {
              "name": "Environmental management",
              "children": [
                { "name": "Coastal management" },
                { "name": "Fisheries management" },
                { "name": "Land management" },
                { "name": "Natural resource management" },
                { "name": "Waste management" },
                { "name": "Wildlife management" },
              ]
            },
            { "name": "Environmental policy" },
            { "name": "Wildlife observation" },
            { "name": "Recreation ecology" },
            { "name": "Silviculture" },
            {
              "name": "Sustainability studies",
              "children": [
                { "name": "Sustainable development" },
              ]
            },
            { "name": "Toxicology" },
            { "name": "Ecology" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.8 Family and consumer science",
          "children": [
            { "name": "Consumer education" },
            { "name": "Housing" },
            { "name": "Interior design" },
            {
              "name": "Nutrition",
              "children": [
                { "name": "Foodservice management" },
              ]
            },
            { "name": "Textiles" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.9 Human physical performance and recreation",
          "children": [
            { "name": "Biomechanics / Sports biomechanics" },
            { "name": "Sports coaching" },
            { "name": "Escapology" },
            { "name": "Ergonomics" },
            {
              "name": "Physical fitness",
              "children": [
                { "name": "Aerobics" },
                { "name": "Personal trainer / Personal fitness training" },
              ]
            },
            { "name": "Game design" },
            { "name": "Exercise physiology" },
            { "name": "Kinesiology / Exercise physiology / Performance science" },
            { "name": "Leisure studies" },
            { "name": "Navigation" },
            { "name": "Outdoor activity" },
            { "name": "Physical activity" },
            { "name": "Physical education / Pedagogy" },
            { "name": "Sociology of sport" },
            { "name": "Sexology" },
            { "name": "Sports / exercise" },
            { "name": "Sports journalism / sportscasting" },
            {
              "name": "Sport management",
              "children": [
                { "name": "Athletic director" },
              ]
            },
            { "name": "Sport psychology" },
            {
              "name": "Sports medicine",
              "children": [
                { "name": "Athletic training" },
              ]
            },
            {
              "name": "Survival skills",
              "children": [
                { "name": "Batoning" },
                { "name": "Bushcraft" },
                { "name": "Scoutcraft" },
                { "name": "Woodcraft" },
              ]
            },
            { "name": "Toy and amusement design" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.10 Journalism, media studies and communication",
          "children": [
            {
              "name": "Journalism",
              "children": [
                { "name": "Broadcast journalism" },
                { "name": "Digital journalism" },
                { "name": "Literary journalism" },
                { "name": "New media journalism" },
                { "name": "Print journalism" },
                { "name": "Sports journalism / sportscasting" },
              ]
            },
            {
              "name": "Media studies (Mass media)",
              "children": [
                { "name": "Newspaper" },
                { "name": "Magazine" },
                { "name": "Radio" },
                {
                  "name": "Television",
                  "children": [
                    { "name": "Television studies" },
                  ]
                },
                {
                  "name": "Film",
                  "children": [
                    { "name": "Film studies" },
                  ]
                },
                { "name": "Game studies" },
                { "name": "Fan studies" },
              ]
            },
            {
              "name": "Narratology",
              "children": [
                { "name": "Internet" },
              ]
            },
            {
              "name": "Communication studies",
              "children": [
                { "name": "Advertising" },
                { "name": "Animal communication" },
                { "name": "Communication design" },
                { "name": "Conspiracy theory" },
                { "name": "Digital media" },
                { "name": "Electronic media" },
                { "name": "Environmental communication" },
                { "name": "Hoax" },
                { "name": "Information theory" },
                { "name": "Intercultural communication" },
                { "name": "Marketing" },
                { "name": "Mass communication" },
                { "name": "Nonverbal communication" },
                { "name": "Organizational communication" },
                { "name": "Popular culture studies" },
                { "name": "Propaganda" },
                { "name": "Public relations" },
                { "name": "Speech communication" },
                { "name": "Technical writing" },
                { "name": "Translation" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.11 Law",
          "children": [
            {
              "name": "Legal management",
              "children": [
                { "name": "Corporate law" },
                { "name": "Mercantile law" },
                { "name": "Business law" },
              ]
            },
            { "name": "Administrative law" },
            { "name": "Canon law" },
            { "name": "Comparative law" },
            { "name": "Constitutional law" },
            { "name": "Competition law" },
            {
              "name": "Criminal law",
              "children": [
                { "name": "Criminal procedure" },
                {
                  "name": "Criminal justice",
                  "children": [
                    { "name": "Police science" },
                    { "name": "Forensic science" },
                  ]
                },
              ]
            },
            { "name": "Islamic law" },
            { "name": "Jewish law" },
            { "name": "Jurisprudence (Philosophy of Law)" },
            {
              "name": "Civil law",
              "children": [
                { "name": "Admiralty law" },
                { "name": "Animal law/Animal rights" },
                { "name": "Common law" },
                { "name": "Corporations" },
                { "name": "Civil procedure" },
                { "name": "Contract law" },
                { "name": "Environmental law" },
                { "name": "Family law" },
                { "name": "Federal law" },
                {
                  "name": "International law",
                  "children": [
                    { "name": "Public international law" },
                    { "name": "Supranational law" },
                  ]
                },
                { "name": "Labor law" },
                { "name": "Paralegal studies" },
                { "name": "Property law" },
                { "name": "Tax law" },
                { "name": "Tort law" },
              ]
            },
            { "name": "Law enforcement" },
            { "name": "Procedural law" },
            { "name": "Substantive law" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.12 Library and museum studies",
          "children": [
            { "name": "Archival science" },
            { "name": "Archivist" },
            { "name": "Bibliographic databases" },
            { "name": "Bibliometrics" },
            { "name": "Bookmobile" },
            {
              "name": "Cataloging",
              "children": [
                { "name": "Citation analysis" },
              ]
            },
            { "name": "Categorization" },
            {
              "name": "Classification",
              "children": [
                { "name": "Library classification" },
                { "name": "Taxonomic classification" },
                { "name": "Scientific classification" },
                { "name": "Statistical classification" },
                { "name": "Security classification" },
                { "name": "Film classification" },
              ]
            },
            { "name": "Collections care" },
            { "name": "Collection management" },
            { "name": "Collection Management Policy" },
            { "name": "Conservation science" },
            { "name": "Conservation and restoration of cultural heritage" },
            { "name": "Curator" },
            { "name": "Data storage" },
            { "name": "Database management" },
            { "name": "Data modeling" },
            { "name": "Digital preservation" },
            { "name": "Dissemination" },
            { "name": "Film preservation" },
            { "name": "Five laws of library science" },
            { "name": "Historic preservation" },
            { "name": "History of library science" },
            { "name": "Human-computer interaction" },
            { "name": "Indexer" },
            { "name": "Informatics" },
            { "name": "Information architecture" },
            { "name": "Information broker" },
            { "name": "Information literacy" },
            { "name": "Information retrieval" },
            { "name": "Information science" },
            { "name": "Information systems and technology" },
            { "name": "Integrated library system" },
            { "name": "Interlibrary loan" },
            { "name": "Knowledge engineering" },
            { "name": "Knowledge management" },
            { "name": "Library" },
            { "name": "Library binding" },
            { "name": "Library circulation" },
            { "name": "Library instruction" },
            { "name": "Library portal" },
            { "name": "Library technical services" },
            { "name": "Management" },
            { "name": "Mass deacidification" },
            { "name": "Museology" },
            {
              "name": "Museum education",
              "children": [
                { "name": "Museum administration" },
              ]
            },
            { "name": "Object conservation" },
            { "name": "Preservation" },
            { "name": "Prospect research" },
            { "name": "Readers' advisory" },
            { "name": "Records management" },
            { "name": "Reference" },
            { "name": "Reference desk" },
            { "name": "Reference management software" },
            { "name": "Registrar" },
            { "name": "Research methods" },
            { "name": "Slow fire" },
            { "name": "Special library" },
            { "name": "Statistics" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.13 Medicine and health",
          "children": [
            { "name": "Alternative medicine" },
            { "name": "Audiology" },
            {
              "name": "Clinical laboratory sciences/Clinical pathology/Laboratory medicine",
              "children": [
                { "name": "Clinical biochemistry" },
                { "name": "Cytogenetics" },
                { "name": "Cytohematology" },
                { "name": "Cytology" },
                { "name": "Haemostasiology" },
                { "name": "Histology" },
                { "name": "Clinical immunology" },
                { "name": "Clinical microbiology" },
                { "name": "Molecular genetics" },
                { "name": "Parasitology" },
              ]
            },
            { "name": "Clinical physiology" },
            {
              "name": "Dentistry",
              "children": [
                { "name": "Dental hygiene and epidemiology" },
                { "name": "Dental surgery" },
                { "name": "Endodontics" },
                { "name": "Implantology" },
                { "name": "Oral and maxillofacial surgery" },
                { "name": "Orthodontics" },
                { "name": "Periodontics" },
                { "name": "Prosthodontics" },
              ]
            },
            { "name": "Dermatology" },
            { "name": "Emergency medicine" },
            { "name": "Epidemiology" },
            { "name": "Geriatrics" },
            { "name": "Gynaecology" },
            { "name": "Health informatics/Clinical informatics" },
            { "name": "Hematology" },
            { "name": "Holistic medicine" },
            { "name": "Infectious disease" },
            { "name": "Intensive care medicine" },
            {
              "name": "Internal medicine",
              "children": [
                {
                  "name": "Cardiology",
                  "children": [
                    { "name": "Cardiac electrophysiology" },
                  ]
                },
                { "name": "Endocrinology" },
                { "name": "Gastroenterology" },
                { "name": "Hepatology" },
                { "name": "Nephrology" },
                { "name": "Neurology" },
                { "name": "Oncology" },
                { "name": "Pulmonology" },
                { "name": "Rheumatology" },
              ]
            },
            { "name": "Medical toxicology" },
            { "name": "Music therapy" },
            { "name": "Nursing" },
            { "name": "Nutrition and dietetics" },
            { "name": "Obstetrics" },
            { "name": "Occupational hygiene" },
            { "name": "Occupational therapy" },
            { "name": "Occupational toxicology" },
            {
              "name": "Ophthalmology",
              "children": [
                { "name": "Neuro-ophthalmology" },
              ]
            },
            { "name": "Optometry" },
            { "name": "Otolaryngology" },
            { "name": "Pathology" },
            { "name": "Pediatrics" },
            {
              "name": "Pharmaceutical sciences",
              "children": [
                { "name": "Pharmaceutical chemistry" },
                { "name": "Pharmaceutical toxicology" },
                { "name": "Pharmaceutics" },
                { "name": "Pharmacocybernetics" },
                { "name": "Pharmacodynamics" },
                { "name": "Pharmacogenomics" },
                { "name": "Pharmacognosy" },
                { "name": "Pharmacokinetics" },
                { "name": "Pharmacology" },
                { "name": "Pharmacy" },
              ]
            },
            {
              "name": "Physical fitness",
              "children": [
                { "name": "Group Fitness / aerobics" },
                { "name": "Kinesiology / Exercise science / Human performance" },
                { "name": "Personal fitness training" },
              ]
            },
            { "name": "Physical therapy" },
            { "name": "Physiotherapy" },
            { "name": "Podiatry" },
            { "name": "Preventive medicine" },
            {
              "name": "Primary care",
              "children": [
                { "name": "General practice" },
              ]
            },
            {
              "name": "Psychiatry",
              "children": [
                { "name": "Forensic psychiatry" },
              ]
            },
            { "name": "Psychology" },
            { "name": "Public health" },
            { "name": "Radiology" },
            { "name": "Recreational therapy" },
            { "name": "Rehabilitation medicine" },
            { "name": "Respiratory therapy" },
            { "name": "Sleep medicine" },
            { "name": "Speech–language pathology" },
            { "name": "Sports medicine" },
            {
              "name": "Surgery",
              "children": [
                { "name": "Bariatric surgery" },
                { "name": "Cardiothoracic surgery" },
                { "name": "Neurosurgery" },
                { "name": "Orthoptics" },
                { "name": "Orthopedic surgery" },
                { "name": "Plastic surgery" },
                { "name": "Trauma surgery" },
                { "name": "Traumatology" },
              ]
            },
            { "name": "Traditional medicine" },
            {
              "name": "Urology",
              "children": [
                { "name": "Andrology" },
              ]
            },
            { "name": "Veterinary medicine" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.14 Military sciences",
          "children": [
            { "name": "Amphibious warfare" },
            { "name": "Artillery" },
            {
              "name": "Battlespace",
              "children": [
                { "name": "Air" },
                { "name": "Information" },
                { "name": "Land" },
                { "name": "Sea" },
                { "name": "Space" },
              ]
            },
            { "name": "Campaigning" },
            { "name": "Military engineering" },
            { "name": "Doctrine" },
            { "name": "Espionage" },
            { "name": "Game theory" },
            {
              "name": "Grand strategy",
              "children": [
                { "name": "Containment" },
                { "name": "Limited war" },
                { "name": "Military science" },
                { "name": "Philosophy of war" },
                { "name": "Strategic studies" },
                { "name": "Total war" },
                { "name": "War" },
              ]
            },
            { "name": "Leadership" },
            {
              "name": "Logistics",
              "children": [
                { "name": "Materiel" },
                { "name": "Supply chain management" },
              ]
            },
            { "name": "Military operation" },
            {
              "name": "Military history",
              "children": [
                { "name": "Prehistoric" },
                { "name": "Ancient" },
                { "name": "Medieval" },
                { "name": "Early modern" },
                { "name": "Industrial" },
                { "name": "Modern" },
                { "name": "Fourth-generation warfare" },
              ]
            },
            { "name": "Military intelligence" },
            { "name": "Military law" },
            { "name": "Military medicine" },
            {
              "name": "Naval science",
              "children": [
                { "name": "Naval engineering" },
                { "name": "Naval tactics" },
                { "name": "Naval architecture" },
              ]
            },
            {
              "name": "Organization",
              "children": [
                { "name": "Command and control" },
                { "name": "Doctrine" },
                { "name": "Education and training" },
                { "name": "Engineers" },
                { "name": "Intelligence" },
                { "name": "Ranks" },
                { "name": "Staff" },
                { "name": "Technology and equipment" },
                { "name": "Military exercises" },
                { "name": "Military simulation" },
                { "name": "Military sports" },
              ]
            },
            {
              "name": "Strategy",
              "children": [
                { "name": "Attrition" },
                { "name": "Deception" },
                { "name": "Defensive" },
                { "name": "Offensive" },
                { "name": "Counter-offensive" },
                { "name": "Maneuver" },
                { "name": "Goal" },
                { "name": "Naval" },
              ]
            },
            {
              "name": "Tactics",
              "children": [
                { "name": "Aerial" },
                { "name": "Battle" },
                { "name": "Cavalry" },
                { "name": "Charge" },
                { "name": "Counter-attack" },
                { "name": "Counter-insurgency" },
                { "name": "Counter-intelligence" },
                { "name": "Counter-terrorism" },
                { "name": "Foxhole" },
                { "name": "Endemic warfare" },
                { "name": "Guerrilla warfare" },
                { "name": "Infiltration" },
                { "name": "Irregular warfare" },
                { "name": "Morale" },
                { "name": "Naval tactics" },
                { "name": "Siege" },
                { "name": "Surgical strike" },
                { "name": "Tactical objective" },
                { "name": "Trench warfare" },
              ]
            },
            {
              "name": "Military weapons",
              "children": [
                { "name": "Armor" },
                { "name": "Artillery" },
                { "name": "Biological" },
                { "name": "Cavalry" },
                { "name": "Conventional" },
                { "name": "Chemical" },
                { "name": "Cyber" },
                { "name": "Economic" },
                { "name": "Electronic" },
                { "name": "Infantry" },
                { "name": "Nuclear" },
                { "name": "Psychological" },
                { "name": "Unconventional" },
              ]
            },
            {
              "name": "Other Military",
              "children": [
                { "name": "Arms control" },
                { "name": "Arms race" },
                { "name": "Assassination" },
                { "name": "Asymmetric warfare" },
                { "name": "Civil defense" },
                { "name": "Clandestine operation" },
                { "name": "Collateral damage" },
                { "name": "Cold war (general term)" },
                { "name": "Combat" },
                { "name": "Covert operation" },
                { "name": "Cyberwarfare" },
                { "name": "Defense industry" },
                { "name": "Disarmament" },
                { "name": "Intelligence agency" },
                { "name": "Laws of war" },
                { "name": "Mercenary" },
                { "name": "Military campaign" },
                { "name": "Military operation" },
                { "name": "Mock combat" },
                { "name": "Network-centric warfare" },
                { "name": "Paramilitary" },
                { "name": "Principles of war" },
                { "name": "Private defense agency" },
                { "name": "Private military company" },
                { "name": "Proxy war" },
                { "name": "Religious war" },
                { "name": "Security" },
                { "name": "Special forces" },
                { "name": "Special operations" },
                { "name": "Theater (warfare)" },
                { "name": "Theft" },
                { "name": "Undercover" },
                { "name": "War crimes" },
                { "name": "Warrior" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.15 Public administration",
          "children": [
            { "name": "Civil service" },
            { "name": "Corrections" },
            { "name": "Conservation biology" },
            { "name": "Criminal justice" },
            { "name": "Disaster research" },
            { "name": "Disaster response" },
            { "name": "Emergency management" },
            { "name": "Emergency services" },
            { "name": "Fire safety (Structural fire protection)" },
            { "name": "Fire ecology (Wildland fire management)" },
            { "name": "Governmental affairs" },
            { "name": "International affairs" },
            { "name": "Law enforcement" },
            { "name": "Peace and conflict studies" },
            { "name": "Police science" },
            {
              "name": "Policy studies",
              "children": [
                { "name": "Policy analysis" },
              ]
            },
            {
              "name": "Public administration",
              "children": [
                { "name": "Nonprofit administration" },
                { "name": "Non-governmental organization (NGO) administration" },
                { "name": "Public policy doctrine" },
                { "name": "Public policy school" },
                { "name": "Regulation" },
              ]
            },
            { "name": "Public safety" },
            { "name": "Public service" },
            {
              "name": "Public policy",
              "children": [
                { "name": "Agricultural policy" },
                { "name": "Commercial policy" },
                { "name": "Cultural policy" },
                { "name": "Domestic policy" },
                {
                  "name": "Drug policy",
                  "children": [
                    { "name": "Drug policy reform" },
                  ]
                },
                {
                  "name": "Economic policy",
                  "children": [
                    { "name": "Fiscal policy" },
                    { "name": "Incomes policy" },
                    { "name": "Industrial policy" },
                    { "name": "Investment policy" },
                    { "name": "Monetary policy" },
                    { "name": "Tax policy" },
                  ]
                },
                { "name": "Education policy" },
                {
                  "name": "Energy policy",
                  "children": [
                    { "name": "Nuclear energy policy" },
                    { "name": "Renewable energy policy" },
                  ]
                },
                { "name": "Environmental policy" },
                { "name": "Food policy" },
                { "name": "Foreign policy" },
                {
                  "name": "Health policy",
                  "children": [
                    { "name": "Pharmaceutical policy" },
                    { "name": "Vaccination policy" },
                  ]
                },
                { "name": "Housing policy" },
                { "name": "Immigration policy" },
                { "name": "Knowledge policy" },
                { "name": "Language policy" },
                { "name": "Military policy" },
                {
                  "name": "Science policy",
                  "children": [
                    { "name": "Climate change policy" },
                    { "name": "Stem cell research policy" },
                    { "name": "Space policy" },
                    { "name": "Technology policy" },
                  ]
                },
                { "name": "Security policy" },
                { "name": "Social policy" },
                { "name": "Public policy by country" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.16 Social work",
          "children": [
            { "name": "Child welfare" },
            {
              "name": "Community practice",
              "children": [
                { "name": "Community organizing" },
                { "name": "Social policy" },
              ]
            },
            { "name": "Human Services" },
            { "name": "Corrections" },
            { "name": "Gerontology" },
            { "name": "Medical social work" },
            { "name": "Mental health" },
            { "name": "School social work" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.17 Transportation",
          "children": [
            { "name": "Highway safety" },
            { "name": "Infographics" },
            { "name": "Intermodal transportation studies" },
            { "name": "Logistics" },
            {
              "name": "Marine transportation",
              "children": [
                { "name": "Port management" },
                { "name": "Seafaring" },
              ]
            },
            { "name": "Operations research" },
            { "name": "Mass transit" },
            { "name": "Travel" },
            { "name": "Vehicles" },
          ]
        },

        // =========================================================================================================== //

      ]
    },


    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

  ]
};

class MyTree_academic_detail {
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
      let nodes = this.var_tree_academic_detail(this.root);
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
    this.var_tree_academic_detail = var_tree_academic_detail().size([this.width, this.height]);
    // this.tree = tree().nodeSize([0, 30]);
    this.var_tree_academic_detail = var_tree_academic_detail().nodeSize([0, 30]);
    this.root = this.var_tree_academic_detail(var_hierarchy_academic_detail(var_data_academic_detail));
    this.root.each((d) => {
      d.name = d.id; //transferring name to a name variable
      d.id = this.i; //Assigning numerical Ids
      this.i++;
    });
    this.root.x0 = this.root.x;
    this.root.y0 = this.root.y;
    this.svg = var_select_academic_detail('.hierarchy-container-academic-detail').append('svg')
      .attr('width', this.width + this.margin.right + this.margin.left)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    // this.root.children.forEach(this.collapse);
    this.update(this.root);
  }
}
;
let myTree_academic_detail = new MyTree_academic_detail();
myTree_academic_detail.$onInit();