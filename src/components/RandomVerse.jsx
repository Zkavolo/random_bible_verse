import React, { useEffect, useState } from "react";
import VerseComponent from "./VerseComponent";

const RandomVerse = () => {
  const [verse, setVerse] = useState(null);
  const [id, setId] = useState(Math.floor(Math.random() * 10) + 1);
  // const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setVerse(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!verse) return null;

  const genNewVerse = () => {
    setId(Math.floor(Math.random() * 10) + 1);
    // console.log(isPressed);
    // setIsPressed((prev) => !prev);
  };

  return (
    <section>
      <div className="flex flex-col items-center">
        <button
          onClick={genNewVerse}
          // className={`${
          //   isPressed ? "bg-black" : "bg-gradient-to-r from-white to-black"
          // } rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-black hover:to-white hover:shadow-xl hover:shadow-white pl-4 pr-4 p-3 pm-2`}
          className="bg-gradient-to-r from-white to-black  rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-black hover:to-white hover:shadow-xl hover:shadow-white pl-4 pr-4 p-3 pm-2"
        >
          <h1 className="text-xl text-black-900 font-bold">Random Verses</h1>
        </button>
        <div className="m-6 sm-4">
          <VerseComponent verse={verse} />
        </div>
      </div>
    </section>
  );
};

export default RandomVerse;
