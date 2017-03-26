/**
 * @rsTeam02
 * define a set of tiles (row, column)
 * 
 */
class TileMatrix {

    constructor() {
        this.clearDisp();
    }

    //init matrix of tile instances, store properties
    createTileMat(row, column, shuffle) {
        var tiles = [];
        var noDigit = ["del", "ok"];
        var idx = 0;
        var rndArr = new ShuffleArray().shuffle();

        for (var i = 0; i < row; i++) {
            tiles[i] = [];
            for (var j = 0; j < column; j++) {
                tiles[i][j] = new Tile();
                tiles[i][j].x = i;
                tiles[i][j].y = j;
                tiles[i][j].sId = idx;

                if (shuffle) {
                    if (i !== 3 || (i === 3 && j === 0)) {
                        tiles[i][j].val = rndArr[idx].toString();
                    }
                } else {
                    ((idx + 1).toString() === "10") ? tiles[i][j].val = "0" : tiles[i][j].val = (idx + 1).toString();
                }
                if (i === 3 && j > 0) {
                    tiles[i][j].val = noDigit[j - 1];
                }
                idx++;
            }
        }
        return tiles;
    }

    clearDisp() {
        while (tileDisplay.firstChild) {
            tileDisplay.removeChild(tileDisplay.firstChild);
        }

    }
}