/**
 * @rsTeam02
 * View as SVG => dom
 */

class View {

    //draw eachtile as svg text/square
    constructor(seq, mxn) {
        this.svgNS = "http://www.w3.org/2000/svg";
        this.mxn = mxn;
        this.seq = seq;
        this.displaySize();
        this.i = 0;
    }

    pinInfo(pin, info = "") {
        document.getElementById("pInfo").innerHTML = "Pintest: " + pin + info;
    }

    //mat output as svg
    svgMat(tile) {
        var x = 0;
        var tileArr = [];
        for (var i = 0; i < tile.length; i++) {
            tileArr[i] = tile[i];
            var y = 0;
            for (var j = 0; j < tile[i].length; j++) {
                this.svgAlphaNum(tileArr[i][j], y, x);
                //next row
                y += 40;
            }
            //next column
            x += 40;
        }
    }
    //scale size for nxn
    displaySize() {
        this.w = this.mxn * 100;
        this.h = this.mxn * 40;
    }

    svgAlphaNum(tile, relDistX, relDistY) {
        let alphaNum = tile.val;
        //list ordered/random (preview, gamemode) sequence as integer, chars
        let gId = document.getElementById("tileDisplay");
        let id = tile.sId;
        let txt = document.createElementNS(this.svgNS, "text");
        let svg = document.getElementById("svgContent");
        svg.setAttribute("viewBox", "-5 -7 " + this.w + " " + this.h);
        txt.setAttribute("cursor", "pointer");
        txt.setAttribute("class", "pos")
        txt.setAttribute("id", "shape" + id);
        txt.setAttribute("transform", "translate(0,-5)");
        txt.setAttribute("text-anchor", "middle");
        txt.setAttribute("x", relDistX + 15);
        txt.setAttribute("y", relDistY + 26);
        txt.setAttribute("font-family", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif");

        //draw square border for each char or value
        let square = document.createElementNS(this.svgNS, "rect");
        square.setAttribute("transform", "translate(" + relDistX + " " + relDistY + ")");
        square.setAttribute("width", 30);
        square.setAttribute("height", 30);
        square.setAttribute("stroke", "black");
        square.setAttribute("stroke-width", "1");
        square.setAttribute("fill", "none");
        let numMode = document.createTextNode(alphaNum);
        txt.setAttribute("value", alphaNum);
        txt.appendChild(numMode);
        gId.appendChild(square);
        gId.appendChild(txt);
    }

}