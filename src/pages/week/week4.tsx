function Week4() {
    const images = [
      "/images/email1.jpg",
      "/images/email2.jpg",
      "/images/email3.jpg",
      "/images/email4.jpg",
      "/images/email5.jpg",
      "/images/email6.jpg"
    ];
  
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Week 4: Email Correction Activity</h1>
        <p className="text-lg text-gray-600 mb-6">
          We participated in an activity where we were given samples of poorly written emails and had to rewrite them without any mistakes.
        </p>
        
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Uploaded Samples:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105">
                <img 
                  src={src} 
                  alt={`Email Sample ${index + 1}`} 
                  className="w-full h-48 object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Key Takeaways:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Understanding common email mistakes.</li>
            <li>Improving clarity and professionalism in emails.</li>
            <li>Practicing concise and effective communication.</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Week4;