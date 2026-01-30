const bobsFollowers = ["Saman", "Hedi", "Rashid", "Kawan"];

const tinasFollowers = ["Sara", "Rashid", "Kawan"];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);
