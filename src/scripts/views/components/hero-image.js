class HeroImage extends HTMLElement {
  constructor() {
    super();
    this.show();
  }

  show() {
    this.innerHTML = `
      <div id="hero-container">
        <div id="hero-inner">
          <h2 tabindex="0" class="content__heading">Restaurants Catalogue</h2>
          <p tabindex="0">Find a restaurant that you like</p>
        </div>
      </div>
      <picture>
          <source media="(max-width: 600px)" srcset="./public/images/hero-image-small.jpg">
          <img tabindex="0" id="hero-image" src='./public/images/hero-image-large.jpg' 
              alt="sunset restaurant">
      </picture>
    `;
  }
}

customElements.define('hero-image', HeroImage);
