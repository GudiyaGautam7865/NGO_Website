import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CoffeeCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const posts = [
        {
            imgSrc: "https://images.unsplash.com/photo-1596265371388-43edbaadab94",
            title: "Aromatic Coffee Blend",
            description: "Discover the rich taste of premium coffee beans roasted to perfection.",
            date: "Jan 10, 2025",
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b",
            title: "Morning Brew Delight",
            description: "Start your day with the perfect cup of coffee, brewed just for you.",
            date: "Feb 5, 2025",
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1564979268369-42032c5ca998",
            title: "Barista's Choice",
            description: "Handcrafted coffee blends made by the best baristas around.",
            date: "Mar 3, 2025",
        },
    ];

    return (
        <div className="w-full px-4 md:px-8 lg:px-16 py-12">
            <h2 className="text-2xl font-bold text-center mb-6">Our Coffee Selection</h2>
            <Slider {...settings} className="overflow-hidden">
                {posts.map((post, index) => (
                    <div className="p-4" key={index}>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={post.imgSrc} alt="Coffee" className="w-full h-60 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold">{post.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{post.description}</p>
                                <span className="text-gray-400 text-xs">{post.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CoffeeCarousel;