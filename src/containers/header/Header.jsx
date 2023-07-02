import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
  const [searchType, setSearchType] = useState("school");
  const [inputValue, setInputValue] = useState("");
  const [searchOptions, setSearchOptions] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [searchTeacher, setSearchTeacher] = useState([]);
  const [searchSchool, setSearchSchool] = useState([]);

  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      if (searchType === "school") {
        navigate(`/search/school/${inputValue}`);
      } else if (searchType === "professor") {
        navigate(`/search/teacher/${inputValue}`);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8081/school");
      const schools = await response.json();
      setSearchOptions(schools);
      setSearchSchool(schools);

      const response1 = await fetch("http://localhost:8081/teacher");
      const teachers = await response1.json();

      setSearchTeacher(teachers);
    };

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(filteredSearchOptions);
    setDropdownVisible(true); // Show the options when the user types
  };

  const filteredSearchOptions = searchOptions
    ? searchOptions.filter((option) => {
        if (searchType === "school") {
          return option?.name?.toLowerCase().includes(inputValue.toLowerCase());
        } else if (searchType === "professor") {
          const fullName = `${option?.first_name} ${option?.middle_name} ${option?.last_name}`;
          return fullName.toLowerCase().includes(inputValue.toLowerCase());
        }
      })
    : [];

  const handleOptionClick = (option) => {
    setInputValue(
      searchType === "school"
        ? option.name
        : `${option.first_name} ${option.middle_name} ${option.last_name}`
    );
    setDropdownVisible(false);
    if (searchType === "school") {
      setSelectedSchool(option);
      setInputValue("");
      const filteredTeachers = searchTeacher.filter(
        (teach) => teach.school.id === option.id
      );

      setSearchOptions(filteredTeachers);
      setSearchType("professor");
    }
  };
  console.log(searchOptions);
  const placeholderText =
    searchType === "school" ? "Search for a school" : "Search for a professor";

  const handleSearchTypeChange = () => {
    setSearchType(searchType === "professor" ? "school" : "professor");
    if (searchType === "professor") {
      setSearchOptions(searchSchool);
    } else if (searchType === "school") {
      setSearchOptions(searchTeacher); // Replace 'schools' with the original list of schools
    }
  };

  const removeSelectedSchool = () => {
    setSearchType("school");
    setSelectedSchool(null);
  };

  const searchPromptText =
    searchType === "school"
      ? "I'd like to look up a professor by name"
      : "I'd like to look up a school by name";
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Oqytushyga Baga</h1>
        {selectedSchool ? (
          <p>
            Find a professor at{" "}
            <b>
              <Link to={`/school/${selectedSchool.id}`}>
                {selectedSchool.name}
              </Link>
            </b>
          </p>
        ) : (
          <p>Enter your {searchType} to get started.</p>
        )}

        <div className="gpt3__header-content__input">
          <input
            type="text"
            placeholder={placeholderText}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          {dropdownVisible &&
            filteredSearchOptions.map((option) => (
              <div
                key={option.id}
                className="autocomplete-option"
                onClick={() => handleOptionClick(option)}
              >
                {searchType === "school" ? (
                  option.name
                ) : (
                  <Link
                    to={`/professor/${option.id}`}
                  >{`${option.first_name} ${option.middle_name} ${option.last_name}`}</Link>
                )}
              </div>
            ))}
        </div>
        <div className="gpt3__header-content__people">
          {selectedSchool ? (
            <p onClick={removeSelectedSchool}>
              I want to find a professor at a different school
            </p>
          ) : (
            <p onClick={handleSearchTypeChange}>{searchPromptText}</p>
          )}
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
