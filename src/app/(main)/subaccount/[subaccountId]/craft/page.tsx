"use client";
import React from "react";
import { Typography, Paper, Stack } from "@mui/material";

import { Toolbox } from "./components/Toolbox";
import { SettingsPanel } from "./components/SettingsPanel";

import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Text } from "./components/text";

import { Editor, Frame, Element } from "@craftjs/core";

import BlurPage from "@/components/global/blur-page";

export default function Craft() {
  return (
    <BlurPage>
      <div>
        <Typography variant="h5" align="center">
          A super simple page editor
        </Typography>
        <Editor resolver={{ Card, Button, Text, Container }}>
          <Stack spacing={3}>
            <Stack>
              <Frame>
                <Container padding={5} background="#eee">
                  <Card />
                  <Button size="small" variant="outlined">
                    Click
                  </Button>
                  <Text fontSize="small" text="Hi world!" />
                  <Container padding={6} background="#999">
                    <Text fontSize="small" text="It's me again!" />
                  </Container>
                </Container>
              </Frame>
            </Stack>
            <Stack>
              <Paper>
                <Toolbox />
                <SettingsPanel />
              </Paper>
            </Stack>
          </Stack>
        </Editor>
      </div>
    </BlurPage>
  );
}
