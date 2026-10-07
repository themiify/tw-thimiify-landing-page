import { LitElement as a, css as s, html as o } from "lit";
import "lit/decorators.js";
const r = class r extends a {
  render() {
    var t, i;
    return o`
      <div class="features-container">
        <div class="header">
          <h2>${((t = this.config) == null ? void 0 : t.title) || "Why Choose Us"}</h2>
          <p class="subtitle">
            ${((i = this.config) == null ? void 0 : i.content) || "Discover the powerful features that make our platform stand out from the rest."}
          </p>
        </div>
        
        <div class="grid">
          <div class="feature-card">
            <div class="icon-wrapper">✨</div>
            <h3>Premium Design</h3>
            <p class="desc">Crafted with attention to detail, ensuring your storefront looks professional and trustworthy.</p>
          </div>
          <div class="feature-card">
            <div class="icon-wrapper">⚡</div>
            <h3>Lightning Fast</h3>
            <p class="desc">Optimized for performance to give your customers the best possible shopping experience.</p>
          </div>
          <div class="feature-card">
            <div class="icon-wrapper">🛡️</div>
            <h3>Secure & Reliable</h3>
            <p class="desc">Built on a solid foundation with top-tier security practices you can depend on.</p>
          </div>
        </div>
      </div>
    `;
  }
};
r.styles = s`
    :host {
      display: block;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: #f8fafc;
      padding: 5rem 2rem;
      color: #0f172a;
    }

    .features-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 4rem;
    }

    h2 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 800;
      margin: 0 0 1rem;
      background: linear-gradient(135deg, #0f172a 0%, #3b82f6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.02em;
    }

    p.subtitle {
      font-size: 1.125rem;
      color: #64748b;
      max-width: 600px;
      margin: 0 auto;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      background: white;
      border-radius: 20px;
      padding: 2.5rem;
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(0, 0, 0, 0.05);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .feature-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
      border-color: rgba(59, 130, 246, 0.3);
    }

    .icon-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      border-radius: 16px;
      background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
      color: #3b82f6;
      font-size: 24px;
      margin-bottom: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0 0 1rem;
    }

    p.desc {
      color: #64748b;
      line-height: 1.6;
      margin: 0;
    }
  `;
let e = r;
typeof e < "u" && e.registerSallaComponent("salla-themiify-features");
export {
  e as default
};
