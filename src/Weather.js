import React from "react";

export default function Type() {
  return (
    <form id="search-form">
      <input
        type="text"
        placeholder="  Type a city.."
        autocomplete="off"
        autofocus="on"
        id="first"
      />
      <input id="second" type="submit" value="Search" />
    </form>
  );
}
