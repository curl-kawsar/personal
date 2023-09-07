const { ref } = Vue;

const app = Vue.createApp({
  setup() {
    const filter = ref("");
    const filterRef = ref(null);

    // 1️⃣ ATUR NODE YANG TERBUKA PERTAMA KALI

    let nilai__1 = ref([
      "Root__1",
      "Good food (with icon)",
      "Pleasant surroundings (with icon)"
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

    // 2️⃣ ATUR DEFAULT NODE YANG TERBUKA (SAMA KAYA POINT 1 DI ATAS)

    function defaultNode__1(pohon) {
      let node = [
        "Root__1",
        "Good food (with icon)",
        "Pleasant surroundings (with icon)"
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

    // 3️⃣ JIKA DIPERLUKAN GUNAKAN TOGGLE UNTUK NODE TERTENTU

    // function toggleNode__x(nilai) {
    //   let node = "Root"
    //   nilai.tree.isExpanded(node) === true ? nilai.tree.setExpanded(node, false) : nilai.tree.setExpanded(node, true)
    // }

    return {
      filter,
      filterRef,
      defaultNode__1,
      defaultNode__2,
      defaultNode__3,
      // toggleNode__x,

      // ⚠️ TAB YANG AKTIF (SELECTED) PERTAMA KALI
      tab: ref('tab__1'),

      // ⚠️ PEMBAGIAN (SPLIT) TREE 50% & DETAIL 50%
      splitterModel: ref(50),

      // ⚠️ NODE YANG AKTIF (SELECTED) PERTAMA KALI
      selected__1: ref("Root__1"),
      selected__2: ref("Root__2"),
      selected__3: ref("Root__3"),

      // ⚠️ NODE YANG TERBUKA (EXPANDED) PERTAMA KALI
      expanded__1: nilai__1,
      expanded__2: nilai__2,
      expanded__3: nilai__3,

      /* -------------------------------------------------------------------------- */
      /*                                ANCHOR DATA 1                               */
      /* -------------------------------------------------------------------------- */

      data__1: [
        {
          label: "Root__1",
          avatar: "../assets/boy-avatar.png",
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
      /*                                ANCHOR DATA 2                               */
      /* -------------------------------------------------------------------------- */

      data__2: [
        {
          label: "Root__2",
          avatar: "../assets/boy-avatar.png",
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
          avatar: "../assets/boy-avatar.png",
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