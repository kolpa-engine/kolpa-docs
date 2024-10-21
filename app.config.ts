export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "kolpa-docs",
      description: "Discover the official documentation for Kolpa Engine, a high-performance, cross-platform game engine. Get started with installation guides, explore core features, and access tutorials to help you create stunning games for multiple platforms. Ideal for developers looking for flexibility, speed, and scalability in game development."
    },
    theme: {
      customizable: true,
      color: "zinc",
      radius: 0.5
    },
    header: {
      title: "Kolpa Docs",
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: "/logo.svg",
        dark: "/logo-dark.svg",
      },
      nav: [],
      links: [
        {
        icon: "lucide:github",
        to: "https://github.com/kolpa-engine/kolpa-docs",
        target: "_blank",
      }
    ]
    },
    aside: {
      useLevel: true,
      collapse: false
    },
    main: {
      breadCrumb: true,
      showTitle: true
    },
    footer: {
      credits: "Copyright © Kolpa Engine 2024",
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/kolpa-engine/kolpa-docs",
          target: "_blank",
        }
      ],
    },
    toc: {
      enable: true,
      title: "On This Page",
      links: [
        {
          title: "Star on GitHub",
          icon: "lucide:star",
          to: "https://github.com/kolpa-engine/kolpa-docs",
          target: "_blank",
        },
        {
          title: "Create Issues",
          icon: "lucide:circle-dot",
          to: "https://github.com/kolpa-engine/kolpa-docs/issues",
          target: "_blank",
        }
      ]
    },
    search: {
      enable: true,
      inAside: false
    }
  }
});