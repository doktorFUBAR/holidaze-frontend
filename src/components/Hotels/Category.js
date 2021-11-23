import { React, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { GiRoundStar } from "react-icons/gi";
import HotelCollection from "./HotelCollection";
import { RiArrowDropDownFill } from "react-icons/ri";
import Select from "react-select";

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      places {
        Title
        Rating
        Image {
          url
          alternativeText
        }
        Price
        id
      }
    }
  }
`;

export default function Category() {
  const [filterParam, setFilterParam] = useState(1);
  const id = filterParam;
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const options = [
    { value: 1, label: "All" },
    { value: 2, label: "Hotels" },
    { value: 3, label: "Bed & Breakfast" },
    { value: 4, label: "Guesthouses" },
  ];

  const changeFilter = (options) => {
    setFilterParam(options.value);
  };

  return (
    <div className="places-page">
      <h1>Places</h1>
      <div className="place-filter">
        <Select
          defaultValue={{ value: 1, label: "All" }}
          options={options}
          onChange={changeFilter}
          name="filter"
        />
        <span className="place-filter__arrow">
          <RiArrowDropDownFill />
        </span>
      </div>

      {filterParam !== 1 || undefined ? (
        <div className="hotel-grid">
          {data.category.places.map((place) => (
            <Link to={`/details/${place.id}`}>
              <div key={place.id} className="hotel-card">
                <img
                  src={place.Image[0].url}
                  alt={place.Image[0].alternativeText}
                />
                <div className="hotel-card__content">
                  <h2>{place.Title}</h2>
                  <div className="price">
                    <span>From </span>
                    <span className="price-number">{place.Price} NOK</span>
                  </div>
                  <div className="hotel-card__bottom">
                    <div className="rating">
                      <span className="rating__icon">
                        <GiRoundStar />
                      </span>
                      {place.Rating}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <HotelCollection />
      )}
    </div>
  );
}
