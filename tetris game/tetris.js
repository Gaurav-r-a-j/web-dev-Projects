"usr strict";

const canvas = document.getElementById('tetris');
const context = canvas.getContext("2d");content.scale(20,20);


function areanaSweep(){
    let rowCount = 1;
    outer: for(let y = arena.lenght -1; y>0; --y){
        for(let x = 0; x<arena[y].lenght; ++x){
            if(arena[y][x]===0){
                continue outer;
            }
        }

        const row = arena.splice(y,1)[0].fill(0);
        arena.unshift(row);
        ++y;
        player.score += rowCount*10; rowCount*=2;

    }
}


function collide(arena,player){
    const m = player.matrix;
    const o = player.pos;
    for (let y = 0; y < m.length; y++) {
        for (let x = 0; x < m[y].length; x++) {
            if(m[y][x] !==0 && (arena[y+ o.y][x+o.x]) !==0){
                return true;
            }
        }
        
    }
    return false;
}



// function createMatrix(w,h)[
//     const matrix = []; while(h--){
//         matrix.push(new Array(w).fill(0));
//     }
//     return matrix;
// ]
