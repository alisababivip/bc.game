const e = `<div class="item">
  <h2>How Are the Results Calculated?</h2>
  <div class="content">
    <p>
      We calculate the hash value of the combination with HMAC_SHA256.
      This gives us a 64-character hexadecimal string: hash = HMAC_SHA256
      (clientSeed:nonce:round, serverSeed).
    </p>
  </div>
</div>`;
export { e as default };
