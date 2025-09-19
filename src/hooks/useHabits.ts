import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Habit {
  id: number;
  name: string;
  start_date: string;
  time_of_day: string;
  remind: string
}

interface FetchHabitsResponse {
  count: number;
  data: Habit[];
}

const useHabits = () => {
  // Hook logic to fetch and manage habits
  const [habits, setHabits] = useState<Habit[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchHabitsResponse>("/habits", { signal: controller.signal })
      .then((response) => setHabits(response.data.data ?? []))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { habits, error };
};

export default useHabits;
