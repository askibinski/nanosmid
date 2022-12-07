export interface DrupalNode extends JsonApiResourceWithPath {
  drupal_internal__nid: number
  drupal_internal__vid: number
  changed: string
  created: string
  title: string
  default_langcode: boolean
  sticky: boolean
}

export interface JsonApiResourceWithPath extends JsonApiResource {
  path: PathAlias
}

export type PathAlias = {
  alias: string
  pid: number
  langcode: string
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface JsonApiResource extends Record<string, any> {
  id: string
  type: string
  langcode: string
  status: boolean
}

export interface Article extends DrupalNode {
  field_article_type: string
}

export interface DrupalData {
  articles: Article[];
}

export interface JsonApiResponse extends Record<string, any> {
  jsonapi?: {
    version: string
    meta: Record<string, any>[]
  }
  data: Record<string, any>[]
  errors: JsonApiError[]
  meta: {
    count: number
    [key: string]: any
  }
  links?: JsonApiLinks
  included?: Record<string, any>[]
}

// https://jsonapi.org/format/#error-objects
export interface JsonApiError {
  id?: string
  status?: string
  code?: string
  title?: string
  detail?: string
  links?: JsonApiLinks
}

// https://jsonapi.org/format/#document-links
export interface JsonApiLinks {
  [key: string]: string | Record<string, string>
}

async function fetchDrupalData(article_type: string): Promise<JsonApiResponse> {
  let url = `https://albert.ddev.site/jsonapi/node/article?filter[field_article_type]=${article_type}`;
  console.log(url);
  return (
    await fetch(url)
  ).json();
}

export async function getDrupalData(article_type = "art"): Promise<DrupalData> {
  const data = await fetchDrupalData(article_type);

  // @todo for now, we are not using any authentication in Drupal so we changed the permission that content can be
  // viewed by anonymous. Which is no security issue since it is public content anyway, but in order to prevent
  // future mistakes, authentication would be preferable (oAuth2).

  // Verify that the data is valid json data from Drupal.
  if (!data.jsonapi || !data.data) {
    throw new Error("No data.");
  }

  const articles = data.data
    .map((item) => {
      return {
        ...item.attributes,
      };
    });

  return { articles: articles };
}
