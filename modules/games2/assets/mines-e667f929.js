const e = `<div class="item">
  <h2>How Are the Results Calculated?</h2>
  <div class="content">
    <p>
      To get the results, we calculate the hash value of the combination
      with HMAC_SHA256. This gives us a 64-character hexadecimal string:
      hash = HMAC_SHA256 (clientSeed:nonce, serverSeed).
    </p>
    <div class="code-area">
      <pre>
const crypto = require("crypto");

function getResult(hash) {
  const allNums = [
  7, 2, 19, 25, 1, 13, 5, 24, 14, 6, 15, 9, 22, 16, 3, 17, 18, 20, 8, 21, 4,
  12, 10, 23, 11,
  ];
  let seed = hash;
  let finalNums = createNums(allNums, seed);
  seed = crypto.createHash("SHA256").update(seed).digest("hex");
  finalNums = createNums(finalNums, seed);
  return finalNums.map((m) => m.num.num);
}

function createNums(allNums, hash) {
  let nums = [];
  let h = crypto.createHash("SHA256").update(hash).digest("hex");
  allNums.forEach((c) => {
    nums.push({ num: c, hash: h });
    h = h.substring(1) + h.charAt(0);
  });

  nums.sort(function (o1, o2) {
    if (o1.hash < o2.hash) {
    return -1;
    } else if (o1.hash === o2.hash) {
    return 0;
    } else {
    return 1;
  }
  });
  return nums;
}

function main (serverSeed, clientSeed, nonce) {
  let resultArr = [clientSeed, nonce];
  let hmacSha256Result = crypto.createHmac("sha256", serverSeed).update(resultArr.join(":")).digest("hex")
  let resultList = getResult(hmacSha256Result);
  console.log(resultList);
}

// main("server seed", "client seed", "nonce");
      </pre>
    </div>
  </div>
</div>`;
export { e as default };
