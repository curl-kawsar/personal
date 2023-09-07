const { ref } = Vue;

const app = Vue.createApp({
  setup() {
    const filter = ref("");
    const filterRef = ref(null);

    // 1️⃣ ATUR NODE YANG TERBUKA PERTAMA KALI
    let nilai = ref([
      "User Experience (UX) design",
      "1 Foundations of UX design",
      "2 UX Design Process: Empathize, Define, Ideate",
    ])

    // 2️⃣ ATUR DEFAULT NODE YANG TERBUKA (SAMA KAYA POINT 1 DI ATAS)
    function defaultNode(nilai) {
      let node = [
        "User Experience (UX) design",
        "1 Foundations of UX design",
        "2 UX Design Process: Empathize, Define, Ideate",
      ]

      setTimeout(() => { nilai.tree.collapseAll() }, 100);                // tutup seluruh node
      setTimeout(() => { nilai.tree.setExpanded(node[0], true) }, 100);   // true/buka node "User Experience (UX) design"
      setTimeout(() => { nilai.tree.setExpanded(node[1], true) }, 100);   // true/buka node "1 Foundations of UX design"
      setTimeout(() => { nilai.tree.setExpanded(node[2], true) }, 100);   // true/buka node "2 UX Design Process: Empathize, Define, Ideate"
    }

    // 3️⃣ JIKA DIPERLUKAN GUNAKAN TOGGLE UNTUK NODE TERTENTU
    function toggleNode(nilai) {
      let node = "User Experience (UX) design"
      nilai.tree.isExpanded(node) === true ? nilai.tree.setExpanded(node, false) : nilai.tree.setExpanded(node, true)
    }

    return {
      filter,
      filterRef,
      defaultNode,
      toggleNode,

      // ⚠️ PEMBAGIAN (SPLIT) TREE 50% & DETAIL 50% 
      // 🔴 GANTI LAGI KE 50 🔴
      splitterModel: ref(50),

      // ⚠️ NODE YANG AKTIF (SELECTED) PERTAMA KALI
      selected: ref("User Experience (UX) design"),

      // ⚠️ NODE YANG TERBUKA (EXPANDED) PERTAMA KALI
      expanded: nilai,

      simple: [
        {
          label: "User Experience (UX) design",
          avatar: "../assets/ux/general/ux-headline.png",
          children: [

            /* -------------------------------------------------------------------------- */
            /*                              ANCHOR CONTENT A                              */
            /* -------------------------------------------------------------------------- */

            {
              label: "1 Foundations of UX design",
              avatar: "../assets/ux/general/ux-course-1.png",
              children: [
                {
                  label: "1.1 UX Careers",
                  icon: "feed",
                  children: [
                    { label: "Interaction designer ⇢" },
                    { label: "Visual designer ⇢" },
                    { label: "Motion designer ⇢" },
                    { label: "VR/AR designer ⇢" },
                    { label: "UX researcher ⇢" },
                    { label: "UX writer ⇢" },
                    { label: "UX program manager ⇢" },
                    { label: "UX engineer ⇢" },
                    { label: "Conversation designer ⇢" },
                  ]
                },
                {
                  label: "1.2 Product development life cycle",
                  icon: "feed",
                  children: [
                    { label: "Brainstrom ⇢" },
                    { label: "Define ⇢" },
                    { label: "Design ⇢" },
                    { label: "Test ⇢" },
                    { label: "Launch ⇢" },
                  ]
                },
                {
                  label: "1.3 Characteristics of a good UX",
                  icon: "feed",
                  children: [
                    { label: "Usable ⇢" },
                    { label: "Equitable ⇢" },
                    { label: "Enjoyable ⇢" },
                    { label: "Useful ⇢" },
                  ]
                },
                {
                  label: "1.4 Types of companies",
                  icon: "feed",
                  children: [
                    { label: "Startups and small business ⇢" },
                    { label: "Big companies ⇢" },
                    { label: "Design agencies ⇢" },
                    { label: "Advertising agencies ⇢" },
                    { label: "Freelancers ⇢" },
                  ]
                },
                {
                  label: "1.5 Design frameworks",
                  icon: "feed",
                  children: [
                    {
                      label: "User-centered design process",
                      children: [
                        { label: "Understand how the user experiences the product ⇢" },
                        { label: "Specify the user’s needs ⇢" },
                        { label: "Design solutions to those user problems ⇢" },
                        { label: "Evaluate solutions against the user’s needs ⇢" },
                      ]
                    },
                    {
                      label: "The five elements of UX design",
                      children: [
                        { label: "Strategy ⇢" },
                        { label: "Scope ⇢" },
                        { label: "Structure ⇢" },
                        { label: "Skeleton ⇢" },
                        { label: "Surface ⇢" },
                      ]
                    },
                    {
                      label: "Design thinking process 🔥",
                      children: [
                        { label: "Empathize ⇢" },
                        { label: "Define ⇢" },
                        { label: "Ideate ⇢" },
                        { label: "Prototype ⇢" },
                        { label: "Test ⇢" },
                      ]
                    },
                    {
                      label: "Think like a designer",
                      children: [
                        {
                          label: "Lean UX",
                          children: [
                            { label: "Think ⇢" },
                            { label: "Make ⇢" },
                            { label: "Check ⇢" },
                          ]
                        },
                        {
                          label: "Double diamond",
                          children: [
                            { label: "Discover the problem ⇢" },
                            { label: "Define the problem ⇢" },
                            { label: "Develop solutions for the problems ⇢" },
                            { label: "Deliver the product ⇢" },
                          ]
                        },
                      ]
                    },
                  ]
                },
                {
                  label: "1.6 Key considerations when designing for various platforms",
                  icon: "feed",
                  children: [
                    { label: "Screen size ⇢" },
                    { label: "Interaction ⇢" },
                    { label: "Content layout ⇢" },
                    { label: "Functionality ⇢" },
                    {
                      label: "The four Cs",
                      children: [
                        { label: "Consistency ⇢" },
                        { label: "Continuity ⇢" },
                        { label: "Context ⇢" },
                        { label: "Complementary ⇢" },
                      ]
                    },
                  ]
                },
                {
                  label: "1.7 Globally accessible products",
                  icon: "feed",
                  children: [
                    {
                      label: "Awareness is everything",
                      children: [
                        { label: "Learn about global user communities and how they use technology ⇢" },
                        { label: "Be mindful about representing users inclusively ⇢" },
                        { label: "Accommodate different levels of literacy and many different languages ⇢" },
                        { label: "Empower your users when it comes to privacy, safety, and security ⇢" },
                      ]
                    },
                    {
                      label: "Context matters",
                      children: [
                        { label: "Build great user experiences for modest devices ⇢" },
                        { label: "Ensure that your app functions seamlessly in intermittent networks—and when offline ⇢" },
                        { label: "Keep usage costs low ⇢" },
                        { label: "Treat accessibility settings as critical, not just as a checklist ⇢" },
                      ]
                    },
                    {
                      label: "Be inclusive by default",
                      children: [
                        { label: "Consider environmental contrasts like sun and shade ⇢" },
                        { label: "Color has meaning—use it wisely ⇢" },
                        { label: "Design for various screen conditions and input abilities ⇢" },
                        { label: "Go big: Larger tap/touch targets ⇢" },
                      ]
                    },
                  ]
                },
                {
                  label: "1.8 Design sprints",
                  icon: "feed",
                  children: [
                    {
                      label: "Planning",
                      children: [
                        { label: "Scope and structuring ⇢" },
                        { label: "Gather research and data ⇢" },
                        { label: "Prepare and set the tone ⇢" },
                        { label: "Post sprint ⇢" },
                      ]
                    },
                    {
                      label: "Methodology",
                      children: [
                        { label: "Understand ⇢" },
                        { label: "Define ⇢" },
                        { label: "Sketch ⇢" },
                        { label: "Decide ⇢" },
                        { label: "Prototype ⇢" },
                        { label: "Validate ⇢" },
                      ]
                    },
                    {
                      label: "Retrospective",
                      children: [
                        { label: "What went well? ⇢" },
                        { label: "What can be improved? ⇢" },
                        { label: "Lessons learned ⇢" },
                      ]
                    },
                  ]
                },
                {
                  label: "1.9 Create a portfolio",
                  icon: "feed",
                  children: [
                    {
                      label: "Website builder",
                      children: [
                        { label: "Squarespace ⇢" },
                        { label: "Webflow ⇢" },
                        { label: "Wix ⇢" },
                        { label: "Google sites ⇢" },
                      ]
                    },
                    {
                      label: "Plan your portfolio website",
                      children: [
                        { label: "Name and personal logo ⇢" },
                        { label: "Navigation menu ⇢" },
                        { label: "Work samples ⇢" },
                        { label: "About me (Interests, experiences, passions) ⇢" },
                        { label: "Contact information (Email, resume link, online profiles link: LinkedIn, etc) ⇢" },
                        { label: "Color scheme (One primary color and one accent color) ⇢" },
                      ]
                    },
                    {
                      label: "Personal branding",
                      children: [
                        {
                          label: "Consistency is key",
                          children: [
                            { label: "Oprah Winfrey is strongly associated with inspiration and hope ⇢" },
                            { label: "Sarah Cooper is tied to satirical comedy ⇢" },
                            { label: "Bill Nye is famous for learning science in a fun way ⇢" },
                          ]
                        },
                        {
                          label: "Develop personal brand",
                          children: [
                            { label: "Create a personal logo ⇢" },
                            { label: "Make the most of fonts and colors ⇢" },
                            { label: "Keep your voice consistent ⇢" },
                            { label: "Use graphics, animations, and photography ⇢" },
                            { label: "Be yourself ⇢" },
                          ]
                        },
                      ]
                    },
                    {
                      label: "Create an online profiles",
                      children: [
                        { label: "Your name ⇢" },
                        { label: "Your education, including certificate program ⇢" },
                        { label: "Your work experience or interests ⇢" },
                        { label: "Your skills & qualifications ⇢" },
                        { label: "Outstanding achievements ⇢" },
                        { label: "A professional photo of yourself ⇢" },
                        { label: "Contact & links to social media profiles ⇢" },
                      ]
                    },
                  ]
                },
                {
                  label: "1.10 Networking",
                  icon: "feed",
                  children: [
                    {
                      label: "Where to meet professionals/mentor?",
                      children: [
                        { label: "Online (LinkedIn, Medium, Dribbble, etc) ⇢" },
                        { label: "In person (Lectures, seminars, certificate program, etc) ⇢" },
                      ]
                    },
                    {
                      label: "How to reach out?",
                      children: [
                        { label: "Fill out and update your profile ⇢" },
                        { label: "Introducte yourself with a personalized message ⇢" },
                        { label: "Keep it short ⇢" },
                        { label: "Don't ask for a job ⇢" },
                        { label: "Be clear about what you want ⇢" },
                        { label: "Say thank you ⇢" },
                      ]
                    },
                  ]
                },
                {
                  label: "1.11 Impostor syndrome",
                  icon: "feed",
                  children: [
                    {
                      label: "Effects",
                      children: [
                        { label: "Impostor syndrome is the belief that you’re unskilled, inferior to others, or bad at your job, despite your successes ⇢" },
                        { label: "Not applying to jobs unless you meet every requirement ⇢" },
                        { label: "Taking on extra work to make sure you’re “doing it all” and to look more capable in front of your peers ⇢" },
                        { label: "Not attending networking events or career fairs because you’re nervous or anxious ⇢" },
                        { label: "Downplaying your abilities during conversations ⇢" },
                        { label: "Shrugging off compliments because you don’t believe them ⇢" },
                      ]
                    },
                    {
                      label: "How to manage?",
                      children: [
                        { label: "Acknowledge your thoughts ⇢" },
                        { label: "Own your accomplishments ⇢" },
                        { label: "Be honest with yourself ⇢" },
                        { label: "Have a conversation ⇢" },
                        { label: "Wear something that makes you feel confident ⇢" },
                        { label: "Help someone else ⇢" },
                        { label: "Fake it till you make it ⇢" },
                        { label: "Go with a friend ⇢" },
                        { label: "Get to know people ⇢" },
                        { label: "Know that you're not alone ⇢" },
                      ]
                    },
                  ]
                },
              ]
            },

            /* -------------------------------------------------------------------------- */
            /*                              ANCHOR CONTENT B                              */
            /* -------------------------------------------------------------------------- */

            {
              label: "2 UX Design Process: Empathize, Define, Ideate",
              avatar: "../assets/ux/general/ux-course-2.png",
              children: [
                {
                  label: "2.1 UX research",
                  icon: "feed",
                  children: [
                    { label: "Foundational research" },
                    { label: "Design research" },
                    { label: "Post launch research" },
                  ]
                },
                {
                  label: "2.2 Types of research",
                  icon: "feed",
                  children: [
                    {
                      label: "Based on who conducts the research",
                      children: [
                        {
                          label: "Primary research",
                          children: [
                            { label: "Interviews" },
                            { label: "Surveys" },
                            { label: "Usability Studies" },
                            { label: "Competitive audit" },
                          ]
                        },
                        {
                          label: "Secondary research",
                          children: [
                            { label: "Online data" },
                            { label: "Data from Government and Non-government Archives" },
                            { label: "Data from Libraries" },
                            { label: "Data from Institutions of Learning" },
                          ]
                        },
                      ]
                    },
                    {
                      label: "Based on the type of data collected",
                      children: [
                        { label: "Qualitative research" },
                        { label: "Quantitative research" },
                      ]
                    },
                  ]
                },
                {
                  label: "2.3 Preventing bias in data collection",
                  icon: "feed",
                  children: [
                    { label: "Choose your words carefully" },
                    { label: "Foster independent thinking" },
                    { label: "Avoid specific language" },
                    { label: "Limit the guidance you give users" },
                    { label: "Consider users' tone and body language" },
                    { label: "Be careful of your own body language and reactions" },
                    { label: "Plan your research effectively" },
                    { label: "Remain open minded" },
                  ]
                },
                {
                  label: "2.4 How to empathize with users",
                  icon: "feed",
                  children: [
                    { label: "Ask lots of questions" },
                    { label: "Become more observant" },
                    { label: "Be an active listener" },
                    { label: "Request input" },
                    { label: "Have an open minded" },
                    { label: "Keep current on UX research" },
                    { label: "Empathize vs. Sympathy" },
                  ]
                },
                {
                  label: "2.5 Conduct user interviews",
                  icon: "feed",
                  children: [
                    { label: "Determine interview goals" },
                    { label: "Determine target participant characteristics" },
                    { label: "Find & reach out research participants" },
                    { label: "Write interview questions ✅" },
                    {
                      label: "Conduct user interview instructions",
                      children: [
                        {
                          label: "Prepare for the interview",
                          children: [
                            { label: "Script interview questions" },
                            { label: "Collect supplies" },
                            { label: "Research the users" },
                            { label: "Practice" },
                          ]
                        },
                        {
                          label: "Meet the participant",
                          children: [
                            { label: "Build a rapport" },
                            { label: "Thanks users for coming" },
                            { label: "Gather basic details" },
                          ]
                        },
                        {
                          label: "Conduct the interview",
                          children: [
                            { label: "Follow interview etiquette" },
                            { label: "Ask open-ended questions" },
                          ]
                        },
                        {
                          label: "Take notes",
                          children: [
                            { label: "Highlight compelling quotes" },
                            { label: "Document observations about participants" },
                            { label: "Record interviews" },
                          ]
                        },
                        {
                          label: "End the interview",
                          children: [
                            { label: "Give users a chance to share their final thoughts" },
                            { label: "Thank participants once more" },
                          ]
                        },
                      ]
                    },
                    {
                      label: "Creating an empathy map ✅",
                      children: [
                        { label: "User says" },
                        { label: "User thinks" },
                        { label: "User does" },
                        { label: "User feels" },
                      ]
                    },
                  ]
                },
                {
                  label: "2.6 Identify user pain points",
                  icon: "feed",
                  children: [
                    { label: "Financial" },
                    { label: "Product" },
                    { label: "Process" },
                    { label: "Support" },
                  ]
                },
                {
                  label: "2.7 Building personas ✅",
                  icon: "feed",
                  children: [
                    { label: "Demographic information" },
                    { label: "Quote" },
                    { label: "Goals/Frustations" },
                    { label: "Brief story/scnenario" },
                    { label: "Image" },
                  ]
                },
                {
                  label: "2.8 Build a user story ✅",
                  icon: "feed",
                  children: [
                    { label: "As a ... (type of user / who)" },
                    { label: "I want to ... (action / what)" },
                    { label: "So that ... (benefit / why)" },
                  ]
                },
                {
                  label: "2.9 Build a user journey maps ✅",
                  icon: "feed",
                  children: [
                    { label: "Action" },
                    { label: "Task list" },
                    { label: "Feeling adjective" },
                    { label: "Improvement opportunities" },
                  ]
                },
                {
                  label: "2.10 Consider accessibility during user research",
                  icon: "feed",
                  children: [
                    {
                      label: "Considerations",
                      children: [
                        { label: "Touch" },
                        { label: "See" },
                        { label: "Hear" },
                        { label: "Speak" },
                      ]
                    },
                    { label: "Assistive technologies" },
                    { label: "Putting inclusive design" },
                  ]
                },
                {
                  label: "2.11 Define a statements ✅ ",
                  icon: "feed",
                  children: [
                    {
                      label: "Problem statement",
                      children: [
                        { label: "(user name) is a (user characteristics) who needs (user need) because (insight)" },
                      ]
                    },
                    {
                      label: "Hypothesis statement",
                      children: [
                        { label: "If/then format: If (action) then (outcome)" },
                        { label: "We believe format: We believe that (solution) for (user) will (outcome)" },
                      ]
                    },
                    {
                      label: "Goal statement",
                      children: [
                        { label: "Our (product / what) will let users (perform specific action / what)" },
                        { label: "which will affect (describe who the action will affect / who)" },
                        { label: "by (describe how the action will positively affect users / why)" },
                        { label: "We will measure effectiveness by (describe how you will measure the impact)" },
                      ]
                    },
                  ]
                },
                {
                  label: "2.12 Build a value propositions ✅",
                  icon: "feed",
                  children: [
                    { label: "Answer these: What does your product do? Why should the user care?" },
                    { label: "Describe your product's features and benefits" },
                    { label: "Explain the value of the products" },
                    { label: "Connect these features and benefits with the needs of our users" },
                    { label: "Review your official value proposition list" },
                  ]
                },
                {
                  label: "2.13 Preparing for ideation",
                  icon: "feed",
                  children: [
                    { label: "Empathize with your user" },
                    { label: "Define the problem" },
                    { label: "Establish a creative environment" },
                    { label: "Set a time limit" },
                    { label: "Assemble a diverse team" },
                    { label: "Think outside the box" },
                  ]
                },
                {
                  label: "2.14 Conduct competitive research ✅",
                  icon: "feed",
                  children: [
                    {
                      label: "Why is this important?",
                      children: [
                        { label: "Giving you an idea of products already in the market and their designs." },
                        { label: "Suggesting ideas to solve early problems that you’re facing with your own designs." },
                        { label: "Revealing the ways that current products in the market are not meeting users’ needs. This is a gap for your product to address!" },
                        { label: "Demonstrating the expected life cycle of a product in the same market as yours." },
                        { label: "Informing all the different iterations your product could take and how those performed for your competitors." },
                      ]
                    },
                    {
                      label: "Conduct competitive research instructions",
                      children: [
                        {
                          label: "Outline the audit goals",
                          children: [
                            { label: "Needs work" },
                            { label: "Okay" },
                            { label: "Good" },
                            { label: "Outstanding" },
                          ]
                        },
                        {
                          label: "List competitors",
                          children: [
                            { label: "Direct competitors" },
                            { label: "Indirect competitors" },
                          ]
                        },
                        {
                          label: "Determine the specific competitor aspects you want to compare",
                          children: [
                            { label: "Audience" },
                            { label: "First impression" },
                            { label: "Interaction" },
                            { label: "Visual design" },
                            { label: "Content" },
                          ]
                        },
                        { label: "Research each company" },
                        { label: "Summarize your findings in a report" },
                      ]
                    },
                    {
                      label: "Competitive audit report (answer these)",
                      children: [
                        { label: "Competitive audit goal(s)" },
                        { label: "Who are your key competitors?" },
                        { label: "What are the type and quality of competitors' products?" },
                        { label: "How do competitors position themselves in the market?" },
                        { label: "How do competitors talk about themselves?" },
                        { label: "Competitors' strengths" },
                        { label: "Competitors' weaknesses" },
                        { label: "Gaps" },
                        { label: "Opportunities" },
                      ]
                    },
                    {
                      label: "Present a competitive audit",
                      children: [
                        { label: "Get feedback from your team" },
                        { label: "Limit the amount of text on your slides" },
                        { label: "Stick to the highlights" },
                        { label: "Use notes" },
                        { label: "Practice ahead of time" },
                        { label: "Use relevant graphics" },
                        { label: "Keep your biases is check" },
                        { label: "Be able to defend your conclusions" },
                      ]
                    },
                  ]
                },
                {
                  label: "2.15 Brainstorm design ideas",
                  icon: "feed",
                  children: [
                    {
                      label: "Frame HMW (How might we) questions",
                      children: [
                        { label: "Amp up the good" },
                        { label: "Explore the opposite" },
                        { label: "Change a status quo" },
                        { label: "Break the point-of-view into pieces" },
                        { label: "Remove the bad" },
                        { label: "Go after the adjective" },
                        { label: "Question an assumption" },
                        { label: "Create an analogy using the established need or context" },
                        { label: "Indetify unexpected resources that can provide assistance" },
                      ]
                    },
                    {
                      label: "Crazy Eights ✅",
                      children: [
                        { label: "Identify your problem scenario" },
                        { label: "Provide an image of your Crazy Eights drawing" },
                        { label: "Describe at least three of the ideas you generated with your Crazy Eights activity" },
                      ]
                    },
                  ]
                },
              ]
            },

            /* -------------------------------------------------------------------------- */
            /*                              ANCHOR CONTENT C                              */
            /* -------------------------------------------------------------------------- */

            /* -------------------------------------------------------------------------- */
            /*                              ANCHOR CONTENT D                              */
            /* -------------------------------------------------------------------------- */

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