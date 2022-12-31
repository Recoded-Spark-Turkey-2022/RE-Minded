import React from 'react';

function ContentA() {
  return (
    <div>
      <div className="text-5xl leading-6 mt-16 pl-28">
        <h1>CAREERS AT HEALING</h1>
      </div>
      <div className="text-xl leading-6 mt-4 pl-28 text-gray-400">
        <h3>Be a part of making people feel better.</h3>
      </div>
      <div className="text-lg leading-6 mt-20 pl-28 pr-52 text-gray-700">
        Our SEO software cuts through mountains of data to surface critical
        insights. We build and maintain systems that process massive amounts of
        data (we&apos;re talking 36 trillion records per day and multiple
        petabytes of storage.) We model transparent and empathetic marketing for
        the world. We educate our community, making every effort to help them
        improve their skill. And we do it all by fostering a culture that
        encourages accountability, empathy, and transparency.
      </div>
      <div className="text-2xl leading-6 mt-20 pl-28 text-gray-700">
        <h3>What role will you play?</h3>
      </div>
      <div className="text-xl leading-6 mt-4 pl-12 mb-8">
        <button
          type="button"
          className="text-xl md:text-lg ml-16 lg:px-6 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 cursor-pointer "
        >
          SEE OUR OPEN LIST
        </button>
      </div>
    </div>
  );
}

export default ContentA;
