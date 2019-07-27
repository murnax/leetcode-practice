/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let position = [0, 0];
    moves.split('').forEach(move => {
        switch (move) {
            case 'U':
                position[1] += 1;
                break;
            case 'D':
                position[1] -= 1;
                break;
            case 'L':
                position[0] -= 1;
                break;
            case 'R':
                position[0] += 1;
                break;
        }
    });
    console.log(position);
    return position[0] === 0 && position[1] === 0;
};

const output = judgeCircle("LL");
console.log(output);