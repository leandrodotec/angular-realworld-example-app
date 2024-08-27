import { Page } from "@playwright/test";

export async function setArticlesMockApi(page: Page) {
  await page.route("**/articles?limit=10&offset=0", async (route) => {
    route.fulfill({
      body: JSON.stringify(articles),
    });
  });

  await page.route("**/articles/*", async (route) => {
    const url = route.request().url();
    const slug = url.split("/").pop();

    const filteredArticle = {
      article: articles.articles.filter((a) => a.slug === slug),
    };
    console.log(filteredArticle);

    route.fulfill({
      body: JSON.stringify(filteredArticle),
    });
  });
}

const articles = {
  articles: [
    {
      slug: "Ill-override-the-digital-ADP-alarm-that-should-microchip-the-USB-firewall!-aa0ab8d3-171c-4d32-af1d-252e12255aa3",
      title:
        "Ill override the digital ADP alarm, that should microchip the USB firewall!",
      description:
        "In reprehenderit esse id ut quas cupiditate error sit. Eum nostrum libero facilis quis error consectetur. Totam porro ut similique aut sint enim amet enim. Harum quo est repudiandae doloribus.",
      tagList: ["ipsum", "voluptatem", "fugit", "magnam"],
      createdAt: "2024-08-21T14:30:27.566Z",
      favorited: false,
      favoritesCount: 71,
      author: {
        username: "Eunice Abubakar",
        image: "https://api.realworld.io/images/demo-avatar.png",
        following: false,
      },
    },
    {
      slug: "Ill-program-the-back-end-THX-matrix-that-should-interface-the-HDD-panel!-892c73f2-83c4-47ca-8020-b858885f3acf",
      title:
        "Ill program the back-end THX matrix, that should interface the HDD panel!",
      description:
        "Repellat illo sunt cum. Maiores et iure. Accusantium eum quo ullam minus architecto aut nulla rerum. Non quis nisi omnis eos dolores quia. Beatae nihil hic ut necessitatibus id fugiat.",
      tagList: ["necessitatibus", "consequatur", "excepturi", "reiciendis"],
      createdAt: "2024-08-21T14:30:24.023Z",
      favorited: false,
      favoritesCount: 18,
      author: {
        username: "Eunice Abubakar",
        image: "https://api.realworld.io/images/demo-avatar.png",
        following: false,
      },
    },
    {
      slug: "Ill-generate-the-virtual-SQL-protocol-that-should-bus-the-AI-hard-drive!-08699efb-707c-40a9-987e-692c6dcb48fc",
      title:
        "Ill generate the virtual SQL protocol, that should bus the AI hard drive!",
      description:
        "Eveniet quae minus vero praesentium eos fugit explicabo et. Libero at ea ut sapiente et nesciunt odio similique vel. Libero aliquam tempore corporis eveniet dolorum nihil maiores veritatis. Harum modi sint officia.",
      tagList: ["et", "numquam", "deserunt", "quia"],
      createdAt: "2024-08-21T14:30:20.550Z",
      favorited: false,
      favoritesCount: 7,
      author: {
        username: "Eunice Abubakar",
        image: "https://api.realworld.io/images/demo-avatar.png",
        following: false,
      },
    },
    {
      slug: "We-need-to-calculate-the-wireless-TCP-circuit!-56c39333-a395-4fe6-a601-5043174644b0",
      title: "We need to calculate the wireless TCP circuit!",
      description:
        "Ut quidem et. Quo assumenda et cumque molestias atque sint qui modi. Velit qui dolore possimus totam qui blanditiis. Vel quia consequatur aliquid corrupti qui libero.",
      tagList: ["sapiente", "fugiat", "in", "asperiores"],
      createdAt: "2024-08-21T14:30:17.097Z",
      favorited: false,
      favoritesCount: 10,
      author: {
        username: "Eunice Abubakar",
        image: "https://api.realworld.io/images/demo-avatar.png",
        following: false,
      },
    },
    {
      slug: "Ill-reboot-the-online-COM-interface-that-should-system-the-THX-protocol!-ba3b4a58-0597-4a43-b226-c77c2a828b2a",
      title:
        "Ill reboot the online COM interface, that should system the THX protocol!",
      description:
        "Labore corporis blanditiis dolorum nemo nam praesentium alias sequi inventore. Cupiditate rerum enim sint quis. Eum occaecati provident labore veniam deserunt vero sed soluta repellat. Cum sapiente pariatur et ea a recusandae et optio. Sequi doloribus reiciendis corrupti quidem accusamus est nesciunt. Excepturi accusamus consequatur est sed maiores excepturi autem.",
      tagList: ["esse", "voluptate", "error", "nihil"],
      createdAt: "2024-08-21T14:30:13.628Z",
      favorited: false,
      favoritesCount: 1,
      author: {
        username: "Eunice Abubakar",
        image: "https://api.realworld.io/images/demo-avatar.png",
        following: false,
      },
    },
  ],
  articlesCount: 5,
};
