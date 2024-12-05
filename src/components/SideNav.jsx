import { first151Pokemon, getFullPokedexNumber } from "../utils";
import { useState } from "react";

export default function SideNav(props) {
  const { selectedPokemon, setSelectedPokemon, showSideMenu, handleCloseMenu} = props;

  const [searchValue, setSearchValue] = useState("");

  const filteredPokemon = first151Pokemon.filter((elem, elemIndex) => {
    // if the full pokedex number includes the current search value,
    // return true
    if (getFullPokedexNumber(elemIndex).includes(searchValue)) {
      return true;
    }
    //if the pokemon name includes the current search value, return true
    if (elem.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    //otherwise, exclude value from the array
    return false;
  });

  return (
    <>
      <nav className={"" + (!showSideMenu ? "open" : "")}>
        <div className={"header " + (!showSideMenu ? "open" : "")}>
          <button onClick={handleCloseMenu} className="open-nav-button">
            <i className="fa-solid fa-arrow-left-long"></i>
          </button>
          <h1 className="text-gradient">Pokedex</h1>
        </div>
        <input
          placeholder="E.g 001 or Bulba..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        {filteredPokemon.map((pokemon, pokemonIndex) => {
          const truePokedexNum = first151Pokemon.indexOf(pokemon);
          return (
            <button
              onClick={() => {
                setSelectedPokemon(truePokedexNum)
                handleCloseMenu()
              }}

              key={pokemonIndex}
              className={
                "nav-card " +
                (pokemonIndex === selectedPokemon ? "nav-card-selected" : "")
              }
            >
              <p>{getFullPokedexNumber(truePokedexNum)}</p>
              <p>{pokemon}</p>
            </button>
          );
        })}
      </nav>
    </>
  );
}
