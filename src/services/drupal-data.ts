export interface Article {
  title: string;
  thumbnail: string;
  categories: string[];
  author: string;
  pubDate: string;
  userLink: string;
  link: string;
}

export interface Feed {
  title: string;
  image: string;
  link: string;
}

export interface DrupalData {
  articles: Article[];
  feed: Feed;
}

export interface RssFeedResult {
  items: Article[];
  status: string;
  feed: Feed;
}

async function fetchDrupalData(article_type: string): Promise<RssFeedResult> {
  let url = `https://albert.ddev.site/jsonapi/node/article?filter[field_article_type]=${article_type}`;
  return (
    await fetch(url)
  ).json();
}

export async function getDrupalData(
  article_type = "art",
): Promise<DrupalData> {
  const { feed, items, status } = await fetchDrupalData(article_type);

  console.log(feed);
  console.log(items);
  console.log(status);
  const articles = items
    .filter((item) => item.thumbnail)
    .map((item) => {
      return {
        ...item,
        userLink: feed.link,
      };
    });

  if (!feed || status !== "ok") {
    throw new Error("An error occured.");
  }

  return { feed, articles };
}
