/**
 * @rsTeam02
 * fisher-yates shuffle
 */

class ShuffleArray {

    shuffle(array = [..."123456789"]) {
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