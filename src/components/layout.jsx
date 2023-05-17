

import React from 'react';

function ListComponent({ layout, items }) {
  let listItems;

  if (layout === 'number') {
    listItems = items.map((item, index) => <li key={index}>{index + 1}. {item}</li>);
  } else if (layout === 'alphabet') {
    listItems = items.map((item, index) => <li key={index}>{String.fromCharCode(97 + index)}. {item}</li>);
  } else if (layout === 'bullet') {
    listItems = items.map((item, index) => <li key={index}>• {item}</li>);
  } else {
    listItems = items.map((item, index) => <li key={index}>{item}</li>);
  }

  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default ListComponent;


