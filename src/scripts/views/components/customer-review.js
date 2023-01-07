class CustomerReview extends HTMLElement {
  constructor() {
    super();
  }

  set customerReview(customerReview) {
    this._customerReview = customerReview;
    this.show();
  }

  show() {
    this.innerHTML = `
    <div class="restaurant-detail_customer-reviews_header">
      <img id="reviewer-icon" alt="user-circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAX1JREFUSEu1leExRDEUhb+tABWgAnRABagAHVABHaACVMBWQAfogApQAfPtJDvZbJK32bGZyY/33n333Hty7smIFa/RivOzCMARcAjshm1Nb2E/AeNWkS2AfeAO2Bro8gM4A15KcTWAK+Cyk75z4Db/pwRg4HVn8hh+Adyk/+YA0vK8ZPL420FKVw4gn5sFgB9A2u7Dt9PwvFaINcd2fJ8CqJbHSvVzrQMtKo8BFTYjU6s7qQBsAN/Zt3XgqxL/ANjlDIDa3vknAHPt5QC/jcPtpWiaOz2DFoD0eMi27pJKn6Wptia5U4AWRb3KfY+2kgK0DvkzaFsJurQPZ6Ykab8XD7kkU/Xv+6LPBBDlmM9DUaYi54OmEqSutXTZ1yTAbqcGOWQV0qaC8hmI+TxkHdcu42pahUH5hJpcA9P3YzdW7R1hbKqkQbOLVSzjqKVZad5oqkSKakqJxci5ttB14aSHKr9uaYlWos6lSwVNTK05bb1T1BO/yKXfk28u9g8XyEkZRdC/1QAAAABJRU5ErkJggg=="/>
      <p tabindex="0" class="reviewer-name">${this._customerReview.name}</p>
    </div>
    <div class="restaurant-detail_customer-reviews_content">
      <p tabindex="0" class="review">${this._customerReview.review}</p>
      <p tabindex="0" class="date">${this._customerReview.date}</p>
    </div>
    `;
  }
}

customElements.define('customer-review', CustomerReview);
