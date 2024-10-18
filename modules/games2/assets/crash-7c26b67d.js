const e = `<div id="crash-help-fair" class="item">
  <h2>Is The Game Fair?</h2>
  <div class="help-content">
    <p>
      We are a fair and impartial prediction and guessing platform.
      Our goal is to eliminate all unfair factors and make players
      feel comfortable and have fun.
    </p>
    <p>
      We have generated a total of 10 million hashes (the generation chain is verifiable), 
      and each hash corresponds to a Crash multiplier.
    </p>
    <p>
      We release these 10 million numbers in reverse order, each
      corresponding to one turn of the game (i.e. we have 10 million
      turns in total).
    </p>
    <p>
      In other words, the crash number of each turn already exists and
      is not calculated after the game starts. Players can therefore
      place their bet without concern.
    </p>
  </div>
  <h2>
    Will The Game Be Manipulated By The Platform?
    <a
      class="h2-link cl-primary"
      rel="noopener noreferrer"
      href="https://__BC_GITHUB__.github.io/verify/crash.html"
      target="_blank"
    >
      GitHub
    </a>
    &nbsp;&nbsp;
    <a
      class="h2-link cl-primary"
      rel="noopener noreferrer"
      href="https://__BC_GITHUB__.github.io/verify/crash.html"
      target="_blank"
    >
      Verify
    </a>
  </h2>
  <div class="help-content">
    <p>
      The integrity check value is key to verifying whether there is
      any official manipulation; The test algorithm is provided as
      follows.
    </p>
    <p>
      Example:
      6b5124897c3c48d0e46cc9249f08c7e560792459f1bad1171224643b5d2be231
    </p>
    <ol>
      <li>
        Take a random value in the 2^52 range, namely 16^13, i.e. a
        13-bit hexadecimal number (because the hash value is
        hexadecimal, 2^52 === 16^13)6b5124897c3c4 (0x6b5124897c3c4
        equals 1887939992208324 in the decimal system).
      </li>
      <li>
        Distribute the random value to 0~1, by dividing it by the
        maximum value of 13 fs, namely 0x6b5124897c3c4/0x10000000000000.
        Given the discrete random nature of the hash value, we then
        can think that any hash value can be transformed into a random
        number of 0~1, 1887939992208324/4503599627370496 =
        0.419206889692064.
      </li>
      <li>
        Make the house edge 1%. Further to calculate 99/(1-X), where X
        is the random value calculated at Step 2. When X is 0, the
        result is 99; when X is 1, the result is positive infinite;
        when X is 0.01, the result is 100; when X is less than 0.01,
        the result is less than 100.
        <p>
          Conclusion: The overall random number distribution is 99 to
          positive infinite; and when the random number distribution
          is 0~0.01, the result is less than 100.
        </p>
        <p>99/(1-0.419206889692064) = 170.45656748150867</p>
      </li>
      <li>
        All values less than 100 will be set to 100. In other words,
        there is a probability of 1% that 100 will appear. Round off
        the number and divide it by 100 to get the final result.
        <p>170/100 = 1.70</p>
      </li>
    </ol>
    <p>
      Conclusion: The hash value used in the game is inverse ordered.
      Therefore, with the SHA256 algorithm, a previous hash used in
      the game can be calculated from its subsequent hash. Since there
      is one-to-one correspondence between the key and the value of
      hash, we can draw the conclusion that if a hash can be used to
      calculate the hash that precedes it, then this hash should have
      been already generated when the preceding prize is announced.
      Similarly, the entire hash chain is generated at the very
      beginning and cannot be changed once generated. Otherwise, it
      cannot pass verification by SHA256, and as far as the payout is
      concerned, this is nothing more than a probability game in which
      crash is a given. The official organizer cannot manipulate any
      game set. Therefore, CRASH is more transparent than other
      gambling methods. This is the cornerstone on which our game is
      built.
    </p>
    <p>Simple calculation:</p>
    <p>
      When the 13-bit hash value is 8000000000000 = 1.98, 0xb000000000
      = 3.168, 0xc000000000 = 3.96, that is, the first digit is
      greater than 8((16-8)/16≈0.5), the result is approximately 2x;
      when the first digit is greater than b((16-11)/16≈0.3), the
      result is approximately 3x; and when the first digit is greater
      than c((16-12)/16≈0.25), the result is approximately 4x, and the
      same rule applies to the rest.
    </p>
    <p>
      When the 13-bit hash value is f000000000000 = 15.84,
      ff00000000000 = 253.44, fff000000
    </p>
  </div>
</div>`;
export { e as default };
