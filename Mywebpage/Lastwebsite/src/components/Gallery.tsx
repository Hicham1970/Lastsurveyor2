const images = [
  {
    url: "https://storage.googleapis.com/a1aa/image/B0wvoQfi042BeE3VfNzjBfsIMEFjxUwpBG83PNAi5yPibW9OB.jpg",
    alt: "Container ship at port",
    title: "Port Operations",
  },
  {
    url: "https://storage.googleapis.com/a1aa/image/MW7EIpbNjdYWERx2YqWLc99O5XnXfzMfqybcsb1D7HleIreOB.jpg",
    alt: "Ship deck",
    title: "Deck Inspection",
  },
  {
    url: "https://storage.googleapis.com/a1aa/image/GyrJZ5qYIvqFIJPn71qaNtaeG3r1fuTVojtBCve8wJsjQreOB.jpg",
    alt: "Ship gangway",
    title: "Access Equipment",
  },
  {
    url: "https://storage.googleapis.com/a1aa/image/5b6WkoJjPEoWJZgmpOfevGcg2RJ8MGjUxmP6vHvxIaOytVvTA.jpg",
    alt: "Cargo operations",
    title: "Loading Operations",
  },
];

export default function Gallery() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Inspection Gallery
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            View our professional marine inspection work in action
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <div key={image.title} className="relative group">
              <div className="relative w-full h-64 bg-white dark:bg-gray-700 rounded-lg overflow-hidden group-hover:opacity-75 transition-opacity duration-300">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                {image.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
