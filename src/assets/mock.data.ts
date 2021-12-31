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

export let movies = {
    recommended: [{ name: 'Spider-Man: No Way Home', category: 'Action / Adventure / Sci-Fi', imageUrl: 'assets/images/spider-man.png', bannerUrl: 'assets/images/spider-man-banner.jpg', rating: '9.0', likes: '340k', runningTime: '2hr 31min', certificate: 'U/A', languages: ['Tamil', 'English', 'Hindi', 'Telugu']},
    { name: '83', category: 'Drama / Sports', imageUrl: 'assets/images/83.jpg', rating: '8.0', likes: '45k', certificate: 'U', languages: ['Tamil', 'Hindi']},
    { name: 'Pushpa: The Rise - Part 01', category: 'Action / Thriller', imageUrl: 'assets/images/pushpa.jpg', rating: '7.8', likes: '30k', certificate: 'U/A', languages: ['Tamil', 'Hindi', 'Telugu']},
    { name: 'Writer', category: 'Crime / Drama', imageUrl: 'assets/images/writer.jpg', rating: '8.0', likes: '50k', certificate: 'U', languages: ['Tamil']},
    { name: 'Shyam Singha Roy', category: 'SuperNatural / Thriller', imageUrl: 'assets/images/shyam-singha-roy.jpg', rating: '6.9', likes: '20k', certificate: 'U/A', languages: ['Telugu']},
    { name: 'The Matrix Resurrections', category: 'Action / Sci-Fi / Thriller', imageUrl: 'assets/images/matrix-resurrections.jpg', rating: '7.5', likes: '140k', certificate: 'U/A', languages: ['Tamil', 'English', 'Hindi']},
    { name: 'Maanaadu', category: 'Action / Sci-Fi / Thriller', imageUrl: 'assets/images/maanaadu.jpg', rating: '8.5', likes: '90k', certificate: 'U/A', languages: ['Tamil']},
    { name: 'Anandham Vilaiyadum Veedu', category: 'Comedy / Drama / Romantic', imageUrl: 'assets/images/anandham-vilaiyadum-veedu.jpg', rating: '6.5', likes: '15k', certificate: 'U/A', languages: ['Tamil']}]
}

export let theatres = [
    {name: 'AGS Cinemas', location: 'Maduravoyal', showTimes: ['10:00 AM', '2:30 PM', '08:00 PM'], filledSeats: '40', availableSeats: '40', price: '250.00'},
    {name: 'PVR', location: 'Anna Nagar', showTimes: ['06:00 AM', '02:00 PM', '11:00 PM'], filledSeats: '20', availableSeats: '30', price: '150.00'},
    {name: 'INOX', location: 'OMR', showTimes: ['08:30 AM', '01:30 PM', '06:00 PM', '11:30 PM'], filledSeats: '60', availableSeats: '10', price: '145.00'},
    {name: 'Mayajaal', location: 'ECR', showTimes: ['12:00 PM', '08:00 PM'], filledSeats: '29', availableSeats: '30', price: '180.00'}
]