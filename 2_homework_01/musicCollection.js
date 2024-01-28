const albums = [
    {artist: "Metallica", title: "St. Anger", year: "2003"},
    {artist: "Metallica", title: "72 Seasons", year: "2023"},
    {artist: "AC/DC", title: "Power Up", year: "2020"},
    {artist: "AC/DC", title: "Highway to Hell", year: "1979"},
]

const musicCollection = {
    albums: [...albums],
    [Symbol.iterator]: function () {
        let counter = 0;
        return {
            next: (() => {
                if (counter < this.albums.length) {
                    return {done: false, value: this.albums[counter++]}
                } else {
                    return {done: true}
                }
            })
        }
    }
}


for (const album of musicCollection) {
    console.log(album)
}
