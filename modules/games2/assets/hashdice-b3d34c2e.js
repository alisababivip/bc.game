const e = `<div class="item">
  <h2>Is HashDice a fair game?</h2>
  <div class="help-content">
    <p>
      We are a fair and transparent betting platform, aiming to eliminate
      all unfair factors and let players have fun, provides HashDice with
      provable and verified system that allows each game fair in encrypted
      way.
    </p>
    <p>
      In order to allow players to verify their bets, a pair of Server
      Seed and Client Seed is used to calculate a roll number.
    </p>
    <p>
      Knowing Server Seed, Client Seed and Nonce it's possible to
      calculate bet result. To prevent a player from result prediction,
      Server Seed is hidden, and a SHA-256 hash of the seed is shown
      instead. After next randomization, previous Server Seed is revealed
      and a player is able to verify the bet. Also, players can make sure
      that Server Seed wasn't changed by comparing their hashes before and
      after randomization.
    </p>
  </div>
  <h2>How is the data calculated?</h2>
  <div class="help-content">
    <p>To generate a roll number between 0 and 99,999:</p>
    <ol>
      <li>
        First we calculate the hash value of the combination with
        HMAC_SHA512. This gives us a 64-character hexadecimal string: hash
        = HMAC_SHA512 (clientSeed:nonce, serverSeed).
      </li>
      <li>
        We then take the first 5 characters of that hash and convert them
        to a decimal number ranging from 0 to 1,048,575 (16 ^ 5 - 1). If
        it is less than 1 million, we divide it by 100,000 and use it as
        your roll outcome. Otherwise, we repeat using the next five
        characters. We are able to repeat the process up to 25 times.
      </li>
      <li>
        In the very rare case ((48,576 / 1,000,000) ^ 25) that none of the
        25 trials are lower than 1 million when converted to decimal, we
        use the remaining 3 characters and convert them to your roll
        number.
      </li>
    </ol>
    <p>Code Example</p>
    <p>The following code example can be used to verify a bet:</p>
    <div class="code-area">
      <pre>
function getRoll (serverSeed, clientSeed, nonce) {
  var hash = hmac_sha512(clientSeed:nonce, serverSeed);
  var index = 0;
  do {
    var lucky = parseInt(hash.substr(index, 5), 16);
    index += 5;
  } while (lucky >= 1000000);
  return lucky % 100000;
}
      </pre>
    </div>
    <p>
      Please also check our online bet
      <a
        class="text-decoration cl-primary"
        rel="noopener noreferrer"
        href="https://__BC_GITHUB__.github.io/verify/hashdice.html"
        target="_blank"
      >
        verify
      </a>
      .
    </p>
    <p>
      Tip: A new seed must be set to verify the previous data (the server
      seed is encrypted).
    </p>
  </div>
</div>`;
export { e as default };
