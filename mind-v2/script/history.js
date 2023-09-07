const { ref } = Vue;

const app = Vue.createApp({
  setup() {
    const filter = ref("");
    const filterRef = ref(null);

    // 1️⃣ ATUR NODE YANG TERBUKA PERTAMA KALI

    let nilai__1 = ref([
      "Early Universe",
      "1. The first 20 minutes",
      "2. Matter era",
      "3. Epochs of the formation of the Solar System",
      "4. Recent history",
    ])

    let nilai__2 = ref([
      "Root__2",
      "Good food (with icon)",
      "Pleasant surroundings (with icon)"
    ])

    let nilai__3 = ref([
      "Root__3",
      "Good food (with icon)",
      "Pleasant surroundings (with icon)"
    ])

    let nilai__4 = ref([
      "Root__4",
      "Good food (with icon)",
      "Pleasant surroundings (with icon)"
    ])

    let nilai__5 = ref([
      "Root__5",
      "Good food (with icon)",
      "Pleasant surroundings (with icon)"
    ])

    let nilai__6 = ref([
      "Root__6",
      "Good food (with icon)",
      "Pleasant surroundings (with icon)"
    ])

    let nilai__7 = ref([
      "Root__7",
      "Good food (with icon)",
      "Pleasant surroundings (with icon)"
    ])

    // 2️⃣ ATUR DEFAULT NODE YANG TERBUKA (SAMA KAYA POINT 1 DI ATAS)

    function defaultNode__1(pohon) {
      let node = [
        "Early Universe",
        "1. The first 20 minutes",
        "2. Matter era",
        "3. Epochs of the formation of the Solar System",
        "4. Recent history",
      ]
      console.log(node)
      setTimeout(() => { pohon.tree.collapseAll() }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[0], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[1], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[2], true) }, 100);
    }

    function defaultNode__2(pohon) {
      let node = [
        "Root__2",
        "Good food (with icon)",
        "Pleasant surroundings (with icon)"
      ]
      console.log(node)
      setTimeout(() => { pohon.tree.collapseAll() }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[0], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[1], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[2], true) }, 100);
    }

    function defaultNode__3(pohon) {
      let node = [
        "Root__3",
        "Good food (with icon)",
        "Pleasant surroundings (with icon)"
      ]
      console.log(node)
      setTimeout(() => { pohon.tree.collapseAll() }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[0], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[1], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[2], true) }, 100);
    }

    function defaultNode__4(pohon) {
      let node = [
        "Root__4",
        "Good food (with icon)",
        "Pleasant surroundings (with icon)"
      ]
      console.log(node)
      setTimeout(() => { pohon.tree.collapseAll() }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[0], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[1], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[2], true) }, 100);
    }

    function defaultNode__5(pohon) {
      let node = [
        "Root__5",
        "Good food (with icon)",
        "Pleasant surroundings (with icon)"
      ]
      console.log(node)
      setTimeout(() => { pohon.tree.collapseAll() }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[0], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[1], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[2], true) }, 100);
    }

    function defaultNode__6(pohon) {
      let node = [
        "Root__6",
        "Good food (with icon)",
        "Pleasant surroundings (with icon)"
      ]
      console.log(node)
      setTimeout(() => { pohon.tree.collapseAll() }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[0], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[1], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[2], true) }, 100);
    }

    function defaultNode__7(pohon) {
      let node = [
        "Root__7",
        "Good food (with icon)",
        "Pleasant surroundings (with icon)"
      ]
      console.log(node)
      setTimeout(() => { pohon.tree.collapseAll() }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[0], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[1], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[2], true) }, 100);
    }

    return {
      filter,
      filterRef,
      defaultNode__1,
      defaultNode__2,
      defaultNode__3,
      defaultNode__4,
      defaultNode__5,
      defaultNode__6,
      defaultNode__7,

      // ⚠️ TAB YANG AKTIF (SELECTED) PERTAMA KALI
      tab: ref('tab__1'),

      // ⚠️ PEMBAGIAN (SPLIT) TREE 50% & DETAIL 50%
      splitterModel: ref(50),

      // ⚠️ NODE YANG AKTIF (SELECTED) PERTAMA KALI
      selected__1: ref("Early Universe"),
      selected__2: ref("Root__2"),
      selected__3: ref("Root__3"),
      selected__4: ref("Root__4"),
      selected__5: ref("Root__5"),
      selected__6: ref("Root__6"),
      selected__7: ref("Root__7"),

      // ⚠️ NODE YANG TERBUKA (EXPANDED) PERTAMA KALI
      expanded__1: nilai__1,
      expanded__2: nilai__2,
      expanded__3: nilai__3,
      expanded__4: nilai__4,
      expanded__5: nilai__5,
      expanded__6: nilai__6,
      expanded__7: nilai__7,

      /* -------------------------------------------------------------------------- */
      /*                                ANCHOR DATA 1                               */
      /* -------------------------------------------------------------------------- */

      data__1: [
        {
          label: "Early Universe",
          avatar: "../assets/history/general/history-1-universe.png",
          children: [
            {
              label: "1. The first 20 minutes",
              icon: "feed",
              children: [
                { label: "1.1 Planck epoch ⇢" },
                { label: "1.2 Grand unification epoch ⇢" },
                { label: "1.3 Electroweak epoch ⇢" },
                { label: "1.4 Quark epoch ⇢" },
                { label: "1.5 Hadron epoch ⇢" },
                { label: "1.6 Lepton epoch ⇢" },
                { label: "1.7 Photon epoch ⇢" },,
              ]
            },
            {
              label: "2. Matter era",
              icon: "feed",
              children: [
                { label: "2.1 Matter and radiation equivalence ⇢" },
                { label: "2.2 Cosmic Dark Age ⇢" },
                { label: "2.3 Galaxy epoch ⇢" },
                { label: "2.4 Acceleration ⇢" },
              ]
            },
            {
              label: "3. Epochs of the formation of the Solar System ⇢",
              icon: "feed",
            },
            {
              label: "4. Recent history ⇢",
              icon: "feed",
            },
          ]
        }
      ],

      /* -------------------------------------------------------------------------- */
      /*                                ANCHOR DATA 2                               */
      /* -------------------------------------------------------------------------- */

      data__2: [
        {
          label: "Root__2",
          avatar: "../assets/history/general/history-2-life.png",
          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              children: [
                { label: "Quality ingredients" },
                { label: "Good recipe" }]
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              disabled: true,
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" }]
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              children: [
                {
                  label: "Happy atmosphere (with image)",
                  img: "../assets/logo_calendar_128px.png"
                },
                { label: "Good table presentation" },
                { label: "Pleasing decor" }]
            }]
        }
      ],

      /* -------------------------------------------------------------------------- */
      /*                                ANCHOR DATA 3                               */
      /* -------------------------------------------------------------------------- */

      data__3: [
        {
          label: "Root__3",
          avatar: "../assets/history/general/history-3-prehistory.png",
          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              children: [
                { label: "Quality ingredients" },
                { label: "Good recipe" }]
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              disabled: true,
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" }]
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              children: [
                {
                  label: "Happy atmosphere (with image)",
                  img: "../assets/logo_calendar_128px.png"
                },
                { label: "Good table presentation" },
                { label: "Pleasing decor" }]
            }]
        }
      ],

      /* -------------------------------------------------------------------------- */
      /*                                ANCHOR DATA 4                               */
      /* -------------------------------------------------------------------------- */

      data__4: [
        {
          label: "Root__4",
          avatar: "../assets/history/general/history-4-ancient-ages.png",
          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              children: [
                { label: "Quality ingredients" },
                { label: "Good recipe" }]
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              disabled: true,
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" }]
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              children: [
                {
                  label: "Happy atmosphere (with image)",
                  img: "../assets/logo_calendar_128px.png"
                },
                { label: "Good table presentation" },
                { label: "Pleasing decor" }]
            }]
        }
      ],

      /* -------------------------------------------------------------------------- */
      /*                                ANCHOR DATA 5                               */
      /* -------------------------------------------------------------------------- */

      data__5: [
        {
          label: "Root__5",
          avatar: "../assets/history/general/history-5-middle-ages.png",
          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              children: [
                { label: "Quality ingredients" },
                { label: "Good recipe" }]
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              disabled: true,
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" }]
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              children: [
                {
                  label: "Happy atmosphere (with image)",
                  img: "../assets/logo_calendar_128px.png"
                },
                { label: "Good table presentation" },
                { label: "Pleasing decor" }]
            }]
        }
      ],

      /* -------------------------------------------------------------------------- */
      /*                                ANCHOR DATA 6                               */
      /* -------------------------------------------------------------------------- */

      data__6: [
        {
          label: "Root__6",
          avatar: "../assets/history/general/history-6-modern-ages.png",
          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              children: [
                { label: "Quality ingredients" },
                { label: "Good recipe" }]
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              disabled: true,
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" }]
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              children: [
                {
                  label: "Happy atmosphere (with image)",
                  img: "../assets/logo_calendar_128px.png"
                },
                { label: "Good table presentation" },
                { label: "Pleasing decor" }]
            }]
        }
      ],

      /* -------------------------------------------------------------------------- */
      /*                                ANCHOR DATA 7                               */
      /* -------------------------------------------------------------------------- */

      data__7: [
        {
          label: "Root__7",
          avatar: "../assets/history/general/history-7-future.png",
          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              children: [
                { label: "Quality ingredients" },
                { label: "Good recipe" }]
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              disabled: true,
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" }]
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              children: [
                {
                  label: "Happy atmosphere (with image)",
                  img: "../assets/logo_calendar_128px.png"
                },
                { label: "Good table presentation" },
                { label: "Pleasing decor" }]
            }]
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