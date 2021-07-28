import React from "react";
import styled from "styled-components/native";

const ForecastSearch = ({
  toggleSearch,
  setToggleSearch,
  city,
  setCity,
  fetchLatLongHandler,
  fetchByPostalHandler,
  setPostalCode,
  postalCode,
}) => {
  const handleSubmit = (e) => {
    if (e.key === "Enter" && toggleSearch === "city") {
      fetchLatLongHandler();
    }
    if (e.key === "Enter" && toggleSearch === "postal") {
      fetchByPostalHandler();
    }
  };

  const setToggleByCity = () => {
    setToggleSearch("city");
  };

  const setToggleByPostal = () => {
    setToggleSearch("postal");
  };

  return (
    <Container>
      <SearchBy>
        <ButtonLabel>Search By</ButtonLabel>
        <Buttons
          title="City"
          color={
            toggleSearch === "city" ? "rgba(255, 255, 255, 0.3)" : "transparent"
          }
          accessibilityLabel="Search Weather By City"
          onPress={setToggleByCity}
        />
        <Buttons
          title="Postal Code/Zip"
          color={
            toggleSearch === "city" ? "transparent" : "rgba(255, 255, 255, 0.3)"
          }
          accessibilityLabel="Search Weather By ZIP/Postal Code"
          onPress={setToggleByPostal}
        />
      </SearchBy>
      <SearchCity
        onChangeText={toggleSearch === "city" ? setCity : setPostalCode}
        value={toggleSearch === "city" ? city : postalCode}
        placeholder={
          toggleSearch === "city" ? "Search By City" : "Search By Postal Code"
        }
        onKeyPress={handleSubmit}
      />
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.Button`
  color: black;
  background-color: gray;
`;

const SearchBy = styled.View`
  display: flex;
  flex-direction: row;
  color: white;
  margin-top: 10px;
  align-items: center;
  justify-content: start;
  width: 95%;
  max-width: 700px;
`;

const ButtonLabel = styled.Text`
  color: white;
  margin-right: 10px;
`;

const SearchCity = styled.TextInput`
  height: 20px;
  margin: 12px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 95%;
  max-width: 700px;
`;

export default ForecastSearch;
