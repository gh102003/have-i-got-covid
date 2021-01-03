import React, { useState } from 'react';
import "./css/data-entry.scss";

import { useTransition } from 'react-spring';
import { Page } from './Page.jsx';

export const DataEntry = () => {

  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    gender: null,
    age: "",
    region: null,
    householdSize: "",
    ethnicity: null
  });

  const [reverseTransition, setReverseTransition] = useState(false);

  const pageTransitions = useTransition(page, null, {
    from: { transform: reverseTransition ? "translateX(-100vw)" : "translateX(100vw)" },
    enter: { transform: "translateX(0vw)" },
    leave: { transform: reverseTransition ? "translateX(100vw)" : "translateX(-100vw)" },
  });

  return (
    <>
      <div className="data-entry">
        {pageTransitions.map(({ item, key, props }) =>
          <Page item={item} key={key} props={props}
            data={data} setData={setData}
          />
        )}
      </div>
      <nav className="data-entry-nav">
        <button className="previous-data-entry-page" disabled={page < 1} onClick={() => {
          setReverseTransition(true);
          setPage(page - 1);
        }}>
          <i className="fas fa-angle-left"/>Back
        </button>
        <button className="next-data-entry-page" disabled={page >= 3} onClick={() => {
          setReverseTransition(false);
          setPage(page + 1)
        }}>
          Next<i className="fas fa-angle-right"/>
        </button>
      </nav>
    </>
  )
};
