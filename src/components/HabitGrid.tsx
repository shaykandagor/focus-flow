import { Text } from "@chakra-ui/react";
import useHabits from "../hooks/useHabits";

const HabitGrid = () => {
  const { habits, error } = useHabits();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>{habit.name}</li>
        ))}
      </ul>
    </>
  );
};

export default HabitGrid;
