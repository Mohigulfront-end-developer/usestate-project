import { useState, useRef, useEffect } from "react";

const UseSate = () => {
  const [submitBtnText, setSubmitBtnText] = useState("Submit title");
  const [backBtnText, setBackBtnText] = useState("Back");
  const [descTitle, setDescTitle] = useState("Choose title content");
  const lineRef2 = useRef(null);
  const lineRef3 = useRef(null);

  useEffect(() => {
    const line2 = lineRef2.current;
    const line3 = lineRef3.current;

    if (line2 && line3) {
      if (submitBtnText === "Yes, go ahead") {
        line3.style.opacity = "1";
      } else {
        line3.style.opacity = "0.2";
      }

      if (submitBtnText === "Submit description") {
        line2.style.opacity = "1";
      } else {
        line2.style.opacity = "0.2";
      }
    }
  }, [submitBtnText]);

  const handleSubmit = () => {
    if (submitBtnText === "Submit title") {
      setSubmitBtnText("Submit description");
      setDescTitle("Choose description content");
    } else if (submitBtnText === "Submit description") {
      setSubmitBtnText("Yes, go ahead");
      setBackBtnText("No, go back");
      setDescTitle("Are you happy now?");
    } else if (submitBtnText === "Yes, go ahead") {
      setDescTitle("Ok, we're done. Thanks for sending us your data!");
      setSubmitBtnText("Good bye");
      setBackBtnText("Back home");
    }
  };

  const handleBack = () => {
    if (backBtnText === "Back") {
      setSubmitBtnText("Submit title");
      setDescTitle("Choose title content");
    } else if (backBtnText === "No, go back") {
      setSubmitBtnText("Submit description");
      setBackBtnText("Back");
      setDescTitle("Choose description content");
    }
  };

  return (
    <div className="container w-full max-w-3xl mx-auto my-0 py-0 px-4 flex justify-center pt-24">
      <div className="col py-12 px-8 rounded-lg w-full bg-purple-50 flex gap-20 mt-[150px]">
        <div className="steps flex flex-col ">
          <div
            onClick={() => {
              setSubmitBtnText("Submit title");
              setDescTitle("Choose title content");
            }}
            className="line"
          >
            <div className="flex">
              <h1 className="border border-solid rounded-full text-center px-[10px] mr-2 hover:bg-yellow-500 hover:text-white">
                1
              </h1>
              <h2 className="font-semibold">Choose title</h2>
            </div>
          </div>

          <div
            ref={lineRef2}
            onClick={() => {
              setSubmitBtnText("Submit description");
              setDescTitle("Choose description content");
            }}
            className="line"
          >
            <div className="flex mt-[10px]">
              <h1 className="border border-solid rounded-full text-center px-[10px] mr-2 hover:bg-yellow-500 hover:text-white">
                2
              </h1>
              <h2 className="font-semibold">Choose description</h2>
            </div>
          </div>

          <div
            ref={lineRef3}
            onClick={() => {
              setSubmitBtnText("Yes, go ahead");
              setBackBtnText("No, go back");
              setDescTitle("Are you happy now?");
            }}
            className="line"
          >
            <div className="flex mt-[10px]">
              <h1 className="border border-solid rounded-full text-center px-[10px] mr-2 hover:bg-yellow-500 hover:text-white">
                3
              </h1>
              <h2 className="font-semibold">Confirm data</h2>
            </div>
          </div>
        </div>

        <div className="submits">
          <div className="description">
            <h3>{descTitle}</h3>
          </div>

          <div className="submit mt-[20px]">
            <button
              onClick={handleBack}
              className="bg-yellow-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mr-[10px]"
            >
              {backBtnText}
            </button>
            <button
              onClick={handleSubmit}
              className="bg-yellow-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
            >
              {submitBtnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseSate;
