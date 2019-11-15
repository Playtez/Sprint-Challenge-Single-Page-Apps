import React from "react";

import axios from "axios";
import "./characterCard.css";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const CharacterCard = () => {
  const [apiData, setApiData] = React.useState([]);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    axios //
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log(response);
        setApiData(characters);
      })
      .catch(err => {
        console.log(err);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="on"
        />
      </form>
      {apiData.map(data => {
        return (
          <div className="character-list " key={data.id}>
            <Card>
              <CardBody>
                <CardTitle>
                  <h3> {data.name}</h3>
                </CardTitle>
                <CardSubtitle>Species: {data.species}</CardSubtitle>
                <CardSubtitle>Alive? {data.status}</CardSubtitle>
                <CardSubtitle>ID #: {data.id}</CardSubtitle>
                <CardText>Thanks for checking out my Card.</CardText>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterCard;
