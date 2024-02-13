export class Slider {
    photoData = [];
    currentIndex = 0;
    dataLength;
    lastIndex;

    constructor(photoData) {
        this.photoData = photoData;
        this.lastIndex = this.photoData.length-1;
        this.dataLength = this.photoData.length;
    }

    get dataLength () {return this.dataLength};
    getCurrentImage() {return this.photoData[this.currentIndex];}
    setCurrentIndex(index) {this.currentIndex = index};

    next() {
        if (this.currentIndex == this.lastIndex) {
            this.currentIndex = 0;
            return this.photoData[this.currentIndex];
        }
        return this.photoData[++this.currentIndex];
    }
    previous() {
        if (this.currentIndex == 0) {
            this.currentIndex = this.lastIndex;
            return this.photoData[this.currentIndex];
        }
        return this.photoData[--this.currentIndex];
    }
}
