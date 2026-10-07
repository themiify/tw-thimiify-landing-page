import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

export default class NewComponent extends LitElement {
  @property({ type: Object })
  config?: Record<string, any>;

  static styles = css`
    :host {
      display: block;
    }
    .new-component {
      padding: 1rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    .new-component-title {
      font-weight: 500;
      color: #2c3e50;
      margin: 0 0 1rem;
    }
    .new-component-content {
      color: #666;
    }
  `;

  render() {
    return html`
      <div class="new-component">
        <h3 class="new-component-title">${this.config?.title || 'New Component'}</h3>
        <div class="new-component-content">
          ${this.config?.content || 'This is a new New Component component'}
        </div>
      </div>
    `;
  }
}
