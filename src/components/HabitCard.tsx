import React from "react";
import { Habit } from "../hooks/useHabits";
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Heading,
  HStack,
  Icon,
  Stack,
  Strong,
  Text,
} from "@chakra-ui/react";

interface Props {
  habit: Habit;
}
const HabitCard = ({ habit }: Props) => {
  return (
    <Card.Root width="320px">
      <Card.Body>
        <HStack mb="6" gap="3">
          <Stack gap="0">
            <Heading fontSize="md">{habit.name}</Heading>
            <Text color="fg.muted" textStyle="sm">
              {habit.time_of_day}
            </Text>
          </Stack>
          <Checkbox.Root justifySelf="flex-end" ml="auto">
            <Checkbox.HiddenInput />
            <Checkbox.Control />
          </Checkbox.Root>
        </HStack>
        <Text color="fg.muted" textStyle="sm">
          {habit.remind}
        </Text>
        <Card.Description></Card.Description>
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card.Root>
  );
};

export default HabitCard;
