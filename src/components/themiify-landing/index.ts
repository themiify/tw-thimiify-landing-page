import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

export default class ThemiifyLanding extends LitElement {
  @property({ type: Object })
  config?: Record<string, any>;

  static styles = css`
    :host {
      display: block;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }
    
    .hero-container {
      position: relative;
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: #0f172a;
      padding: 2rem;
      color: white;
    }

    .background-gradient {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, rgba(15, 23, 42, 0) 50%),
                  radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.15) 0%, rgba(15, 23, 42, 0) 40%);
      animation: rotate 20s linear infinite;
      z-index: 1;
    }

    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .content-wrapper {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 800px;
      padding: 3rem;
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      transform: translateY(0);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .content-wrapper:hover {
      transform: translateY(-5px);
      box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.6);
    }

    h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      line-height: 1.1;
      margin: 0 0 1.5rem 0;
      background: linear-gradient(135deg, #fff 0%, #a5b4fc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.02em;
    }

    p {
      font-size: clamp(1.1rem, 2vw, 1.25rem);
      color: #94a3b8;
      margin: 0 0 2.5rem 0;
      line-height: 1.6;
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 2.5rem;
      font-size: 1.125rem;
      font-weight: 600;
      color: white;
      background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
      border: none;
      border-radius: 9999px;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 10px 20px -10px rgba(99, 102, 241, 0.5);
    }

    .cta-button:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 25px -10px rgba(99, 102, 241, 0.7);
    }

    .cta-button:active {
      transform: scale(0.98);
    }
  `;

  render() {
    return html`
      <div class="hero-container">
        <div class="background-gradient"></div>
        <div class="content-wrapper">
          <h1>${this.config?.title || 'Elevate Your Store'}</h1>
          <p>
            ${this.config?.content || 'Experience a new level of design with Themiify Landing. Build stunning, high-converting storefronts instantly.'}
          </p>
          <button class="cta-button" @click=${() => console.log('CTA Clicked!')}>
            ${this.config?.button_text || 'Get Started'}
          </button>
        </div>
      </div>
    `;
  }
}
