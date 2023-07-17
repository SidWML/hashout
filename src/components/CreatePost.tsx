import Button from "@/generics/Button";
import { faAdd, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { search } from "@/layout/LeftSidebar";
import { posts } from "@/libs/Posts";
import Select from "react-select";
import { scrapeMetaTags } from "../libs/Scraper";

export default function CreatePost() {
  const [text, setText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [formType, setFormType] = useState("text");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleLinkChange = async (event) => {
    const newLink = event.target.value;
    setLink(newLink);

    try {
      const { title, description } = await scrapeMetaTags(newLink);
      setTitle(title);
      setDescription(description);
    } catch (error) {
      console.error("An error occurred while scraping meta tags:", error);
    }
  };

  const handleTextareaChange = (event) => {
    const value = event.target.value;
    setText(value);
    if (value.includes("@")) {
      const users = search;
      const filteredSuggestions = users[0].peoples.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase().substring(value.lastIndexOf("@") + 1))
      );

      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const mentionIndex = text.lastIndexOf("@");
    const newText = text.substring(0, mentionIndex) + `@${suggestion}` + text.substring(mentionIndex + suggestion.length + 1);

    setText(newText);
    setShowSuggestions(false);
  };

  const router = useRouter();
  const viewNavigate = (newRoute) => {
    if (!document.startViewTransition) {
      return router.push("/");
    } else {
      return document.startViewTransition(() => {
        router.push(newRoute);
      });
    }
  };
  const getOptionLabel = (option) => (
    <div className="px-4 py-1.5 flex items-center gap-1">
      <img src={option.avatar} alt={option.community} className=" rounded-full" style={{ width: "24px", height: "24px", marginRight: "8px" }} />
      {option.community}
    </div>
  );

  return (
    <div className=" rounded-[10px] overflow-hidden border border-gray-300">
      <div className=" flex items-center  border-b bg-white p-4 justify-between">
        <h1 className=" text-xl font-medium">Create a {formType === "community" ? "Community" : "Post"}</h1>
        <button
          onClick={() => viewNavigate("/")}
          className="  px-6 flex gap-1 items-center rounded-full border-black hover:bg-black hover:text-white font-medium text-xs py-2 border"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> <span className=""> Back</span>{" "}
        </button>
      </div>
      {formType === "community" ? (
        <div className=" space-y-4 p-8  bg-white">
          <div className="flex flex-col space-y-2">
            <label htmlFor="Title" className=" font-medium text-[#475569]">
              Community Name
            </label>
            <input type="text" id="Title" placeholder='"Feeling Awesome"' className=" px-4 py-3 border focus:outline-sky-500 rounded-[10px]" />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="description" className=" font-medium text-[#475569]">
              Description
            </label>
            <textarea
              value={text}
              onChange={handleTextareaChange}
              placeholder="Type your message..."
              className="w-full border focus:outline-sky-500 p-2 rounded-lg"
            ></textarea>
            {showSuggestions && (
              <ul className="mt-2 bg-white border rounded-lg shadow-md">
                {suggestions.map((suggestion) => (
                  <div
                    onClick={() => handleSuggestionClick(suggestion.name)}
                    className=" flex px-4 hover:bg-sky-100 gap-2 py-2 border-b  border-[#E6F0F2]  items-center "
                  >
                    <img src={suggestion.avatar} alt="" className=" w-[30px] h-[30px] " />
                    <h1 className=" font-medium text-lg">{suggestion.name}</h1>
                  </div>
                ))}
              </ul>
            )}
          </div>
          <div className=" flex flex-col space-y-2">
            <h1 htmlFor="description" className=" font-medium text-[#475569]">
              Cover Picture
            </h1>
            <div className=" flex items-center gap-4">
              <div className="w-[80px] h-[80px] relative rounded-[10px] overflow-hidden">
                <img src="/search/pa-2.png" alt="" className=" w-full h-full " />
                <div className=" absolute top-0 right-0 left-0 bottom-0 bg-slate-200 bg-opacity-50"></div>
              </div>
              <div className="w-[80px] h-[80px] border shadow-lg flex items-center justify-center relative rounded-[10px] overflow-hidden">
                <label htmlFor="file" className="">
                  +
                </label>
                <input type="file" name="" id="file" multiple className=" hidden" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col space-y-2">
            <h1 htmlFor="description" className=" font-medium text-[#475569]">
              Profile Picture
            </h1>
            <div className=" flex items-center gap-4">
              <div className="w-[80px] h-[80px] relative rounded-[10px] overflow-hidden">
                <img src="/search/pa-2.png" alt="" className=" w-full h-full " />
                <div className=" absolute top-0 right-0 left-0 bottom-0 bg-slate-200 bg-opacity-50"></div>
              </div>
              <div className="w-[80px] h-[80px] border shadow-lg flex items-center justify-center relative rounded-[10px] overflow-hidden">
                <label htmlFor="file" className="">
                  +
                </label>
                <input type="file" name="" id="file" multiple className=" hidden" />
              </div>
            </div>
          </div>
          <div className=" w-full pt-4 flex items-center justify-end">
            <Button label="Create" />
          </div>
        </div>
      ) : (
        <div className=" space-y-6 md:p-8 p-4  bg-white ">
          <div className=" flex md:flex-row flex-col md:items-end items-center justify-start gap-4 w-full">
            <div className="flex flex-col w-full md:order-1 order-3 md:w-[50%] space-y-2   ">
              <label htmlFor="community" className=" font-medium text-[#475569]">
                Choose a Community
              </label>
              <Select
                styles={{
                  control: (base) => ({
                    ...base,
                    padding: "4px 0px",
                    borderRadius: "10px",
                  }),
                }}
                options={posts}
                getOptionLabel={getOptionLabel}
              />
            </div>
            <span className=" md:order-2 order-2">OR</span>
            <button
              onClick={() => setFormType("community")}
              className=" px-6 py-3  min-w-[max-content] font-medium border border-black md:order-3 order-1 text-sm  bg-black text-white uppercase space-x-1 rounded-full"
            >
              {" "}
              <FontAwesomeIcon icon={faAdd} /> <span className="">create Community</span>
            </button>
          </div>
          <div className="p-1 border w-[max-content] bg-gradient-to-r from-slate-100 backdrop-blur-md to-[#f5f5f5] rounded-[10px]">
            <button
              onClick={() => setFormType("text")}
              className={`px-6 py-2 rounded-[8px] ${formType === "text" ? " bg-black text-white" : " bg-transparent "} font-medium  text-sm`}
            >
              Text
            </button>
            <button
              onClick={() => setFormType("image")}
              className={`px-6 py-2 rounded-[8px] ${formType === "image" ? " bg-black text-white" : " "} font-medium text-sm`}
            >
              Image
            </button>
            <button
              onClick={() => setFormType("link")}
              className={`px-6 py-2 rounded-[8px] ${formType === "link" ? " bg-black text-white" : " "} font-medium text-sm`}
            >
              Link
            </button>
            <button
              onClick={() => setFormType("embed")}
              className={`px-6 py-2 rounded-[8px] ${formType === "embed" ? " bg-black text-white" : " "} font-medium text-sm`}
            >
              Embed
            </button>
          </div>
          <div className=" space-y-4 ">
            {formType === "text" ? (
              <div className=" space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="Title" className=" font-medium text-[#475569]">
                    Title
                  </label>
                  <input type="text" id="Title" placeholder='"Feeling Awesome"' className=" px-4 py-3 border focus:outline-sky-500 rounded-[10px]" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="description" className=" font-medium text-[#475569]">
                    Description
                  </label>
                  <textarea
                    value={text}
                    onChange={handleTextareaChange}
                    placeholder="Type your message..."
                    className="w-full border focus:outline-sky-500 p-2 rounded-lg"
                  ></textarea>
                  {showSuggestions && (
                    <ul className="mt-2 bg-white border rounded-lg shadow-md">
                      {suggestions.map((suggestion) => (
                        <div
                          onClick={() => handleSuggestionClick(suggestion.name)}
                          className=" flex px-4 hover:bg-sky-100 gap-2 py-2 border-b  border-[#E6F0F2]  items-center "
                        >
                          <img src={suggestion.avatar} alt="" className=" w-[30px] h-[30px] " />
                          <h1 className=" font-medium text-lg">{suggestion.name}</h1>
                        </div>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ) : formType === "image" ? (
              <div className=" space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="Title" className=" font-medium text-[#475569]">
                    Title
                  </label>
                  <input type="text" id="Title" placeholder='"Feeling Awesome"' className=" px-4 py-3 border focus:outline-sky-500 rounded-[10px]" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="description" className=" font-medium text-[#475569]">
                    Description
                  </label>
                  <textarea
                    value={text}
                    onChange={handleTextareaChange}
                    placeholder="Type your message..."
                    className="w-full border focus:outline-sky-500 p-2 rounded-lg"
                  ></textarea>
                  {showSuggestions && (
                    <ul className="mt-2 bg-white border rounded-lg shadow-md">
                      {suggestions.map((suggestion) => (
                        <div
                          onClick={() => handleSuggestionClick(suggestion.name)}
                          className=" flex px-4 hover:bg-sky-100 gap-2 py-2 border-b  border-[#E6F0F2]  items-center "
                        >
                          <img src={suggestion.avatar} alt="" className=" w-[30px] h-[30px] " />
                          <h1 className=" font-medium text-lg">{suggestion.name}</h1>
                        </div>
                      ))}
                    </ul>
                  )}
                </div>
                <div className=" flex flex-col space-y-2">
                  <h1 htmlFor="description" className=" font-medium text-[#475569]">
                    Upload
                  </h1>
                  <div className=" flex items-center gap-4">
                    <div className="w-[80px] h-[80px] relative rounded-[10px] overflow-hidden">
                      <img src="/search/pa-1.png" alt="" className=" w-full h-full " />
                      <div className=" absolute top-0 right-0 left-0 bottom-0 bg-slate-200 bg-opacity-50"></div>
                    </div>
                    <div className="w-[80px] h-[80px] relative rounded-[10px] overflow-hidden">
                      <img src="/search/pa-2.png" alt="" className=" w-full h-full " />
                      <div className=" absolute top-0 right-0 left-0 bottom-0 bg-slate-200 bg-opacity-50"></div>
                    </div>
                    <div className="w-[80px] h-[80px] border shadow-lg flex items-center justify-center relative rounded-[10px] overflow-hidden">
                      <label htmlFor="file" className="">
                        +
                      </label>
                      <input type="file" name="" id="file" multiple className=" hidden" />
                    </div>
                  </div>
                </div>
              </div>
            ) : formType === "link" ? (
              <div className=" space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="Title" value={title} className=" font-medium text-[#475569]">
                    Title
                  </label>
                  <input type="text" id="Title" placeholder='"Feeling Awesome"' className=" px-4 py-3 border focus:outline-sky-500 rounded-[10px]" />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="description" className=" font-medium text-[#475569]">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={handleTextareaChange}
                    placeholder="Type your message..."
                    className="w-full border focus:outline-sky-500 p-2 rounded-lg"
                  ></textarea>
                  {showSuggestions && (
                    <ul className="mt-2 bg-white border rounded-lg shadow-md">
                      {suggestions.map((suggestion) => (
                        <div
                          onClick={() => handleSuggestionClick(suggestion.name)}
                          className=" flex px-4 hover:bg-sky-100 gap-2 py-2 border-b  border-[#E6F0F2]  items-center "
                        >
                          <img src={suggestion.avatar} alt="" className=" w-[30px] h-[30px] " />
                          <h1 className=" font-medium text-lg">{suggestion.name}</h1>
                        </div>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="Link" className=" font-medium text-[#475569]">
                    Link
                  </label>
                  <input
                    type="text"
                    id="Link"
                    value={link}
                    onChange={handleLinkChange}
                    placeholder="www.linkedin.com"
                    className=" px-4 py-3 border focus:outline-sky-500 rounded-[10px]"
                  />
                </div>
              </div>
            ) : (
              formType === "embed" && (
                <div className=" space-y-4">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="Title" className=" font-medium text-[#475569]">
                      Title
                    </label>
                    <input
                      type="text"
                      id="Title"
                      placeholder='"Feeling Awesome"'
                      className=" px-4 py-3 border focus:outline-sky-500 rounded-[10px]"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="description" className=" font-medium text-[#475569]">
                      Description
                    </label>
                    <textarea
                      value={text}
                      onChange={handleTextareaChange}
                      placeholder="Type your message..."
                      className="w-full border focus:outline-sky-500 p-2 rounded-lg"
                    ></textarea>
                    {showSuggestions && (
                      <ul className="mt-2 bg-white border rounded-lg shadow-md">
                        {suggestions.map((suggestion) => (
                          <div
                            onClick={() => handleSuggestionClick(suggestion.name)}
                            className=" flex px-4 hover:bg-sky-100 gap-2 py-2 border-b  border-[#E6F0F2]  items-center "
                          >
                            <img src={suggestion.avatar} alt="" className=" w-[30px] h-[30px] " />
                            <h1 className=" font-medium text-lg">{suggestion.name}</h1>
                          </div>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="Link" className=" font-medium text-[#475569]">
                      Embed Link
                    </label>
                    <input
                      type="text"
                      id="Link"
                      placeholder="<iframe src='\https://www.youtube.com/embed/JUJxjLCoVO4\' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"
                      className=" px-4 py-3 border focus:outline-sky-500 rounded-[10px]"
                    />
                  </div>
                </div>
              )
            )}
          </div>
          <div className=" flex items-center justify-end">
            <Button label="POST" />
          </div>
        </div>
      )}
    </div>
  );
}
