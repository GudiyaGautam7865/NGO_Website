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
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set the speed of autoplay (in milliseconds)
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const posts = [
        {
            imgSrc: "https://images.unsplash.com/photo-1596265371388-43edbaadab94?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501",
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......",
            date: "Out 27, 2019",
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=503",
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......",
            date: "Out 27, 2019",
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1564979268369-42032c5ca998?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500",
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......",
            date: "Out 27, 2019",
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1576659531892-0f4991fca82b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501",
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......",
            date: "Out 27, 2019",
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1586083702768-190ae093d34d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=305&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=505",
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......",
            date: "Out 27, 2019",
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1484656551321-a1161420a2a0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=306&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=506",
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......",
            date: "Out 27, 2019",
        },
    ];

    return (
        <div className="container-fluid w-300 mb-15 ml-55 ">
            <div className="row ml-5">
                <div className="col-md-12  ">
                <Slider {...settings} id="news-slider" className="mt-20">
    {posts.map((post, index) => (
        <div className="post-slide px-7 " key={index}> {/* Added px-2 for spacing */}
            <div className="post-img relative overflow-hidden rounded-lg">
                <img src={post.imgSrc} alt="" className="w-full h-auto" />
                <a href="#" className="over-layer absolute top-0 left-0 w-full h-full opacity-0 bg-gradient-to-r from-blue-500 to-blue-300 transition-opacity duration-500 hover:opacity-100">
                    <i className="fa fa-link text-white text-2xl"></i>
                </a>
            </div>
            <div className="post-content bg-white p-4 rounded-lg shadow-md">
                <h3 className="post-title text-lg font-bold">
                    <a href="#">{post.title}</a>
                </h3>
                <p className="post-description text-gray-600">{post.description}</p>
                <span className="post-date text-gray-400 text-sm">
                    <i className="fa fa-clock-o"></i> {post.date}
                </span>
                <a href="#" className="read-more text-blue-500 hover:underline">read more</a>
            </div>
        </div>
    ))}
</Slider>

                </div>
            </div>
        </div>
    );
};

export default CoffeeCarousel;