// import React from "react";
// import WithMaterilTable from "./withMaterilTable";

// const newsArticles = [
//   {
//     title: "Why Animal Welfare is a Corporate and an individual...",
//     date: "19 May 2023",
//     source: "SOCIALSTORY",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbO48XWvh6fJc2Ma6voJlnkhktrdb2DVWtChGsbTFLVrRjdVAPI9_c_97CFMq8mDMlm9w&usqp=CAU", // Replace with actual image URL
//   },
//   // {
//   //   title: "Unlocking the power of CSR: Impactful initiatives and future...",
//   //   date: "11 April 2023",
//   //   source: "HT",
//   //   image: "https://via.placeholder.com/300", // Replace with actual image URL
//   // },
// ];

// // const smallArticles = [
// //   {
// //     title: "Technology In CSR Is A Game-changer For...",
// //     date: "4 April 2023",
// //     image: "https://via.placeholder.com/100", // Replace with actual image URL
// //   },
// //   {
// //     title: "Sumit Tayal on 2023-24 Union Budget:...",
// //     date: "3 Feb 2023",
// //     image: "https://via.placeholder.com/100", // Replace with actual image URL
// //   },
// //   {
// //     title: "Give & PATH Install 76 Oxygen Plants In India...",
// //     date: "23 Nov 2022",
// //     image: "https://via.placeholder.com/100", // Replace with actual image URL
// //   },
// // ];

// const NewsSection = () => {
//   return (
//     <div className="container mx-auto px-6 py-16">
//       <h2 className="text-3xl font-bold text-gray-900 mb-4">
//         <span className="text-red-500">give</span> in the news
//       </h2>
//       <p className="text-gray-600 mb-10">Some stories in the media featuring Give</p>

//       <div className="grid md:grid-cols-3 gap-6">
//         {/* Large News Cards */}
//         <div className="md:col-span-2 grid md:grid-cols-2 gap-2">
//           {newsArticles.map((news, index) => (
//             <div key={index} className="bg-white h-100 shadow-lg rounded-xl overflow-hidden">
//               <img src={news.image} alt={news.title} className="w-full h-100 object-cover" />
//               {/* <div className="p-4">
//                 <h3 className="text-lg font-semibold">{news.title}</h3>
//                 <p className="text-sm text-gray-500">{news.date}</p>
//                 <p className="text-sm font-semibold text-green-600 mt-2">{news.source}</p>
//               </div> */}
//             </div>
//           ))}
 
//         </div>

// <WithMaterilTable/>
//         {/* Small News Cards */}
//         {/* <div className="space-y-4">
//           {smallArticles.map((article, index) => (
//             <div key={index} className="flex items-center bg-white shadow-lg rounded-xl p-4">
//               <img
//                 src={article.image}
//                 alt={article.title}
//                 className="w-16 h-16 object-cover rounded-lg mr-4"
//               />
//               <div>
//                 <h4 className="text-sm font-semibold">{article.title}</h4>
//                 <p className="text-xs text-gray-500">{article.date}</p>
//               </div>
//             </div>
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default NewsSection;





import React from "react";
import WithMaterilTable from "./withMaterilTable";

const newsArticles = [
  {
    title: "Why Animal Welfare is a Corporate and an individual...",
    date: "19 May 2023",
    source: "SOCIALSTORY",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbO48XWvh6fJc2Ma6voJlnkhktrdb2DVWtChGsbTFLVrRjdVAPI9_c_97CFMq8mDMlm9w&usqp=CAU", 
  },
];

const NewsSection = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        <span className="text-red-500">give</span> in the news
      </h2>
      <p className="text-gray-600 mb-10">Some stories in the media featuring Give</p>

      {/* Flex container for equal height */}
      <div className="flex flex-row gap-1 items-stretch">
        {/* Image Section - 40% */}
        <div className="w-2/5 flex flex-col">
          {newsArticles.map((news, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden h-full">
              <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Donation Section - 60% */}
        <div className="w-3/5 flex flex-col">
          <WithMaterilTable />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
