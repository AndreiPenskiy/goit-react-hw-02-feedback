import React from "react";
import PropTypes from "prop-types";
import { Container, SectionList } from "./Section.styled.jsx";

export default function Section({ title, children }) {
  return (
    <SectionList>
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    </SectionList>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
