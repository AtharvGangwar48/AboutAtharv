function Week4() {
    const images = [
      "https://selzy.com/en/blog/wp-content/uploads/2023/06/6-8.png",
      "https://selzy.com/en/blog/wp-content/uploads/2023/06/4-11.png",
      "https://selzy.com/en/blog/wp-content/uploads/2023/06/3-9.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhYLbqSxALy0-JZesVNDPRyHtvYe76dxI1kNNptDKDncvV1n6qXrJ44fqmqH6OK4h--Y&usqp=CAU",
      "https://selzy.com/en/blog/wp-content/uploads/2023/06/1-7.png",
      "https://selzy.com/en/blog/wp-content/uploads/2023/06/2-7.png"
    ];
  
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Week 4: Email Correction Activity & 7 C's of Communication</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          7 C's of Communication:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Clarity:</strong>&nbsp;Be clear about the message you want to convey, ensuring the receiver understands it without confusion.</li>
          <li><strong>Conciseness:</strong>&nbsp;Keep your message brief and to the point, eliminating unnecessary details.</li>
          <li><strong>Concreteness:</strong>&nbsp;Use specific facts and figures to support your message, avoiding vague or ambiguous language.</li>
          <li><strong>Correctness:</strong>&nbsp;Ensure your message is accurate and free of errors, as mistakes can undermine your credibility.</li>
          <li><strong>Completeness:</strong>&nbsp;Make sure your message includes all necessary information, providing the recipient with everything they need to respond appropriately.</li>
          <li><strong>Courtesy:</strong>&nbsp;Be polite and respectful in your communication, fostering a positive interaction</li>
          <li><strong>Consideration:</strong>Tailor your message to the receiver’s perspective, understanding their needs and background.</li>
        </ul>
      </div>
      <br /><br />
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
