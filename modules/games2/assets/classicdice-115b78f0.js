const e = `<div class="item">
  <h2>How are results calculated?</h2>
  <div class="help-content">
    <p>To get the results.</p>
    <ul>
      <li>
        First we calculate the hash value of the combination with
        HMAC_SHA256. This gives us a 64-character hexadecimal string:
        hash = HMAC_SHA256 (clientSeed:nonce, serverSeed).
      </li>
      <li>
        Finally, we take 8 characters of the hash and convert it to an
        int32 value. Then we divide the converted value by 0x100000000,
        multiply it by 10001 and divide it by 100 so that the resulting
        number conforms to the constraints of the dice range.
      </li>
    </ul>
    <br />
    <p>
      Note: A new seed must be set to verify the previous data (the
      server seed is encrypted).
    </p>
    <p></p>
    <p>
      Did you really need to know this? Probably not. It’s there for
      those who expect transparency and precision in a provably fair
      game of chance.
    </p>
    <p>We put our "cards on the table." </p>
    <p>Good luck!</p>
  </div>
</div>`;
export { e as default };
