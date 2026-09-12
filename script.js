// ---- Edit your contact details here ----
const WHATSAPP_NUMBER = "910000000000"; // include country code, no + or spaces
const CONTACT_EMAIL = "orders@example.com";

// ---- Product data (from your spreadsheet) ----
// To add/edit items, just add or change entries in this list.
// driveId: the id from your Google Drive share link
//   e.g. https://drive.google.com/file/d/THIS_PART/view -> that's the driveId
const PRODUCTS = [
  {
    code: "Ram-184-A",
    driveId: "1zAyAXHAea4Mtf_20HsJXyzC-A9yhv9OE",
    rate: 1850,
    availability: "Ready",
  },
  {
    code: "Ram-184-B",
    driveId: "1G-5s1OBhhSsDjmfWqqJPbWyLGOQaS2Y0",
    rate: 1850,
    availability: "Ready",
  },
  {
    code: "Ram-192",
    driveId: "19havyx8FVEvwxjiosUo4jSzRlebgq590",
    rate: 1449,
    availability: "Ready",
  },
];

function driveImageUrl(driveId) {
  return `https://drive.google.com/uc?export=view&id=${driveId}`;
}

function renderProducts() {
  const grid = document.getElementById("product-grid");
  const countEl = document.getElementById("item-count");
  countEl.textContent = `${PRODUCTS.length} item${PRODUCTS.length === 1 ? "" : "s"}`;

  grid.innerHTML = PRODUCTS.map((p) => {
    const isReady = p.availability.trim().toLowerCase() === "ready";
    const pillClass = isReady ? "pill-ready" : "pill-wait";
    return `
      <article class="card">
        <div class="card-photo">
          <img
            src="${driveImageUrl(p.driveId)}"
            alt="${p.code}"
            loading="lazy"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div class="fallback" style="display:none">${p.code}<br/>image unavailable</div>
        </div>
        <div class="card-body">
          <p class="card-code">${p.code}</p>
          <div class="card-meta">
            <span class="card-price">₹${p.rate.toLocaleString("en-IN")}<span class="unit">/ piece</span></span>
            <span class="pill ${pillClass}">${p.availability}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function wireContactLinks() {
  const wa = document.getElementById("whatsapp-link");
  const email = document.getElementById("email-link");
  if (wa) wa.href = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (email) email.href = `mailto:${CONTACT_EMAIL}`;
}

renderProducts();
wireContactLinks();
