/*

Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

Example

For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
solution(yourLeft, yourRight, friendsLeft, friendsRight) = false.

*/

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  // 1. find the heaviest weights they each are able to lift
  const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  const friendsStrongest =
    friendsLeft >= friendsRight ? friendsLeft : friendsRight;

  // 2. find the weakest arms
  const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
  const friendsWeakest =
    friendsLeft <= friendsRight ? friendsLeft : friendsRight;

  // 3. check if they are equally strong
  return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
}

//
