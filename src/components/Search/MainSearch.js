import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BASE_URL, HOTELS } from "../../constants/api";
import { FiSearch } from "react-icons/fi";

export default function MainSearch() {
  const [hotels, sethotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch(BASE_URL + HOTELS);
        const json = await res.json();
        sethotels(json);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <>
      <form className="search-bar" autoComplete="off">
        <div className="input-group">
          <div className="search-bar__icon"><FiSearch/></div>
          <input
            type="text"
            placeholder="Where are you going?"
            name="location"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onClick={() => setShow(!show)}
          />
          </div>

          {show ? (
            <ul class="search-results" onClick={() => setShow(!show)}>
              {hotels
                .filter((value) => {
                  if (search > 0) {
                    return value;
                  } else if (
                    value.Title.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return value;
                  } else {
                    return null;
                  }
                })
                .map((option) => {
                  return (
                    <Link key={option.id} to={`details/${option.id}`}>
                      <li>
                        {option.Title}
                        <img
                          src={option.Image[0].url}
                          alt={option.Image[0].alternativeText}
                        />
                      </li>
                    </Link>
                  );
                })}
            </ul>
          ) : null}

      </form>
    </>
  );
}
