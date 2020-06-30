import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.map((s) => {
          return (
            <Sushi
              sushi={s}
              eatSushi={props.eatSushi}
              taken={props.eaten.includes(s)}
            />
          );
        })}
        <MoreButton addSushi={props.addSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
