const { ref } = Vue;

const app = Vue.createApp({
  setup() {
    const filter = ref("");
    const filterRef = ref(null);

    // 1️⃣ ATUR NODE YANG TERBUKA PERTAMA KALI
    let nilai = ref([
      "User experience design (UXD) ⇢",
      "1 Foundations of UX design",
      "2 UX Design Process: Empathize, Define, Ideate",
    ])

    // 2️⃣ ATUR DEFAULT NODE YANG TERBUKA (SAMA KAYA POINT 1 DI ATAS)
    function defaultNode(nilai) {
      let node = [
        "User experience design (UXD) ⇢",
        "1 Foundations of UX design",
        "2 UX Design Process: Empathize, Define, Ideate",
      ]

      setTimeout(() => { nilai.tree.collapseAll() }, 100);                // tutup seluruh node
      setTimeout(() => { nilai.tree.setExpanded(node[0], true) }, 100);   // true/buka node "UXD"
      setTimeout(() => { nilai.tree.setExpanded(node[1], true) }, 100);   // true/buka node "1 Foundations of UX design"
      setTimeout(() => { nilai.tree.setExpanded(node[2], true) }, 100);   // true/buka node "2 UX Design Process: Empathize, Define, Ideate"
    }

    // 3️⃣ JIKA DIPERLUKAN GUNAKAN TOGGLE UNTUK NODE TERTENTU
    function toggleNode(nilai) {
      let node = "User experience design (UXD) ⇢"
      nilai.tree.isExpanded(node) === true ? nilai.tree.setExpanded(node, false) : nilai.tree.setExpanded(node, true)
    }

    return {
      filter,
      filterRef,
      defaultNode,
      toggleNode,

      // ⚠️ PEMBAGIAN (SPLIT) TREE 50% & DETAIL 50% 
      // 🔴 GANTI LAGI KE 50 🔴
      splitterModel: ref(40),

      // ⚠️ NODE YANG AKTIF (SELECTED) PERTAMA KALI
      selected: ref("User experience design (UXD) ⇢"),

      // ⚠️ NODE YANG TERBUKA (EXPANDED) PERTAMA KALI
      expanded: nilai,

      customize: [
        {
          label: "User experience design (UXD) ⇢",
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
                  label: "1.1 Introducing UX design",
                  icon: "feed",
                  children: [
                    {
                      label: "Study tips ⇢",
                      children: [
                        { label: "Plan your time ⇢" },
                        { label: "Learn in order ⇢" },
                        { label: "Be curious ⇢" },
                        { label: "Take notes ⇢" },
                        { label: "Chat with other learners ⇢" },
                      ]
                    },
                    {
                      label: "UX resources ⇢",
                      children: [
                        { label: "Interaction Design Foundation ⇢" },
                        { label: "Adobe XD Ideas ⇢" },
                        { label: "UX Collective ⇢" },
                        { label: "Nielsen Norman Group ⇢" },
                        { label: "User Experience Database ⇢" },
                      ]
                    },
                    {
                      label: "UX careers ⇢",
                      children: [
                        { label: "Interaction designer ⇢" },
                        { label: "Visual designer ⇢" },
                        { label: "Motion designer ⇢" },
                        { label: "VR/AR designer ⇢" },
                        { label: "UX researcher ⇢" },
                        { label: "UX writer ⇢" },
                        { label: "UX program manager ⇢" },
                        { label: "UX engineer ⇢" },
                        { label: "Production designer ⇢" },
                        { label: "Conversation designer ⇢" },
                      ]
                    },
                    {
                      label: "Product development life cycle ⇢",
                      children: [
                        { label: "Brainstorm ⇢" },
                        { label: "Define ➀ ⇢" },
                        { label: "Design ➀ ⇢" },
                        {
                          label: "Test ⇢",
                          children: [
                            { label: "Alpha testing" },
                            { label: "Beta testing" },
                          ]
                        },
                        { label: "Launch ⇢" },
                      ]
                    },
                    {
                      label: "Characteristics of a good UX 📋 ⇢",
                      children: [
                        { label: "Usable ⇢" },
                        { label: "Equitable ⇢" },
                        { label: "Enjoyable ⇢" },
                        { label: "Useful ⇢" },
                      ]
                    },
                    {
                      label: "Types of UX designer ⇢",
                      children: [
                        { label: "Generalist ⇢" },
                        { label: "Specialist ⇢" },
                        { label: "T-shaped ⇢" },
                      ]
                    },
                    {
                      label: "Types of companies that hire UX designer ⇢",
                      children: [
                        { label: "Startups and small businesses ⇢" },
                        { label: "Big companies ⇢" },
                        { label: "Design agencies ⇢" },
                        { label: "Advertising agencies ⇢" },
                        { label: "Freelancers ➀ ⇢" },
                      ]
                    },
                    {
                      label: "Pursue a career in UXD",
                      children: [
                        { label: "Internship ⇢" },
                        { label: "Apprenticeships ⇢" },
                        { label: "Freelancers ➁ ⇢" },
                        { label: "Entry-level jobs ⇢" },
                      ]
                    },
                  ]
                },
                {
                  label: "1.2 Thinking like a UX designer",
                  icon: "feed",
                  children: [
                    {
                      label: "Important terms",
                      children: [
                        { label: "User ⇢" },
                        { label: "End user ⇢" },
                        { label: "Potential user ⇢" },
                        { label: "Who are my users? ⇢" },
                      ]
                    },
                    {
                      label: "User first in your design",
                      children: [
                        { label: "Universal design ⇢" },
                        {
                          label: "Inclusive design ⇢",
                          children: [
                            { label: "Accessibility" },
                          ]
                        },
                        {
                          label: "Equity-focused design ⇢",
                          children: [
                            { label: "Equality vs. equity" },
                          ]
                        },
                      ]
                    },
                    {
                      label: "Assistive technology ⇢",
                      children: [
                        { label: "Color modification ⇢" },
                        { label: "Voice control ⇢" },
                        { label: "Screen readers ⇢" },
                        { label: "Alternative text ⇢" },
                        { label: "Speech to text ⇢" },
                      ]
                    },
                    {
                      label: "Design frameworks ⇢",
                      children: [
                        {
                          label: "User-centered design (UCD) ⇢",
                          children: [
                            { label: "Understand ⇢" },
                            { label: "Specify ⇢" },
                            { label: "Design ➁ ⇢" },
                            { label: "Evaluate ⇢" },
                          ]
                        },
                        {
                          label: "The five elements of UXD ⇢",
                          children: [
                            { label: "Strategy ⇢" },
                            { label: "Scope ⇢" },
                            { label: "Structure ⇢" },
                            { label: "Skeleton ⇢" },
                            { label: "Surface ⇢" },
                          ]
                        },
                        {
                          label: "Design thinking ✅ ⇢",
                          children: [
                            { label: "Emphatize ⇢" },
                            { label: "Define ➁ ⇢" },
                            { label: "Ideate ⇢" },
                            { label: "Prototype & Test ⇢" },
                          ]
                        },
                        {
                          label: "Lean UX ⇢",
                          children: [
                            { label: "Think ⇢" },
                            { label: "Make ⇢" },
                            { label: "Check ⇢" },
                          ]
                        },
                        {
                          label: "Double diamond ⇢",
                          children: [
                            { label: "Discover the problem ⇢" },
                            { label: "Define the problem ⇢" },
                            { label: "Develop solutions ⇢" },
                            { label: "Deliver the product ⇢" },
                          ]
                        },
                      ]
                    },
                    {
                      label: "Common platforms",
                      children: [
                        { label: "Desktop computers" },
                        { label: "Laptop computers" },
                        { label: "Mobile phones" },
                        { label: "Tablets" },
                        { label: "Wearables (e.g. smartwatches)" },
                        { label: "TVs" },
                        { label: "Smart displays" },
                      ]
                    },
                    {
                      label: "Key considerations when designing for different platforms",
                      body: 'story',
                      story: 'Note: Design should be responsive to the devices',
                      children: [
                        { label: "Screen size" },
                        { label: "Interaction" },
                        { label: "Content layout" },
                        { label: "Functionality" },
                      ]
                    },
                    {
                      label: "The four Cs of designing for multiple platforms",
                      body: 'story',
                      story: 'Note: Users behave differently depending on their device',
                      children: [
                        {
                          label: "Consistency",
                          body: 'story',
                          story: 'Have a specific design guidelines (Consistent with brand identity)',
                        },
                        {
                          label: "Continuity",
                          body: 'story',
                          story: 'Ability to maintain progress when switching platform',
                        },
                        {
                          label: "Context",
                          body: 'story',
                          story: 'Certain features on different platforms',
                        },
                        {
                          label: "Complementary",
                          body: 'story',
                          story: 'Each platform adds something new for the user',
                        },
                      ]
                    },
                    {
                      label: "Designing for mobile UX",
                      body: 'story',
                      story: 'Note: Mobile device usage has been booming',
                      children: [
                        { label: "Call-to-action buttons should be placed front and center" },
                        { label: "Navigation menus should be short and simple" },
                        { label: "Gestures should be intuitive and familiar: tapping & swiping" },
                        { label: "Design for both: Potrait and horizontal landscape view" },
                        { label: "Reduce visual clutter: Keep the visual experience simple" },
                      ]
                    },
                    {
                      label: "Designing for Global Accessibility",
                      body: 'story',
                      story: 'Best practice: Read the Accessibility Guide for Google Material',
                      children: [
                        { label: "Learn about global user communities and how they use technology" },
                        { label: "Be mindful about representing users inclusively" },
                        { label: "Accommodate different levels of literacy and many different languages" },
                        { label: "Empower your users when it comes to privacy, safety, and security" },
                        { label: "Build great user experiences for modest devices" },
                        { label: "Ensure that your app functions seamlessly in intermittent networks—and when offline" },
                        { label: "Keep usage costs low" },
                        { label: "Treat accessibility settings as critical, not just as a checklist" },
                        { label: "Consider environmental contrasts like sun and shade" },
                        { label: "Color has meaning—use it wisely" },
                        { label: "Design for various screen conditions and input abilities" },
                        { label: "Go big: Larger screen device, larger tap target, etc" },
                      ]
                    },
                  ]
                },
                {
                  label: "1.3 Joining Design Sprints",
                  icon: "feed",
                  children: [
                    {
                      label: "When to Sprint? (in case: Design challenge)",
                      body: 'story',
                      story: 'Note: If you answered yes to any one of these questions',
                      children: [
                        { label: "Are there many potential solutions to your design challenge?" },
                        { label: "Does a design challenge require cross-functional teams?" },
                        { label: "Is the design challenge's scope wide enough for a Sprint?" },
                      ]
                    },
                    {
                      label: "Methodology: Phases of Design Sprint proccess",
                      body: 'story',
                      story: 'Note: Deliver a MPV (Minimum Viable Product) first',
                      children: [
                        { label: "Understand the scope of design challenge" },
                        { label: "Ideate possible solutions" },
                        { label: "Decide on the most viable solution" },
                        { label: "Create a workable prototype" },
                        { label: "Test that prototype with actual users" },
                      ]
                    },
                    {
                      label: "Benefit of Design Sprint",
                      children: [
                        {
                          label: "It's all about the users",
                          body: 'story',
                          story: 'Design challenge is always focused on the user and their needs',
                        },
                        {
                          label: "Value every person in the room",
                          body: 'story',
                          story: 'From the office intern to senior stakeholder',
                        },
                        {
                          label: "The best ideas rise to the top",
                          body: 'story',
                          story: 'Because considering all angels of the problem and solution',
                        },
                        {
                          label: "Time to focus: Five works days",
                          body: 'story',
                          story: 'Disctractionless, gadgetless, creative collaboration',
                        },
                        {
                          label: "Lower the risk of unsuccessful market debut",
                          body: 'story',
                          story: 'Critical adjustments before the product launches',
                        },
                        {
                          label: "Versatile scheduling",
                          body: 'story',
                          story: 'Scheduled at any point during your project',
                        },
                      ]
                    },
                    {
                      label: "Plan Design Sprint",
                      children: [
                        { label: "Conduct user research" },
                        { label: "Schedule talks with experts" },
                        { label: "Find the right space" },
                        { label: "Gather supplies" },
                        { label: "Establish Sprint rules" },
                        { label: "Plan introduction (e.g. icebreakers)" },
                        { label: "Plan out post-Sprint action items" },
                      ]
                    },
                    {
                      label: "Design Sprint brief",
                      children: [
                        { label: "Sprint challenge" },
                        { label: "Key deliverables" },
                        { label: "Logistics" },
                        { label: "Approvers" },
                        { label: "Resources" },
                        { label: "Project overview" },
                        { label: "Sprint schedule" },
                      ]
                    },
                    {
                      label: "Sprint retrospective",
                      body: 'story',
                      story: 'Goal: Stop making the same mistakes',
                      children: [
                        {
                          label: "What went well? (Areas where the team did well)",
                          body: 'story',
                          story: 'Time to acknowledge a team member’s strong performance',
                        },
                        {
                          label: "What can be improved? (Areas for improvement)",
                          body: 'story',
                          story: 'Retrospectives are about empowering, not shaming',
                        },
                        {
                          label: "Lessons learned (into your next Design Sprint)",
                          body: 'story',
                          story: 'Optional: Read more about Groupthink',
                        },
                      ]
                    },
                  ]
                },
                {
                  label: "1.4 Integrating research into the design process",
                  icon: "feed",
                  children: [
                    { label: "Lorem" },
                    { label: "Lorem" },
                    { label: "Lorem" },
                    { label: "Lorem" },
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
                  label: "2.1 Lorem",
                  icon: "feed",
                  children: [
                    { label: "Lorem" },
                    { label: "Lorem" },
                    {
                      label: "Lorem",
                      children: [
                        { label: "Lorem" },
                        { label: "Lorem" },
                        { label: "Lorem" },
                        { label: "Lorem" },
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