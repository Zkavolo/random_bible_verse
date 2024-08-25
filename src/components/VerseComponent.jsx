import React from "react";

const VerseComponent = ({ verse }) => {
  return (
    <section>
      <h2 className="text-lg font-extrabold">{verse.reference}</h2>
      {verse.verses.map((verse) => (
        <div key={verse.verse} className="mt-2">
          <p className="text-md font-semibold">
            <strong></strong> {verse.text}
          </p>
          <p className="text-md italic font-semibold">
            Context: {verse.context}
          </p>
        </div>
      ))}
      <p className="italic text-sm mt-2 pb-8 font-bold">
        Translation: {verse.translation_name}
      </p>
      <h1>Indonesia Translation</h1>
      <p className="text-md font-semibold">{verse.indonesian_translation}</p>
    </section>
  );
};

export default VerseComponent;
