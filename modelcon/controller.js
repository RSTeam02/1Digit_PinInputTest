/**
 * @rsTeam02
 * sakai.jun01@gmail.com 
 * Control unit 
 * + define a 3x4 Matrix and assign click listeners for numeral output, every button returns 1 - digit as char
 * + concat up to 4 char numbers as pin. 
 * + compare random generated with entered pin => return correct or wrong pin
 * + option to shuffle numpad (checkbox)
 */

class Controller {

    constructor() {
        this.shuffle = document.getElementById("cbShuffle");
        this.newPin();
        this.initRaster(this.shuffle.checked);
        this.btnListener();

    }

    btnListener() {

        document.getElementById("np").addEventListener("click", () => {
            this.newPin();
            this.view.pinInfo(this.getPin());
        });

        document.getElementById("cbShuffle").addEventListener("click", () => {
            (this.shuffle.checked)
                ? this.initRaster(true)
                : this.initRaster(false);
        });
    }

    newPin() {
        this.pin = new ShuffleArray().shuffle().join("").slice(0, 4);
    }

    getPin() {
        return this.pin;
    }

    initView(seq) {
        this.view = new View(seq, 4);
        this.view.pinInfo(this.getPin());
        this.view.svgMat(this.tileArr);
    }

    setSeq(seq) {
        this.seq = seq;
    }

    getSeq() {
        return this.seq;
    }

    //rxc tiles react on clicks, events
    tileListener() {
        this.seq = "";
        var pattern = new RegExp("\\d+");
        //handler/listener for each tile, integer output as string 
        for (let i = 0; i < this.tileArr.length; i++) {
            for (let j = 0; j < this.tileArr[i].length; j++) {
                (() => {
                    var handler = () => {
                        /* handler conditions for tiles
                           numeric chars 0-9 */
                        if (this.tileArr[i][j].val.toString().match(pattern)) {
                            if (this.seq.length !== 4) {
                                this.seq += this.tileArr[i][j].val.toString();
                                document.getElementById("pw").setAttribute("value", this.seq);
                            }
                        } else {
                            //confirm, clear input
                            if (this.tileArr[i][j].val.toString() === "ok") {
                                (this.getPin() === this.seq)
                                    ? this.view.pinInfo(this.getPin(), ", correct pin")
                                    : this.view.pinInfo(this.getPin(), ", wrong pin");
                            } else {
                                document.getElementById("pw").setAttribute("value", "");
                                this.setSeq("");
                            }
                        }
                    };
                    this.tileArr[i][j].sId.addEventListener("click", handler, false)
                })();
            }
        }
    }

    //init id to tiles
    initSeq(seq) {
        let idx = 0;
        for (let i = 0; i < this.tileArr.length; i++) {
            for (let j = 0; j < this.tileArr[i].length; j++) {
                this.tileArr[i][j].sId = document.getElementById("shape" + idx);
                idx++;
            }
        }
    }

    initRaster(shuffle) {
        let seq = [];
        let expr = 0;
        this.tileMat = new TileMatrix();
        this.tileArr = this.tileMat.createTileMat(4, 3, shuffle);
        this.initView(seq);
        this.initSeq(seq);
        this.tileListener();
    }

}