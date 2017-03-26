/**
 * @rsTeam02
 * fisher-yates shuffle
 * after every loop pass decrease range, select a random index, choose element as result from the seq and remove from scratch 
 * same random Index 2 or n times in a row will result no shuffle 
 */

class ShuffleArray {

    shuffle(array = [..."1234567890"]) {
        for (let j = array.length - 1; j >= 0; j--) {
            let k = Math.floor(Math.random() * j);
            this.exchange(array, k, j);
        }
        return array;
    }

    exchange(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

}