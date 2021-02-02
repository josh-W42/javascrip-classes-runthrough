const Person = require("./person");

class Artist extends Person {
    /**
     * A artist object from type person.
     * @param {String} name - The person's name.
     * @param {Number} age - The person's age.
     * @param {Array} genre - The genre of the artist's music.
     * @param {String} label - The artist's record label.
     */
    constructor(name, age, genre, label) {
        super(name, false, age);
        this.genres = typeof genre === 'Array' ? genre : [genre];
        this.label = label;
        this.albums = [];
        this.songs = [];
        this.image = '';
        this.instagram = null;
    }

    playMusic() {
        console.log(`${this.name}: Playing ${this.genre}`);
    }

    walk() {
        console.log(`${this.name}: I'm walking like an artist`);
    }

    addSong(song) {
        this.songs.push(song);
        console.log(`${this.name}: Adding a song.`)
    }

    addAlbums(album) {
        this.albums.push(album);
    }

    addImageURL(url) {
        this.image = url;
    }

    addInstagramURL(url) {
        this.instagram = url;
    }
}

const drake = new Artist('Drake', 33, 'hip hop', 'cash money records');
const postMalone = new Artist('Post Malone', 25, ['hip hop', 'R&B', 'pop', 'trap'], 'Republic Recrods');

drake.addAlbums("Views")
drake.addAlbums("Take Care");
drake.addSong("God's Plan");
drake.addSong("Laugh Now Cry later");
drake.addImageURL("https://www.google.com/search?q=drake&sxsrf=ALeKk01mskAPw0Zcxh9291ZrYkpNNE_IGA:1612292134093&tbm=isch&source=iu&ictx=1&fir=-mEee9Z1vZ-O8M%252CM25oZDhLVbg3-M%252C%252Fm%252F05mt_q&vet=1&usg=AI4_-kQ79jqsaaTxwwcQ9Wxn94heMr1hWg&sa=X&ved=2ahUKEwjAsrSf8MvuAhU6HzQIHZqzCCoQ_B16BAhNEAE#imgrc=-mEee9Z1vZ-O8M");
drake.addInstagramURL("https://www.instagram.com/champagnepapi/?hl=en");

postMalone.addAlbums("Hollywoods bleeding");
postMalone.addAlbums("Stoney");
postMalone.addSong("Sunflower");
postMalone.addSong("Circles");
postMalone.addImageURL("https://www.google.com/search?q=post+malone&sxsrf=ALeKk00hrQVNKrd9UbdCOYVBwNecTIaKpw:1612292004278&tbm=isch&source=iu&ictx=1&fir=pjZAk-ixlcCa1M%252Cngq9gn60fLQgiM%252C%252Fg%252F11bw82cs0m&vet=1&usg=AI4_-kRr18vZTgCvqjrSLTxRj3g66jZlIw&sa=X&ved=2ahUKEwjVt8Hh78vuAhXqGDQIHSvvD9YQ_B16BAhIEAE#imgrc=pjZAk-ixlcCa1M");
postMalone.addInstagramURL("https://www.instagram.com/postmalone/?hl=en");


module.exports = Person;