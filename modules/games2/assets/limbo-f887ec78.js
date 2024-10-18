const e = `<div class="item">
  <h2>How are results calculated?</h2>
  <div class="help-content">
    <p>To get the results.</p>
    <div>
      Hex string: hash = HMAC_SHA256(clientSeed:nonce, serverSeed)
    </div>
    <p>
      Example:
      6b5124897c3c48d0e46cc9249f08c7e560792459f1bad1171224643b5d2be231
    </p>
    <ol class="special">
      <li>
        Take a random value in the 2^52 range, namely 16^13, i.e. a 13-bit
        hexadecimal number (because the hash value is hexadecimal, 2^52
        === 16^13)6b5124897c3c4 (6b5124897c3c4 equals 1887939992208324 in
        the decimal system).
      </li>
      <li>
        Distribute the random value to 0~1, by dividing it by the maximum
        value of 13 fs, namely 6b5124897c3c4/fffffffffffff. Given the
        discrete random nature of the hash value, we then can think that
        any hash value can be transformed into a random number of 0~1
        (fffffffffffff is equal to 45035996270496 in the decimal system)
        1887939992208324/4503599627370496 = 0.419206889692064.
      </li>
      <li>
        Make the house edge 1%. Further to calculate 99/(1-X), where X is
        the random value calculated at Step 2. When X is 0, the result is
        99; when X is 1, the result is positive infinite; when X is 0.01,
        the result is 100; when X is less than 0.01, the result is less
        than 100. <p>99/(1-0.419206889692064) = 170.45656748150867</p>
      </li>
      <li>
        All values less than 100 will be set to 100. In other words, there
        is a probability of 1% that 100 will appear. Round off the number
        and divide it by 100 to get the final result.
        <p>170/100 = 1.70</p>
      </li>
    </ol>
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
    <p>We put our “cards on the table.” </p>
    <p>Good luck!</p>
  </div>
</div>`;
export { e as default };
