import {React, useState} from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../constants/api';
import { GiRoundStar } from 'react-icons/gi';
import HotelCollection from './HotelCollection';

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      places {
        title
        rating
        image {
          url
          alternativeText
        }
        price
        id
      }
    }
  }
`;

export default function Category() {
    const [ filterParam, setFilterParam ] = useState("1");
    const id  = filterParam;
    const { loading, error, data } = useQuery(CATEGORY, {
        variables: { id: id }
    });

    if (loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>

    console.log(filterParam)

    return (
        <div className="places-page">
            <h1>Places</h1>
            <select
            onChange={(e) => {setFilterParam(e.target.value)}}
            name="filter" className="place-filter">
                <option value="1">All</option>
                <option value="2">Hotels</option>
                <option value="3">Bed &amp; Breakfast</option>
                <option value="4">Guesthouses</option>
            </select>
            
            {filterParam === "1" ?
             <HotelCollection />
             :
             <div className="hotel-grid">
             {data.category.places.map((place) => (
                <Link to={`/details/${place.id}`}>
                  <div key={place.id} className="hotel-card">
                    <img
                      src={BASE_URL+ place.image.url}
                      alt={BASE_URL + place.image.alternativeText}
                    />
                    <div className="hotel-card__content">
                      <h2>{place.title}</h2>
                      <div className="price">
                        <span>From </span>
                        <span className="price-number">{place.price} NOK</span>
                      </div>
                      <div className="hotel-card__bottom">
                        <div className="rating"><span className="rating__icon"><GiRoundStar/></span>{place.rating}</div>
                        <div className="featured-badge">Popular</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              </div>
            }
        </div>
    )
}
