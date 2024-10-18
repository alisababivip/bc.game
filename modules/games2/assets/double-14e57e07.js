const e = `<div id="double-help-fair" class="item">
  <h2>Is The Game Fair?</h2>
  <div class="help-content">
    <p>
      Double is a multiplayer game which uses a sha256 chain in combination with a undetermined client seed to fairly generate rounds.
    </p>
    <p>
      Chain Generation
      To generate the chain, we begin with securely randomized bytes. From there, we iterate 10 million times feeding the previous seed into a sha256 function. Double games read the chain in a reverse order.
    </p>
    <div class="code-area">
      <pre>
function parityValueFromHash(seed, salt) {
  let hash = String(CryptoJS.HmacSHA256(CryptoJS.enc.Hex.parse(seed), salt));
  const hex = hash.slice(0, 8);
  const hexNumber = parseInt(hex, 16);

  return Math.floor((hexNumber*15)/0x100000000);
}
return parityValueFromHash(seed, salt);
      </pre>
    </div>
  </div>
</div>`;
export { e as default };
