
import React from "react";
import CourseCard from "./CourseCard";

const BharatanatyamClasses = () => {
  const courses = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ISWI8iGeWbePIgXtvRNc9LMgIB1MCgpFfQ&s",
      tag: "Drama",
      title: "Angika",
      description: "There are many variations of passages orem ipsum available but the majority have suffered alteration in some form by injected.",
      lessons: 10,
      seats: 75,
      years: 4,
      price: 750,
      rating: 4.0,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGjhVuX_T8KN7TbWnZ1uKt0MYBkQF6ypn5A&s",
      tag: "Design",
      title: "Navarasa Kauthwam",
      description: "There are many variations of passages orem ipsum available but the majority have suffered alteration in some form by injected.",
      lessons: 10,
      seats: 75,
      years: 4,
      price: 750,
      rating: 4.0,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZmm9Gnokdvn6JejG4DX1uYUMyiQpfwIWaboSpGRmK9zMrT74d3cJTLQv8i_UdeScPCPY&usqp=CAU",
      tag: "Science",
      title: "Bhogeendra Sayinam",
      description: "There are many variations of passages orem ipsum available but the majority have suffered alteration in some form by injected.",
      lessons: 10,
      seats: 75,
      years: 4,
      price: 750,
      rating: 4.0,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdpkP2SvxG4hwQ6zlmNr7MZVTfXGE-ig7EOGJvfNTrh70k1JkrBswYgdaA7GbYKqJXWU0&usqp=CAU",
      tag: "Science",
      title: "Sivoham",
      description: "There are many variations of passages orem ipsum available but the majority have suffered alteration in some form by injected.",
      lessons: 10,
      seats: 75,
      years: 4,
      price: 750,
      rating: 4.0,
    },
    {
      image: "https://userphotos2.teacheron.com/36751-82197.jpeg",
      tag: "Health",
      title: "Pushpanjali and Alarippu",
      description: "There are many variations of passages orem ipsum available but the majority have suffered alteration in some form by injected.",
      lessons: 10,
      seats: 75,
      years: 4,
      price: 750,
      rating: 4.0,
    },
    {
      image: "https://www.shutterstock.com/image-photo/indian-woman-learning-odissi-classical-260nw-2166501913.jpg",
      tag: "Finance",
      title: "Sundra Syama",
      description: "There are many variations of passages orem ipsum available but the majority have suffered alteration in some form by injected.",
      lessons: 10,
      seats: 75,
      years: 4,
      price: 750,
      rating: 4.0,
    },
  ];

  return (
    <div className="text-center py-12 bg-gray-100">
      <h2 className="text-black font-bold uppercase tracking-widest text-4xl mb-2 flex justify-center items-center">
        <i className="fas fa-book-open-reader mr-2"></i>Bharatanatyam Classes
      </h2>
      {/* <p className="text-gray-600 text-sm mb-8">
        It is a long established fact that a reader will be distracted.
      </p> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default BharatanatyamClasses;
