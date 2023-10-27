import { reactive } from "vue";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  percent: 0,
  portfolioImages: [
    "../../assets/img/Procreate/Mandala1.png",
    // "/src/assets/img/Procreate/DimensionMiner.png",
    // "/src/assets/img/Procreate/ImGame.png",
    // "/src/assets/img/Procreate/KeeprSS.png",
    // "/src/assets/img/Procreate/Network.png",
    // "/src/assets/img/Procreate/TowerSS.png",
  ],

  skillsIcons: [
    {
      title: "HTML5",
      src: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
    },
    {
      title: "CSS3",
      src: "https://armortechs.com/upload/image/blog/css-variables-css-3-logo.png",
    },
    {
      title: "JavaScript ES6",
      src: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png",
    },
    {
      title: "C-Sharp",
      src: "https://1.bp.blogspot.com/-U8C6UaajxeA/XV1J6Yo6x2I/AAAAAAAABQo/3v2OEgTGn9ggUqArXtGZpl_6zqbo09nmACLcBGAs/s1600/csharp_logo.png",
    },
    {
      title: "Node Js",
      src: "https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png",
    },
    {
      title: "Vue.js 3",
      src: "https://imgs.search.brave.com/Hsy3vsixUOO8EgH22as2LpgNP6zF5hEx6P-pDoc0n0c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kMzN3/dWJyZmtpMGw2OC5j/bG91ZGZyb250Lm5l/dC83MThjNmU0ODk1/NjI0OTEyMWNmM2Nj/YTFhMjJhOTlmODM3/MmEzZjBkLzVmNjg5/L19udXh0L2ltZy9j/MmE2MDVmLnBuZw",
    },
    {
      title: "Svelte",
      src: "https://imgs.search.brave.com/AtFnftxXfySR-pIt0LrD64jshxNlrFjMfr9etQbLNAU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2dp/bGJhcmJhcmEvbG9n/b3MvbWFpbi9sb2dv/cy9zdmVsdGUtaWNv/bi5zdmc.svg",
    },
    {
      title: "React",
      src: "https://imgs.search.brave.com/qlFAtMUjOJ06EBhykDOXGUrmQ4UM2GdOmNiPAzXjS5w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvUmVhY3Rf/bG9nb19sb2dvdHlw/ZV9lbWJsZW0tNzAw/eDYyNi5wbmc",
    },
    {
      title: "Angular",
      src: "https://imgs.search.brave.com/YlS5VuWzZvKwp2RgiANLb12xGWHVnPPV6Id32uidwng/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvYW5n/dWxhci1pY29uLTEt/bG9nby1wbmctdHJh/bnNwYXJlbnQucG5n",
    },
    {
      title: "Next.js",
      src: "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png",
    },
    {
      title: "Nuxt.js",
      src: "https://imgs.search.brave.com/ac3WGz-DgM03071K34NEHSDn6LTb8cM2YIrFfa7YAcM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FlL051eHRfbG9n/by5zdmc.svg",
    },
    {
      title: "DotNet Core",
      src: "https://wpguru.co.uk/wp-content/uploads/2020/04/dotnet-logo.png",
    },
    {
      title: "BootStrap",
      src: "https://pluspng.com/img-png/bootstrap-logo-vector-png-bem-with-bootstrap-bootstrap-logo-1024.png",
    },
    {
      title: "TailWind CSS",
      src: "https://media.zeemly.com/zeemly/product/tailwind-css.png",
    },
    {
      title: "Sass",
      src: "https://vanseodesign.com/blog/wp-content/uploads/2015/09/sass-logo-2.png",
    },
    {
      title: "MongoDb",
      src: "https://pluspng.com/img-png/logo-mongodb-png-hundreds-of-popular-mongodb-articles-400.png",
    },

    {
      title: "MySQL",
      src: "https://findicons.com/files/icons/977/rrze/720/database_mysql.png",
    },
    {
      title: "PostgreSQL",
      src: "https://cdn.freebiesupply.com/logos/thumbs/2x/postgresql-logo.png",
    },
    {
      title: "Prisma.io",
      src: "https://imgs.search.brave.com/KhQAV89DalGsyHLIk36WzppNhJCg02NbIehcQjuSTeU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nL28vYnVz/aW5lc3MvdnNjb2Rl/LXByb2dyYW0taXRl/bS1pY29uL3ByaXNt/YS5wbmc",
    },
    {
      title: "Auth0",
      src: "https://www.pngrepo.com/png/349297/512/auth0.png",
    },
    {
      title: "Auth.js",
      src: "https://authjs.dev/img/logo/logo-sm.webp",
    },

    {
      title: "Github",
      src: "https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg",
    },

    {
      title: "Git",
      src: "https://3.bp.blogspot.com/-xhNpNJJyQhk/XIe4GY78RQI/AAAAAAAAItc/ouueFUj2Hqo5dntmnKqEaBJR4KQ4Q2K3ACK4BGAYYCw/s1600/logo%2Bgit%2Bicon.png",
    },
    {
      title: "Postman",
      src: "https://blog.scottlogic.com/smangan/assets/postman.png",
    },
    {
      title: "Figma",
      src: "https://cdn.iconscout.com/icon/free/png-512/figma-1693589-1442630.png",
    },
    {
      title: "FireBase",
      src: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
    },
    {
      title: "PocketBase",
      src: "https://seeklogo.com/images/P/pocketbase-logo-CA73994F09-seeklogo.com.png",
    },
    {
      title: "Trello",
      src: "https://pluspng.com/img-png/trello-png-trello-png-1600.png",
    },
  ],

  portfolioProjects: [
    {
      title: "Browse Learn Offer Grow (B.L.O.G)",
      imageSrc:
        "https://media.discordapp.net/attachments/1060066788878069891/1165068659912355990/image.png?ex=654581be&is=65330cbe&hm=430d46aed7750e097cf44cc1d98cf76596700d00cbe0e72e64a4f70784cef630&=&width=720&height=368",
      description: `
      <div class="portfolio-description">

  <p>Full-stack web application for Exploring and Engaging with My Blog Posts on Niche Topics and Fascinating Discoveries</p>

  <p>Features:</p>
  <ul>
    <li>Server-Side Rendering (SSR) & SEO </li>
    <li>User Management and Auth flow</li>
    <li>Search Method </li>
    <li>Likes & Comments</li>
    <li>Dynamic routing and post details</li>

    <li>Stylish Components crafted with Flowbite and Tailwind CSS for a modern look</li>
  </ul>
</div>`,
      technologies: [
        "Sveltekit",
        "Auth.js",
        "Prisma.io",
        "Tailwind",
        "Flowbite Svelte",
      ],
      link: "https://svelte-blog.tung.devopportunities.dev/",
    },
    {
      title: "The Daily Sun",
      imageSrc:
        "https://cdn.discordapp.com/attachments/1060066788878069891/1165069470625181706/image.png?ex=6545827f&is=65330d7f&hm=bb345073945238971a93be26cc104ec6500979661b9938eb5013cad754400a8c&",
      description: ` <p>Full-stack e-commerce app for exploring featured projects and project details, creating shopping carts, and completing secure transactions. Users can also access an account page to review their purchase history and receipts.</p>

  <p>Features:</p>
  <ul>
    <li>Styled Featured Products landing page</li>
    <li>Dynamic routing and product details</li>
    <li>User Management and Auth Flow</li>
    <li>Search Method</li>
    <li>Reviews & Comments</li>
    <li>Secure Stripe Checkout</li>
  </ul>
`,
      technologies: ["Nuxt", "Tailwind", "NextAuth.js", "Prisma.io", "Stripe"],
      link: "https://thedailysun.devopportunities.dev/",
    },
    {
      title: "SamadhiYogaIdaho",
      imageSrc:
        "https://media.discordapp.net/attachments/1060066788878069891/1060067418073993226/samadhiApp.png?width=720&height=399",
      description: `<div class="portfolio-description">
  <p>Full-stack app custom designed and deployed for a small yoga business owner  and friend for her to display schedule and upcoming events she's hosting.</p>

  <p>Features:</p>
  <ul>
    <li>Tailored and customized landing page</li>
    <li>Sign ups for posted classes and yoga events</li>
    <li>Class Schedules</li>
    <li>Yoga Retreats</li>
    <li>Integrated CMS for publishing blog articles.</li>
  </ul>


</div>`,
      technologies: ["Vue.Js", "Bootstrap", "MongoDb", "PocketBase", "Ghost"],
      link: "https://www.samadhiyogaidaho.com/#/",
    },
    {
      title: "Better After Books",
      imageSrc:
        "https://media.discordapp.net/attachments/1060066788878069891/1060067418820579439/BetterAfterBooks.png?width=720&height=390",
      description: `  <div class="portfolio-description">
 <p>Hosted on Render (Can take a minute or two to load)</p>
  <p>Full-stack application tailored to book lovers, allowing them to connect, discover, share recommendations, and curate collections of their favorite books.
  Inspired by Bookbub.com</p>

  <p>Features:</p>
  <ul>
    <li>Discoverable books via Google's API</li>
    <li>Dynamic routing with product details</li>
    <li>Recommendations & comments</li>
    <li>Customized collections, including wishlists, favorites, recommendations, reading lists, and finished books.</li>
    <li>User Management and Auth flow</li>
  </ul>

</div>`,
      technologies: ["Vue.Js", "C#", "DotNet", "MySQL", "Bootstrap", "Dapper"],
      link: "https://better-after-books-demo.onrender.com/#/",
    },
    {
      title: "NextFire",
      imageSrc:
        "https://cdn.discordapp.com/attachments/1060066788878069891/1063581265971904593/Screenshot_2023-01-13_at_3.11.41_PM.png?ex=6545703e&is=6532fb3e&hm=cc269604b7d98b7b1b248d5d8ee4c92f2fbcaee773f845c974f0ccfae078a099&",
      description: ` <div class="profolio-description">

  <p>Full-stack social blogging platform build with React, Firebase,  and Next.js.
  Inspired by Dev.to, course taught by Fireship.io </p>

  <p>Key Features:</p>
  <ul>
    <li>Bot-friendly content (SEO)</li>
    <li>SSR, SSG, and ISR techniques</li>
    <li>Firestore realtime CRUD and data modeling</li>
    <li>Vue.js Frontend: The frontend is developed using Vue.js and Vue Router, effectively managing the Document Object Model (DOM).</li>
    <li>Reactive forms with react-hook-form</li>
    <li>Image file uploads</li>
    <li>Realtime hearts</li>
    <li>Security & Deployment</li>
  </ul>
</div>`,
      technologies: ["Next.js", "Tailwind", "React", "Firebase"],
      link: "https://next-fire.tung.devopportunities.dev/",
    },
    {
      title: "Keepr",
      imageSrc:
        "https://media.discordapp.net/attachments/1060066788878069891/1060068356541120683/KeeprSS.png?width=720&height=395",
      description: `<div class="profolio-description">
  <p>Hosted on Render (Can take a minute or two to load)</p>
  <p>Full-stack social network designed for visual sharing and exploration of diverse interests. Inspired by Pinterest.</p>

  <p>Key Features:</p>
  <ul>
    <li>Visual sharing and posting  of images  to "collections".</li>
    <li>Modern Styled components</li>
    <li>Masonry Layout</li>
    <li>User Management and Auth flow </li>
  </ul>

</div>`,
      technologies: ["Vue.Js", "C#", "DotNet", "MySQL", "Bootstrap", "Dapper"],
      link: "https://keepr-project-demo.onrender.com",
    },
  ],
});
