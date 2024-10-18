const e = `<div class="item">
  <h2>How are results calculated?</h2>
  <div class="help-content">
    <p>
      To get the Wheel results, we first combine your client seed and your
      nonce.
    </p>
    <ul>
      <li>
        First we calculate the hash value of the combination with
        HMAC_SHA256. This gives us a 64-character hexadecimal string: hash
        = HMAC_SHA256 (clientSeed:nonce, serverSeed).
      </li>
      <li>
        Finally, take the first 8 characters of the hash and convert it to
        an int32 value according to Big-endian. Divide the converted value
        by 0x100000000 and multiply by the number of segments to round up
        to get the position of the odds table. Check the table to get the
        odds.
      </li>
    </ul>
    <br />
    <p>
      Note: A new seed must be set to verify the previous data (the server
      seed is encrypted).
    </p>
    <p></p>
    <p>
      Did you really need to know this? Probably not. It’s there for those
      who expect transparency and precision in a provably fair game of
      chance.
    </p>
    <p>Good luck!</p>
  </div>
</div>`;
export { e as default };
