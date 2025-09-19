import { SimpleGrid, Text } from "@chakra-ui/react";
import useHabits from "../hooks/useHabits";
import HabitCard from "./HabitCard";

const HabitGrid = () => {
  const { habits, error } = useHabits();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        gap="6"
      >
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default HabitGrid;
