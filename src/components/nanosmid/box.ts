import { getDrupalData, DrupalData } from "../../services/drupal-data";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

const globalStyles = `
<style>
  @import url("https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700");
  @import url("https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");
  :root {
    --color-action: #e31b6d;
    --color-bg: #d2dbdd;
    --color-chip-bg: #f2f2f2;
    --color-chip-bg-hover: #e6e6e6;
  }

  #medium-portfolio-app {
    font-family: "Roboto Slab", serif;
    background-color: var(--color-bg);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
  </style>
`;

@customElement("nanosmid-box")
class NanosmidBox extends LitElement {
  @property()
  drupalData!: DrupalData;

  get getArticleType() {
    return this.getAttribute("type") ?? "art";
  }

  constructor() {
    super();
    this.innerHTML += globalStyles;
  }

  async firstUpdated() {
    await this.loadData();
  }

  async loadData() {
    this.drupalData = await getDrupalData(this.getArticleType);
  }

  createRenderRoot() {
    /**
     * Render template without shadow DOM. Note that shadow DOM features like
     * encapsulated CSS and slots are unavailable.
     */
    return this;
  }

  render() {
    return this.drupalData
      ? html`
          <div id="box">
              TESTING
          </div>
        `
      : html``;
  }
}
