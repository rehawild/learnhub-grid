import { IELTSTest } from "@/types/ieltsprep";

export const mockTests: IELTSTest[] = [
    {
        id: "ielts-1",
        title: "Mock Test 1: Home & Technology",
        parts: {
            part1: {
                topic: "Accommodation & Hometown",
                questions: [
                    "Let's talk about your hometown. Where is it located?",
                    "What do you like most about your hometown?",
                    "Do you think it's a good place for young people to live?",
                    "Now let's talk about accommodation. Do you live in a house or an apartment?",
                    "Which is your favorite room in your home? Why?"
                ]
            },
            part2: {
                topic: "Describe a piece of technology you use often.",
                cueCardPoints: [
                    "What it is",
                    "How often you use it",
                    "What you use it for",
                    "And explain why it is important to you"
                ],
                followUpQuestion: "Do you think people rely too much on technology these days?"
            },
            part3: {
                topic: "Technology and Society",
                questions: [
                    "How has technology changed the way people communicate?",
                    "Do you think technological progress will continue at the same speed in the future?",
                    "Some people say technology makes us lazy. Do you agree?"
                ]
            }
        }
    },
    {
        id: "ielts-2",
        title: "Mock Test 2: Hobbies & Travel",
        parts: {
            part1: {
                topic: "Leisure Time",
                questions: [
                    "What do you like to do in your free time?",
                    "Do you prefer spending time alone or with friends?",
                    "Have your hobbies changed since you were a child?",
                    "Is it important to have a hobby? Why?"
                ]
            },
            part2: {
                topic: "Describe a memorable trip you took.",
                cueCardPoints: [
                    "Where you went",
                    "Who you went with",
                    "What you did there",
                    "And explain why this trip was memorable"
                ],
                followUpQuestion: "Would you like to go back there in the future?"
            },
            part3: {
                topic: "Tourism",
                questions: [
                    "What are the benefits of tourism for a country?",
                    "Do you think tourism can have negative effects on the environment?",
                    "How do people choose where to go on holiday?"
                ]
            }
        }
    }
];
