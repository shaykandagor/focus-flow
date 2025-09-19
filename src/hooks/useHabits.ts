import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { h } from "framer-motion/dist/types.d-DsEeKk6G";
import { CanceledError } from "axios";

interface Habit {
  id: number;
  name: string;
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
