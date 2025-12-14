import { ReadingTest } from "@/types/ieltsreading";

export const MOCK_READING_TEST: ReadingTest = {
    id: "ielts-read-1",
    title: "Mock Test 1: Academic Reading",
    passages: [
        {
            id: "p1",
            title: "The Life of Honeybees",
            content: [
                "Honeybees are social insects that live in colonies. The hive population consists of a single queen, a few hundred drones, and thousands of worker bees. The worker bees are the most numerous members of the colony and are all female. They are responsible for cleaning the hive, feeding the larvae, and foraging for nectar and pollen.",
                "The queen bee is the only fertile female in the colony. Her sole purpose is to lay eggs to ensure the survival of the hive. A healthy queen can lay up to 2,000 eggs per day. Drones are male bees, and their only role is to mate with a new queen. Once they have mated, they die.",
                "One of the most fascinating aspects of honeybee behavior is their method of communication. Foragers perform a 'waggle dance' to inform other bees about the location of food sources. The angle and duration of the dance convey precise information about the direction and distance of the flowers."
            ],
            questionSets: [
                {
                    id: "qs1",
                    instruction: "Do the following statements agree with the information given in the passage? Choose TRUE, FALSE, or NOT GIVEN.",
                    questions: [
                        {
                            id: "q1",
                            type: "true_false_not_given",
                            text: "Worker bees are responsible for laying eggs.",
                            correctAnswer: "FALSE"
                        },
                        {
                            id: "q2",
                            type: "true_false_not_given",
                            text: "The 'waggle dance' tells bees how far away food is.",
                            correctAnswer: "TRUE"
                        },
                        {
                            id: "q3",
                            type: "true_false_not_given",
                            text: "Honeybees have been declining in population recently.",
                            correctAnswer: "NOT GIVEN"
                        }
                    ]
                },
                {
                    id: "qs2",
                    instruction: "Choose the correct letter, A, B, C, or D.",
                    questions: [
                        {
                            id: "q4",
                            type: "multiple_choice",
                            text: "What happens to drone bees after they mate?",
                            options: [
                                "A. They become worker bees.",
                                "B. They leave the hive to start a new colony.",
                                "C. They die.",
                                "D. They hibernate for the winter."
                            ],
                            correctAnswer: "C"
                        }
                    ]
                }
            ]
        },
        // We can add more passages here for a full test, staying with 1 for demo.
    ]
};
