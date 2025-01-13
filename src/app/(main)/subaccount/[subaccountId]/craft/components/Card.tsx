// components/user/Card.js
import React from "react";
import { Text } from "./text";
import { Button } from "./Button";
import { Container } from "./Container";

export const Card = ({ background, padding = 20 }: any) => {
  return (
    <Container background={background} padding={padding}>
      <div className="text-only">
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </div>
      <div className="buttons-only">
        <Button
          size="small"
          children="Learn more"
          variant="contained"
          color="primary"
        />
      </div>
    </Container>
  );
};
