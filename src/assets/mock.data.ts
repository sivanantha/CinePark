interface slideshowImagesArray {
    imageUrls: string[];
}

export let slideshowImages: slideshowImagesArray = {
    imageUrls: [
        'assets/images/slideshow1.jpg',
        'assets/images/slideshow2.jpg',
        'assets/images/slideshow3.jpg',
        'assets/images/slideshow4.jpg',
        'assets/images/slideshow5.jpg',
        'assets/images/slideshow6.jpg',
    ]
};

interface movie {
    name: string;
    category: string;
    imageUrl: string;
    rating: string;
    likes: string;
    certificate: string;
    languages: string[];
}

interface movies {
    recommended: movie[];
}

export let movies: movies = {
    recommended: [{ name: 'Spider-Man: No Way Home', category: 'Action/Adventure/Sci-Fi', imageUrl: 'assets/images/spider-man.jpg', rating: '9.0', likes: '340k', certificate: 'U/A', languages: ['Tamil', 'English', 'Hindi', 'Telugu']},
    { name: '83', category: 'Drama/Sports', imageUrl: 'assets/images/83.jpg', rating: '8.0', likes: '45k', certificate: 'U', languages: ['Tamil', 'Hindi']},
    { name: 'Pushpa: The Rise - Part 01', category: 'Action/Thriller', imageUrl: 'assets/images/pushpa.jpg', rating: '7.8', likes: '30k', certificate: 'U/A', languages: ['Tamil', 'Hindi', 'Telugu']},
    { name: 'Writer', category: 'Crime/Drama', imageUrl: 'assets/images/writer.jpg', rating: '8.0', likes: '50k', certificate: 'U', languages: ['Tamil']},
    { name: 'Shyam Singha Roy', category: 'SuperNatural/Thriller', imageUrl: 'assets/images/shyam-singha-roy.jpg', rating: '6.9', likes: '20k', certificate: 'U/A', languages: ['Telugu']},
    { name: 'The Matrix Resurrections', category: 'Action/Sci-Fi/Thriller', imageUrl: 'assets/images/matrix-resurrections.jpg', rating: '7.5', likes: '140k', certificate: 'U/A', languages: ['Tamil', 'English', 'Hindi']},
    { name: 'Maanaadu', category: 'Action/Sci-Fi/Thriller', imageUrl: 'assets/images/maanaadu.jpg', rating: '8.5', likes: '90k', certificate: 'U/A', languages: ['Tamil']},
    { name: 'Anandham Vilaiyadum Veedu', category: 'Comedy/Drama/Romantic', imageUrl: 'assets/images/anandham-vilaiyadum-veedu.jpg', rating: '6.5', likes: '15k', certificate: 'U/A', languages: ['Tamil']}]
}
