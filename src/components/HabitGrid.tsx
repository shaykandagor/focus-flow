import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Habit {
  id: number;
  name: string;
}

interface FetchHabitsResponse {
  count: number;
  data: Habit[];
}

const HabitGrid = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchHabitsResponse>("/habits")
      .then((response) => setHabits(response.data.data ?? []))
      .catch((err) => {
        setError(err.message);
        console.error(err);
      });
  }, []);

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
