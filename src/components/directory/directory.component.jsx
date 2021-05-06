import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectSection } from "./../../redux/directory/directory.selector";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.style.scss";

const Directory = ({ section }) => {
  return (
    <div className="directory-menu">
      {section.map(({ id, ...otherSection }) => (
        <MenuItem key={id} {...otherSection} />
      ))}
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  section: selectSection,
});

export default connect(mapStatetoProps)(Directory);
