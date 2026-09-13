"use client";

import Link from "next/link";
import AuthNavButton from "@/components/AuthNavButton";
import { useState } from "react";

type Project = {
  id: number;
  level: "Beginner" | "Intermediate" | "Challenge";
  language: "Java" | "Python" | "Tailwind" | "TypeScript" | "JavaScript";
  title: string;
  description: string;
  skills: string[];
  goal: string;
  requirements: string[];
  steps: string[];
  hint: string;
  starterCode: string;
  solution: string;
  extensions: string[];
};

const projects: Project[] = [
  {
    id: 1,
    level: "Beginner",
    language: "Java",
    title: "Student Grade Calculator",
    description:
      "Build a simple Java program that works out a learner's average mark and tells them whether they passed.",
    skills: [
      "Variables",
      "Input",
      "Arithmetic",
      "If / Else",
      "Output",
    ],
    goal:
      "Create a program that accepts three marks, calculates the average and displays the learner's result.",
    requirements: [
      "Ask the learner for three marks.",
      "Calculate the average of the three marks.",
      "Display the average.",
      "Display \"Pass\" if the average is 50 or higher.",
      "Display \"Fail\" if the average is below 50.",
    ],
    steps: [
      "Create a new Java class.",
      "Create a Scanner object to read input.",
      "Ask the learner for the first mark.",
      "Ask for the second and third marks.",
      "Calculate the average.",
      "Use if / else to decide whether the learner passed.",
      "Display the results.",
    ],
    hint:
      "You can calculate the average by adding the three marks and dividing the result by 3.0.",
    starterCode: `import java.util.Scanner;

public class GradeCalculator {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        // Get the learner's marks here


        // Calculate the average here


        // Check whether the learner passed


    }
}`,
    solution: `import java.util.Scanner;

public class GradeCalculator {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.print("Enter mark 1: ");
        double mark1 = input.nextDouble();

        System.out.print("Enter mark 2: ");
        double mark2 = input.nextDouble();

        System.out.print("Enter mark 3: ");
        double mark3 = input.nextDouble();

        double average = (mark1 + mark2 + mark3) / 3.0;

        System.out.println("Average: " + average);

        if (average >= 50) {
            System.out.println("Pass");
        } else {
            System.out.println("Fail");
        }

        input.close();
    }
}`,
    extensions: [
      "Display a message for learners who achieve 75% or higher.",
      "Ask for the learner's name and include it in the result.",
      "Allow the program to calculate five marks instead of three.",
    ],
  },

  {
    id: 2,
    level: "Beginner",
    language: "Java",
    title: "School Shop Calculator",
    description:
      "Create a small program that calculates the total cost of items bought from a school tuck shop.",
    skills: [
      "Variables",
      "Input",
      "Arithmetic",
      "Output",
    ],
    goal:
      "Allow a learner to enter the price and quantity of three items and calculate the total.",
    requirements: [
      "Ask for the price of the first item.",
      "Ask how many of that item were bought.",
      "Repeat this for two more items.",
      "Calculate the total cost.",
      "Display the final amount.",
    ],
    steps: [
      "Create variables for the prices.",
      "Create variables for the quantities.",
      "Multiply price by quantity for each item.",
      "Add the three totals.",
      "Display the final amount.",
    ],
    hint:
      "For each item, use price × quantity. Then add the results together.",
    starterCode: `import java.util.Scanner;

public class SchoolShop {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        // Item 1


        // Item 2


        // Item 3


        // Calculate the total


        input.close();
    }
}`,
    solution: `import java.util.Scanner;

public class SchoolShop {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.print("Price of item 1: ");
        double price1 = input.nextDouble();

        System.out.print("Quantity: ");
        int quantity1 = input.nextInt();

        System.out.print("Price of item 2: ");
        double price2 = input.nextDouble();

        System.out.print("Quantity: ");
        int quantity2 = input.nextInt();

        System.out.print("Price of item 3: ");
        double price3 = input.nextDouble();

        System.out.print("Quantity: ");
        int quantity3 = input.nextInt();

        double total =
            (price1 * quantity1) +
            (price2 * quantity2) +
            (price3 * quantity3);

        System.out.println("Total: R" + total);

        input.close();
    }
}`,
    extensions: [
      "Add a discount when the total is above R100.",
      "Display the change after the learner enters the amount they paid.",
      "Add more items.",
    ],
  },

  {
    id: 3,
    level: "Intermediate",
    language: "Java",
    title: "School Attendance Tracker",
    description:
      "Build a program that records the number of days a learner attended school and calculates their attendance percentage.",
    skills: [
      "Variables",
      "Input",
      "Arithmetic",
      "If / Else",
      "Methods",
    ],
    goal:
      "Calculate a learner's attendance percentage and display whether their attendance is satisfactory.",
    requirements: [
      "Ask for the total number of school days.",
      "Ask for the number of days attended.",
      "Calculate the attendance percentage.",
      "Display the percentage.",
      "Display a message if attendance is below 80%.",
    ],
    steps: [
      "Create variables for total days and attended days.",
      "Read both values from the user.",
      "Calculate attended / total × 100.",
      "Display the percentage.",
      "Use a condition to check whether attendance is below 80%.",
    ],
    hint:
      "Convert the calculation to double so that you do not lose decimal values.",
    starterCode: `import java.util.Scanner;

public class AttendanceTracker {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        // Get total school days


        // Get attended days


        // Calculate attendance percentage


        // Check attendance


        input.close();
    }
}`,
    solution: `import java.util.Scanner;

public class AttendanceTracker {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.print("Total school days: ");
        int totalDays = input.nextInt();

        System.out.print("Days attended: ");
        int attendedDays = input.nextInt();

        double percentage =
            ((double) attendedDays / totalDays) * 100;

        System.out.println(
            "Attendance: " + percentage + "%"
        );

        if (percentage < 80) {
            System.out.println(
                "Attendance needs attention."
            );
        } else {
            System.out.println(
                "Attendance is satisfactory."
            );
        }

        input.close();
    }
}`,
    extensions: [
      "Record attendance for several learners.",
      "Display the learner with the highest attendance.",
      "Create a method that calculates the attendance percentage.",
    ],
  },

  {
    id: 4,
    level: "Intermediate",
    language: "Java",
    title: "Learner Results System",
    description:
      "Create a small results program that stores marks for several subjects and calculates the learner's average.",
    skills: [
      "Arrays",
      "Loops",
      "Variables",
      "Arithmetic",
      "If / Else",
    ],
    goal:
      "Store subject marks in an array, calculate the average and display a result.",
    requirements: [
      "Create an array that can store five marks.",
      "Allow the user to enter the five marks.",
      "Use a loop to calculate the total.",
      "Calculate the average.",
      "Display the average.",
      "Display Pass or Fail.",
    ],
    steps: [
      "Create an integer or double array.",
      "Use a loop to collect the marks.",
      "Use another loop or the same loop to calculate the total.",
      "Divide the total by the number of subjects.",
      "Use if / else to determine the result.",
    ],
    hint:
      "The array length can be used when calculating the average instead of writing the number 5 directly.",
    starterCode: `import java.util.Scanner;

public class LearnerResults {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        double[] marks = new double[5];

        // Enter the five marks


        // Calculate the total


        // Calculate the average


        // Display the result


        input.close();
    }
}`,
    solution: `import java.util.Scanner;

public class LearnerResults {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        double[] marks = new double[5];

        double total = 0;

        for (int i = 0; i < marks.length; i++) {

            System.out.print(
                "Enter mark " + (i + 1) + ": "
            );

            marks[i] = input.nextDouble();

            total += marks[i];
        }

        double average = total / marks.length;

        System.out.println(
            "Average: " + average
        );

        if (average >= 50) {
            System.out.println("Pass");
        } else {
            System.out.println("Fail");
        }

        input.close();
    }
}`,
    extensions: [
      "Display the highest mark.",
      "Display the lowest mark.",
      "Add subject names.",
      "Display a message for an average of 75% or higher.",
    ],
  },

  {
    id: 5,
    level: "Challenge",
    language: "Java",
    title: "Mini School Management System",
    description:
      "Build a small console-based school system that stores learner information and displays a simple report.",
    skills: [
      "Classes",
      "Objects",
      "Arrays",
      "Methods",
      "Loops",
      "Conditions",
    ],
    goal:
      "Create a basic Java application that demonstrates several programming concepts working together.",
    requirements: [
      "Create a Learner class.",
      "Store a learner's name and mark.",
      "Create several learner objects.",
      "Store the learners in an array.",
      "Display each learner's information.",
      "Display whether each learner passed or failed.",
    ],
    steps: [
      "Create a Learner class.",
      "Add name and mark attributes.",
      "Create a constructor.",
      "Create a method that determines whether the learner passed.",
      "Create several Learner objects.",
      "Store them in an array.",
      "Use a loop to display the learners.",
    ],
    hint:
      "Start with the Learner class before writing the main program. Keep the first version simple.",
    starterCode: `class Learner {

    String name;
    double mark;

    // Create a constructor here


    // Create a method that returns Pass or Fail


}

public class SchoolManagement {

    public static void main(String[] args) {

        // Create learner objects


        // Store learners in an array


        // Display learner information


    }
}`,
    solution: `class Learner {

    String name;
    double mark;

    Learner(String name, double mark) {
        this.name = name;
        this.mark = mark;
    }

    String getResult() {

        if (mark >= 50) {
            return "Pass";
        }

        return "Fail";
    }
}

public class SchoolManagement {

    public static void main(String[] args) {

        Learner learner1 =
            new Learner("Thando", 72);

        Learner learner2 =
            new Learner("Ayanda", 45);

        Learner learner3 =
            new Learner("Lwazi", 81);

        Learner[] learners = {
            learner1,
            learner2,
            learner3
        };

        for (Learner learner : learners) {

            System.out.println(
                learner.name +
                " - " +
                learner.mark +
                "% - " +
                learner.getResult()
            );
        }
    }
}`,
    extensions: [
      "Allow the user to enter learners instead of hard-coding them.",
      "Calculate the class average.",
      "Find the learner with the highest mark.",
      "Add a subject to each learner.",
    ],
  },

    {
    id: 6,
    level: "Beginner",
    language: "Python",
    title: "Python Learner Profile",
    description:
      "Create a small Python program that collects basic information about a learner and displays a welcome message.",
    skills: [
      "Variables",
      "Input",
      "Output",
      "Data Types",
      "If Statements",
    ],
    goal:
      "Create a Python program that asks for a learner's name, school, grade and age, then displays a summary.",
    requirements: [
      "Ask for the learner's name.",
      "Ask for the school name.",
      "Ask for the learner's grade.",
      "Ask for the learner's age (as a number).",
      "Display all the information.",
      "Display a message if the learner is 13 or older.",
    ],
    steps: [
      "Create a variable for the learner's name using input().",
      "Get the school name.",
      "Get the learner's grade.",
      "Get the learner's age and convert it to a number using int().",
      "Use print() to display all the information.",
      "Use an if statement to check the age and print an extra message.",
    ],
    hint:
      "input() always returns text — wrap it in int(...) when you need the age as a number for comparison.",
    starterCode: `# Get learner information


# Display the learner information


# Check the learner's age
`,
    solution: `name = input("Enter your name: ")
school = input("Enter your school: ")
grade = input("Enter your grade: ")
age = int(input("Enter your age: "))

print("Learner:", name)
print("School:", school)
print("Grade:", grade)
print("Age:", age)

if age >= 13:
    print("Welcome, teenager!")`,
    extensions: [
      "Ask for their favourite subject and include it in the summary.",
      "Display a different message for learners under 13.",
      "Ask for three subject marks and calculate the average.",
    ],
  },
    {
    id: 7,
    level: "Intermediate",
    language: "Python",
    title: "Python Marks Analyzer",
    description:
      "Build a program that collects five subject marks, calculates the average, and reports a grade.",
    skills: [
      "Lists",
      "Loops",
      "Variables",
      "Arithmetic",
      "If / Elif / Else",
    ],
    goal:
      "Collect five marks from the user, calculate the average, and classify the result.",
    requirements: [
      "Create an empty list to store the marks.",
      "Use a loop to ask the user for five marks and add each to the list.",
      "Calculate the total and the average of the marks.",
      "Display the average.",
      "Display \"Distinction\" if the average is 80 or higher, \"Pass\" if 50 or higher, otherwise \"Fail\".",
    ],
    steps: [
      "Create an empty list called marks.",
      "Use a for loop with range(5) to ask for each mark and append it to the list.",
      "Use sum() or a loop to calculate the total.",
      "Divide the total by the number of marks to get the average.",
      "Use if / elif / else to classify and display the result.",
    ],
    hint:
      "Python's built-in sum() function can add up every value in a list for you — sum(marks).",
    starterCode: `marks = []

# Collect five marks here


# Calculate the average here


# Classify the result here
`,
    solution: `marks = []

for i in range(5):
    mark = float(input("Enter mark " + str(i + 1) + ": "))
    marks.append(mark)

total = sum(marks)
average = total / len(marks)

print("Average:", average)

if average >= 80:
    print("Distinction")
elif average >= 50:
    print("Pass")
else:
    print("Fail")`,
    extensions: [
      "Display the highest and lowest mark using max() and min().",
      "Let the user choose how many marks to enter instead of always five.",
      "Ask for subject names alongside each mark.",
    ],
  },

  {
    id: 8,
    level: "Challenge",
    language: "Python",
    title: "Python Class Register",
    description:
      "Build a small console program that stores several learners' names and marks, then displays a class report.",
    skills: [
      "Dictionaries",
      "Lists",
      "Functions",
      "Loops",
      "Conditions",
    ],
    goal:
      "Create a Python program that demonstrates several concepts working together to manage a small class of learners.",
    requirements: [
      "Store each learner as a dictionary with a name and a mark.",
      "Store several learners in a list.",
      "Create a function that returns \"Pass\" or \"Fail\" for a given mark.",
      "Use a loop to display every learner's name, mark and result.",
      "Calculate and display the class average.",
    ],
    steps: [
      "Write a function called get_result that takes a mark and returns \"Pass\" or \"Fail\".",
      "Create a list of dictionaries, one per learner, each with 'name' and 'mark' keys.",
      "Loop through the list and print each learner's details using get_result().",
      "Add up all the marks while looping, or use a second loop.",
      "Divide by the number of learners to get the class average.",
    ],
    hint:
      "Define get_result(mark) before you use it. Access dictionary values with learner['name'] and learner['mark'].",
    starterCode: `def get_result(mark):
    # Return "Pass" or "Fail" here
    pass


learners = [
    {"name": "Thando", "mark": 72},
    {"name": "Ayanda", "mark": 45},
    {"name": "Lwazi", "mark": 81},
]

# Display each learner's details


# Calculate and display the class average
`,
    solution: `def get_result(mark):
    if mark >= 50:
        return "Pass"
    return "Fail"


learners = [
    {"name": "Thando", "mark": 72},
    {"name": "Ayanda", "mark": 45},
    {"name": "Lwazi", "mark": 81},
]

total = 0

for learner in learners:
    result = get_result(learner["mark"])
    print(learner["name"], "-", learner["mark"], "% -", result)
    total = total + learner["mark"]

average = total / len(learners)
print("Class average:", average)`,
    extensions: [
      "Let the user add a new learner from input instead of hard-coding them.",
      "Find and display the learner with the highest mark.",
      "Add a subject name to each learner's dictionary.",
    ],
  },

  {
    id: 9,
    level: "Beginner",
    language: "Tailwind",
    title: "Profile Card",
    description:
      "Build a styled profile card using only Tailwind utility classes — no custom CSS.",
    skills: [
      "Backgrounds",
      "Spacing",
      "Typography",
      "Borders & Shadows",
      "Flexbox",
    ],
    goal:
      "Create an HTML page with a single profile card, styled entirely with Tailwind.",
    requirements: [
      "A card with a dark background, padding and rounded corners.",
      "A name styled as a bold heading.",
      "A short bio styled as smaller, muted text.",
      "A row at the bottom (using flexbox) with a badge and a button, spaced apart.",
      "A subtle shadow and hover effect on the whole card.",
    ],
    steps: [
      "Create the outer card div with a background, padding and rounded corners.",
      "Add the name as a bold heading inside.",
      "Add a paragraph for the bio, styled with a muted text color.",
      "Add a flex row at the bottom with a badge (a small pill) and a button.",
      "Add a shadow and a hover effect to the card.",
    ],
    hint:
      "Build it in layers, the same way the Tailwind course did: container first, then content, then the flex row, then the hover effect last.",
    starterCode: `<div class="">
  <!-- name -->

  <!-- bio -->

  <!-- badge and button row -->
</div>`,
    solution: `<div class="bg-slate-900 rounded-2xl p-6 shadow-lg border border-white/10 transition hover:border-emerald-400/40 max-w-sm">
  <h2 class="text-xl font-bold text-white">Nampho Dlamini</h2>
  <p class="mt-2 text-sm text-slate-400">
    High school learner, learning to code with CodeSupport SA.
  </p>

  <div class="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
    <span class="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
      Learner
    </span>
    <button class="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950">
      Message
    </button>
  </div>
</div>`,
    extensions: [
      "Add a profile picture placeholder circle using rounded-full.",
      "Make the card responsive: full width on mobile, fixed width on larger screens.",
      "Add a second badge, like &quot;Verified&quot;.",
    ],
  },
  {
    id: 10,
    level: "Beginner",
    language: "TypeScript",
    title: "Typed Student Record",
    description:
      "Build a small typed system for storing and checking a student's results.",
    skills: [
      "Interfaces",
      "Functions",
      "Union Types",
      "Arrays",
    ],
    goal:
      "Create a TypeScript program that stores a student's subjects and reports their overall result.",
    requirements: [
      "An interface called Subject with name (string) and mark (number).",
      "A typed array of at least three Subject objects.",
      "A function that calculates the average mark across all subjects.",
      "A function that returns \"Pass\" or \"Fail\" based on that average.",
    ],
    steps: [
      "Define the Subject interface.",
      "Create an array typed as Subject[] with three subjects.",
      "Write a function getAverage(subjects: Subject[]): number that adds up all marks and divides by the count.",
      "Write a function getResult(average: number): string that returns \"Pass\" if average >= 50, otherwise \"Fail\".",
      "Call both functions and print the result.",
    ],
    hint:
      "Loop through the array with a for...of loop to add up the marks before dividing.",
    starterCode: `interface Subject {
  // define this
}

const subjects: Subject[] = [
  // add three subjects here
];

function getAverage(subjects: Subject[]): number {
  // your code here
}

function getResult(average: number): string {
  // your code here
}`,
    solution: `interface Subject {
  name: string;
  mark: number;
}

const subjects: Subject[] = [
  { name: "Mathematics", mark: 72 },
  { name: "English", mark: 65 },
  { name: "Life Sciences", mark: 40 }
];

function getAverage(subjects: Subject[]): number {
  let total = 0;

  for (const subject of subjects) {
    total = total + subject.mark;
  }

  return total / subjects.length;
}

function getResult(average: number): string {
  if (average >= 50) {
    return "Pass";
  }
  return "Fail";
}

const average = getAverage(subjects);
console.log("Average:", average);
console.log("Result:", getResult(average));`,
    extensions: [
      "Add an optional teacherComment property to Subject.",
      "Use a type alias for the result instead of a plain string: type Result = \"Pass\" | \"Fail\".",
      "Add a function that returns the subject with the highest mark.",
    ],
  },
  {
    id: 11,
    level: "Beginner",
    language: "JavaScript",
    title: "Interactive Mark Checker",
    description:
      "Build a real webpage where a user can click a button to check if a mark is a pass.",
    skills: [
      "Functions",
      "DOM Selection",
      "Event Listeners",
      "If / Else",
    ],
    goal:
      "Create an HTML page with an input and a button — clicking the button displays whether the entered mark passes.",
    requirements: [
      "An input where the user types a mark.",
      "A button labelled \"Check Result\".",
      "A paragraph that starts empty.",
      "Clicking the button displays \"Pass\" or \"Fail\" in the paragraph, based on the mark.",
    ],
    steps: [
      "Create the HTML: an input with an id, a button with an id, and an empty paragraph with an id.",
      "In JavaScript, select all three elements using getElementById.",
      "Add a click event listener to the button.",
      "Inside the listener, read the input's value and convert it to a number.",
      "Use an if/else to decide Pass or Fail, and set the paragraph's textContent.",
    ],
    hint:
      "Input values are always text, even for numbers — wrap the input's value in Number(...) before comparing it.",
    starterCode: `<input id="markInput" type="text" />
<button id="checkButton">Check Result</button>
<p id="result"></p>

<script>
  // your code here
</script>`,
    solution: `<input id="markInput" type="text" />
<button id="checkButton">Check Result</button>
<p id="result"></p>

<script>
  const input = document.getElementById("markInput");
  const button = document.getElementById("checkButton");
  const result = document.getElementById("result");

  button.addEventListener("click", function () {
    const mark = Number(input.value);

    if (mark >= 50) {
      result.textContent = "Pass";
    } else {
      result.textContent = "Fail";
    }
  });
</script>`,
    extensions: [
      "Show a message like \"Please enter a valid number\" if the input is empty.",
      "Add a distinction check: 80 or higher shows \"Distinction\" instead of \"Pass\".",
      "Style the result text green for Pass and red for Fail.",
    ],
  },
  {
    id: 12,
    level: "Intermediate",
    language: "Tailwind",
    title: "Responsive Pricing Cards",
    description:
      "Build a set of pricing cards that stack on mobile and sit side-by-side on larger screens.",
    skills: [
      "Flexbox",
      "Responsive Design",
      "Hover & Transitions",
      "Borders & Shadows",
    ],
    goal:
      "Create three pricing cards (Basic, Standard, Premium) that respond correctly to screen size.",
    requirements: [
      "Three cards, stacked vertically on mobile.",
      "The same three cards arranged in a row on medium screens and up.",
      "One card (Standard) visually highlighted as the recommended option.",
      "Each card has a hover effect.",
      "Consistent spacing between all three cards, at every screen size.",
    ],
    steps: [
      "Create an outer flex container: flex-col by default, md:flex-row at medium screens.",
      "Build one card, styled with padding, rounded corners and a border.",
      "Duplicate it two more times for the three tiers.",
      "Give the Standard card a different border color or a small badge to highlight it.",
      "Add a hover effect to all three cards.",
    ],
    hint:
      "Build and style one card completely first, then copy it twice and change only the price/name/highlight per copy.",
    starterCode: `<div class="">
  <!-- Basic card -->
  <!-- Standard card (highlighted) -->
  <!-- Premium card -->
</div>`,
    solution: `<div class="flex flex-col md:flex-row gap-6">
  <div class="flex-1 rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-lg transition hover:border-emerald-400/30">
    <h3 class="text-lg font-bold">Basic</h3>
    <p class="mt-2 text-3xl font-bold">R0</p>
  </div>

  <div class="flex-1 rounded-2xl border-2 border-emerald-400 bg-slate-900 p-6 shadow-lg transition hover:border-emerald-300">
    <span class="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Most popular</span>
    <h3 class="mt-3 text-lg font-bold">Standard</h3>
    <p class="mt-2 text-3xl font-bold">R100</p>
  </div>

  <div class="flex-1 rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-lg transition hover:border-emerald-400/30">
    <h3 class="text-lg font-bold">Premium</h3>
    <p class="mt-2 text-3xl font-bold">R180</p>
  </div>
</div>`,
    extensions: [
      "Add a list of 3-4 features under each price using a ul.",
      "Add a call-to-action button at the bottom of each card.",
      "Make the Standard card slightly taller or scaled up to stand out further.",
    ],
  },
  {
    id: 13,
    level: "Challenge",
    language: "Tailwind",
    title: "Landing Page Hero Section",
    description:
      "Build a complete, responsive hero section combining everything from the Tailwind course.",
    skills: [
      "Typography",
      "Colors & Backgrounds",
      "Flexbox",
      "Responsive Design",
      "Hover & Transitions",
    ],
    goal:
      "Create a polished hero section: a heading, supporting text, a call-to-action button, and a side visual — responsive from mobile to desktop.",
    requirements: [
      "A large, bold heading and supporting paragraph.",
      "A call-to-action button with a hover effect.",
      "Content stacked on mobile, side-by-side (text + visual) on larger screens.",
      "A small badge or label above the heading.",
      "Consistent spacing and a cohesive color scheme throughout.",
    ],
    steps: [
      "Build the text column first: badge, heading, paragraph, button — mobile-first, no side-by-side yet.",
      "Add a second column for a visual (a colored box or card stands in fine).",
      "Wrap both columns in a flex container: flex-col by default, md:flex-row at medium screens.",
      "Add responsive text sizing so the heading is smaller on mobile, larger on desktop.",
      "Add a hover effect to the button, with a smooth transition.",
    ],
    hint:
      "This mirrors the homepage hero you've seen throughout CodeSupport SA itself — look at how that's built for inspiration on structure.",
    starterCode: `<section class="">
  <div class=""> <!-- text column -->
  </div>
  <div class=""> <!-- visual column -->
  </div>
</section>`,
    solution: `<section class="bg-slate-950 px-6 py-16">
  <div class="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row">
    <div class="flex-1 text-center md:text-left">
      <span class="rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
        New
      </span>

      <h1 class="mt-5 text-4xl font-bold md:text-5xl">
        Build something great.
      </h1>

      <p class="mt-4 text-lg text-slate-400">
        A short, confident sentence about what this product does.
      </p>

      <button class="mt-6 rounded-xl bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300">
        Get Started →
      </button>
    </div>

    <div class="flex-1">
      <div class="h-64 rounded-2xl bg-slate-900 border border-white/10"></div>
    </div>
  </div>
</section>`,
    extensions: [
      "Add a second, secondary button next to the main call-to-action.",
      "Add a subtle background glow effect behind the visual column.",
      "Add a small row of trust logos or stats below the button.",
    ],
  },
  {
    id: 14,
    level: "Intermediate",
    language: "TypeScript",
    title: "Class-Based Grade Book",
    description:
      "Build a small grade book system using classes, with safely typed data throughout.",
    skills: [
      "Classes",
      "Optional & Readonly Properties",
      "Arrays",
      "Functions",
    ],
    goal:
      "Create a Student class that stores marks and reports on a student's performance.",
    requirements: [
      "A Student class with a readonly id, a name, and an array of marks.",
      "A method to add a new mark to a student.",
      "A method to calculate the student's average.",
      "A method that returns whether the student is passing overall.",
    ],
    steps: [
      "Define the Student class with readonly id: number, name: string, and marks: number[].",
      "Write a constructor that sets id and name, and starts marks as an empty array.",
      "Add an addMark(mark: number) method that pushes to the array.",
      "Add a getAverage(): number method.",
      "Add an isPassing(): boolean method using the average.",
    ],
    hint:
      "getAverage() can loop through this.marks the same way you looped through arrays earlier in the TypeScript course.",
    starterCode: `class Student {
  // properties here

  constructor(id: number, name: string) {
    // set up properties
  }

  addMark(mark: number) {
    // your code
  }

  getAverage(): number {
    // your code
  }

  isPassing(): boolean {
    // your code
  }
}`,
    solution: `class Student {
  readonly id: number;
  name: string;
  marks: number[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.marks = [];
  }

  addMark(mark: number) {
    this.marks.push(mark);
  }

  getAverage(): number {
    let total = 0;

    for (const mark of this.marks) {
      total = total + mark;
    }

    return total / this.marks.length;
  }

  isPassing(): boolean {
    return this.getAverage() >= 50;
  }
}

const learner1 = new Student(1, "Nampho");
learner1.addMark(72);
learner1.addMark(65);

console.log(learner1.getAverage());
console.log(learner1.isPassing());`,
    extensions: [
      "Add an optional nickname?: string property.",
      "Add a getHighestMark(): number method.",
      "Prevent addMark from accepting a value below 0 or above 100.",
    ],
  },
  {
    id: 15,
    level: "Challenge",
    language: "TypeScript",
    title: "Generic Data Store",
    description:
      "Build a small, reusable generic class that can safely store and manage a list of any type.",
    skills: [
      "Generics",
      "Enums",
      "Union Types",
      "Classes",
    ],
    goal:
      "Create a generic Store<T> class that can hold a list of items of any single type, with basic operations.",
    requirements: [
      "A generic class called Store<T> with a private array of items.",
      "An add(item: T) method.",
      "A getAll(): T[] method.",
      "A count(): number method.",
      "Used with at least two different types (e.g. a Store<string> and a Store<number>).",
    ],
    steps: [
      "Define class Store<T> with a private items: T[] = [].",
      "Add add(item: T): void that pushes to items.",
      "Add getAll(): T[] that returns the array.",
      "Add count(): number that returns the array's length.",
      "Create two separate Store instances with different types and test both.",
    ],
    hint:
      "The <T> works exactly like the generic functions from the course — just declared on the class instead of a single function.",
    starterCode: `class Store<T> {
  // your code here
}

// try it with two different types
`,
    solution: `class Store<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  count(): number {
    return this.items.length;
  }
}

const names = new Store<string>();
names.add("Nampho");
names.add("Thando");
console.log(names.getAll(), names.count());

const marks = new Store<number>();
marks.add(72);
marks.add(65);
console.log(marks.getAll(), marks.count());`,
    extensions: [
      "Add a remove(item: T) method.",
      "Add a Category enum and a second generic store constrained to storing objects with a category property.",
      "Add a type union so the store can only hold string | number, not any type.",
    ],
  },
  {
    id: 16,
    level: "Intermediate",
    language: "JavaScript",
    title: "To-Do List",
    description:
      "Build a fully working to-do list — add tasks, mark them done, and see them appear instantly.",
    skills: [
      "Arrays",
      "Objects",
      "DOM Selection",
      "Event Listeners",
    ],
    goal:
      "Create a webpage where a user can type a task, add it to a list, and mark tasks as complete.",
    requirements: [
      "An input for typing a new task, and an \"Add\" button.",
      "Clicking Add displays the task in a list on the page.",
      "Each task can be clicked to toggle it as complete (e.g. strikethrough).",
      "The input clears after adding a task.",
    ],
    steps: [
      "Create the HTML: an input, an Add button, and an empty container (like a ul) for tasks.",
      "In JavaScript, keep an array of task objects, each with text and done properties.",
      "When Add is clicked, push a new task object into the array and clear the input.",
      "Write a function that re-renders the whole list from the array into the container.",
      "Add a click listener on each rendered task that toggles its done property and re-renders.",
    ],
    hint:
      "Re-rendering the whole list from the array every time (clear the container, then loop and rebuild it) is simpler to get right than trying to update individual list items directly.",
    starterCode: `<input id="taskInput" type="text" />
<button id="addButton">Add</button>
<ul id="taskList"></ul>

<script>
  const tasks = [];
  // your code here
</script>`,
    solution: `<input id="taskInput" type="text" />
<button id="addButton">Add</button>
<ul id="taskList"></ul>

<script>
  const tasks = [];

  const input = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");

  function render() {
    taskList.textContent = "";

    for (const task of tasks) {
      const li = document.createElement("li");
      li.textContent = task.text;

      if (task.done) {
        li.style.textDecoration = "line-through";
      }

      li.addEventListener("click", function () {
        task.done = !task.done;
        render();
      });

      taskList.appendChild(li);
    }
  }

  addButton.addEventListener("click", function () {
    if (input.value === "") return;

    tasks.push({ text: input.value, done: false });
    input.value = "";
    render();
  });
</script>`,
    extensions: [
      "Add a delete button next to each task.",
      "Show a count of remaining (not done) tasks.",
      "Save the tasks so they're still there after refreshing the page.",
    ],
  },
  {
    id: 17,
    level: "Challenge",
    language: "JavaScript",
    title: "Live Search Filter",
    description:
      "Build a list of items that filters instantly as the user types, no button needed.",
    skills: [
      "Arrays",
      "Functions",
      "DOM Selection",
      "Event Listeners",
    ],
    goal:
      "Create a searchable list of subjects that narrows down live as the user types in a search box.",
    requirements: [
      "A fixed array of at least 8 subject names.",
      "A search input above the list.",
      "The list displays all subjects by default.",
      "Typing in the search box instantly filters the list to matching subjects only.",
      "The search should not be case-sensitive.",
    ],
    steps: [
      "Create the HTML: a search input and an empty container for results.",
      "Store the full list of subjects in a JavaScript array.",
      "Write a render(list) function that displays a given array of subjects.",
      "Call render(subjects) once on page load to show everything.",
      "Add an input event listener on the search box that filters the array and calls render() with the filtered results.",
    ],
    hint:
      "Array.prototype.filter() combined with .toLowerCase() on both the subject and the search text handles the case-insensitive matching cleanly.",
    starterCode: `<input id="searchBox" type="text" placeholder="Search subjects..." />
<ul id="results"></ul>

<script>
  const subjects = ["Mathematics", "Physical Sciences", "Life Sciences", "English", "Life Orientation", "History", "Geography", "Computer Applications Technology"];
  // your code here
</script>`,
    solution: `<input id="searchBox" type="text" placeholder="Search subjects..." />
<ul id="results"></ul>

<script>
  const subjects = ["Mathematics", "Physical Sciences", "Life Sciences", "English", "Life Orientation", "History", "Geography", "Computer Applications Technology"];

  const searchBox = document.getElementById("searchBox");
  const results = document.getElementById("results");

  function render(list) {
    results.textContent = "";

    for (const subject of list) {
      const li = document.createElement("li");
      li.textContent = subject;
      results.appendChild(li);
    }
  }

  searchBox.addEventListener("input", function () {
    const searchText = searchBox.value.toLowerCase();

    const filtered = subjects.filter(function (subject) {
      return subject.toLowerCase().includes(searchText);
    });

    render(filtered);
  });

  render(subjects);
</script>`,
    extensions: [
      "Show \"No subjects found\" when the filtered list is empty.",
      "Highlight the matching part of the text in each result.",
      "Add a count showing how many results are currently displayed.",
    ],
  },
];

const levels = ["All", "Beginner", "Intermediate", "Challenge"];

export default function ProjectsPage() {
  const [level, setLevel] = useState("All");
  const [language, setLanguage] = useState("All");
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [completed, setCompleted] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<
    "overview" | "steps" | "starter" | "solution"
  >("overview");

  const filteredProjects = projects.filter((project) => {
    const levelMatch =
      level === "All" || project.level === level;

    const languageMatch =
      language === "All" || project.language === language;

    return levelMatch && languageMatch;
  });

  const toggleCompleted = (id: number) => {
    setCompleted((current) =>
      current.includes(id)
        ? current.filter((projectId) => projectId !== id)
        : [...current, id]
    );
  };

  const selectedProject = projects.find(
    (project) => project.id === openProject
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link
            href="/"
            className="font-bold transition hover:text-emerald-400"
          >
            CodeSupport <span className="text-emerald-400">SA</span>
          </Link>

          <div className="flex items-center gap-5">
            <Link
              href="/learn"
              className="hidden text-sm text-slate-400 transition hover:text-emerald-400 sm:block"
            >
              Learn
            </Link>

            <Link
              href="/practice"
              className="hidden text-sm text-slate-400 transition hover:text-emerald-400 sm:block"
            >
              Practice
            </Link>

             <AuthNavButton />

            <Link
              href="/support"
              className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Get Help
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <Link
            href="/"
            className="text-sm text-slate-500 transition hover:text-emerald-400"
          >
            ← Back to home
          </Link>

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Build Something
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Projects
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Exercises teach you individual skills. Projects show you how to
              put those skills together to build something useful.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3">
              <span className="text-2xl font-bold">
                {projects.length}
              </span>

              <span className="ml-2 text-sm text-slate-500">
                projects
              </span>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3">
              <span className="text-2xl font-bold">
                {completed.length}
              </span>

              <span className="ml-2 text-sm text-slate-500">
                completed
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div>
              <label
                htmlFor="project-level"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500"
              >
                Difficulty
              </label>

              <select
                id="project-level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
              >
                {levels.map((item) => (
                  <option key={item} value={item}>
                    {item === "All" ? "All levels" : item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="project-language"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500"
              >
                Language
              </label>

              <select
                id="project-language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none focus:border-emerald-400"
              >
                <option value="All">All languages</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="Tailwind">Tailwind CSS</option>
                <option value="TypeScript">TypeScript</option>
                <option value="JavaScript">JavaScript</option>
              </select>
            </div>

            <div className="sm:ml-auto">
              <span className="text-sm text-slate-500">
                Showing {filteredProjects.length} projects
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => {
            const isCompleted = completed.includes(project.id);

            return (
              <article
                key={project.id}
                className={`rounded-2xl border p-6 transition ${
                  isCompleted
                    ? "border-emerald-400/30 bg-emerald-400/5"
                    : "border-white/10 bg-slate-900 hover:border-white/20"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                      {project.language}
                    </span>

                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                      {project.level}
                    </span>
                  </div>

                  {isCompleted && (
                    <span className="text-xs font-semibold text-emerald-400">
                      ✓ Done
                    </span>
                  )}
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-950 px-3 py-1.5 text-xs text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex gap-3">
                  <button
                    onClick={() => {
                      setOpenProject(project.id);
                      setActiveTab("overview");
                    }}
                    className="flex-1 rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                  >
                    View Project
                  </button>

                  <button
                    onClick={() => toggleCompleted(project.id)}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isCompleted
                        ? "border border-white/10 bg-white/5 text-slate-300"
                        : "border border-white/10 bg-slate-950 text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    {isCompleted ? "Undo" : "✓"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Project Viewer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/95 backdrop-blur-sm">
          <div className="min-h-screen px-4 py-8 sm:px-6">
            <div className="mx-auto max-w-5xl">
              {/* Modal header */}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                      {selectedProject.language}
                    </span>

                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400">
                      {selectedProject.level}
                    </span>
                  </div>

                  <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                    {selectedProject.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {selectedProject.description}
                  </p>
                </div>

                <button
                  onClick={() => setOpenProject(null)}
                  className="rounded-xl border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10"
                >
                  Close ✕
                </button>
              </div>

              {/* Tabs */}
              <div className="mt-8 flex flex-wrap gap-2 border-b border-white/10 pb-3">
                {[
                  ["overview", "Overview"],
                  ["steps", "Steps"],
                  ["starter", "Starter Code"],
                  ["solution", "Solution"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    onClick={() =>
                      setActiveTab(
                        value as
                          | "overview"
                          | "steps"
                          | "starter"
                          | "solution"
                      )
                    }
                    className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                      activeTab === value
                        ? "bg-emerald-400 text-slate-950"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="mt-8">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
                      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                        🎯 Project Goal
                      </p>

                      <p className="mt-3 leading-7 text-slate-300">
                        {selectedProject.goal}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                      <h3 className="text-xl font-bold">
                        Requirements
                      </h3>

                      <ul className="mt-5 space-y-3">
                        {selectedProject.requirements.map(
                          (requirement, index) => (
                            <li
                              key={requirement}
                              className="flex gap-3 text-sm leading-7 text-slate-400"
                            >
                              <span className="font-mono text-emerald-400">
                                {index + 1}.
                              </span>

                              <span>{requirement}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                      <h3 className="text-xl font-bold">
                        Skills you will practise
                      </h3>

                      <div className="mt-5 flex flex-wrap gap-3">
                        {selectedProject.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-xl bg-slate-950 px-4 py-2 text-sm text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "steps" && (
                  <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
                    <p className="text-sm text-slate-500">
                      Don't copy the solution immediately. Try each step
                      yourself.
                    </p>

                    <div className="mt-8 space-y-5">
                      {selectedProject.steps.map((step, index) => (
                        <div
                          key={step}
                          className="flex gap-5 rounded-xl border border-white/10 bg-slate-950 p-5"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-slate-950">
                            {index + 1}
                          </div>

                          <p className="text-sm leading-7 text-slate-300">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
                      <p className="text-sm font-semibold text-yellow-300">
                        💡 Hint
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        {selectedProject.hint}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "starter" && (
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                      <span className="text-sm font-semibold">
                        Starter Code
                      </span>

                      <span className="text-xs text-slate-500">
                        Try completing the missing parts
                      </span>
                    </div>

                    <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-emerald-300">
                      <code>{selectedProject.starterCode}</code>
                    </pre>
                  </div>
                )}

                {activeTab === "solution" && (
                  <div className="space-y-6">
                    <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
                      <p className="text-sm font-semibold text-yellow-300">
                        ⚠️ Try the project first
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        The solution is here for checking your work or helping
                        you understand where you went wrong.
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-emerald-400/20 bg-slate-900">
                      <div className="border-b border-white/10 px-5 py-4">
                        <span className="text-sm font-semibold text-emerald-300">
                          Example Solution
                        </span>
                      </div>

                      <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-emerald-300">
                        <code>{selectedProject.solution}</code>
                      </pre>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                      <h3 className="text-xl font-bold">
                        🚀 Extension Challenges
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        Finished already? Try improving your program.
                      </p>

                      <ul className="mt-5 space-y-3">
                        {selectedProject.extensions.map(
                          (extension, index) => (
                            <li
                              key={extension}
                              className="flex gap-3 text-sm leading-7 text-slate-400"
                            >
                              <span className="text-emerald-400">
                                {index + 1}.
                              </span>

                              <span>{extension}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Completion */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900 p-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-bold">
                      Finished this project?
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Mark it as completed to keep track of your progress.
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      toggleCompleted(selectedProject.id)
                    }
                    className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                      completed.includes(selectedProject.id)
                        ? "bg-white/10 text-slate-300 hover:bg-white/15"
                        : "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                    }`}
                  >
                    {completed.includes(selectedProject.id)
                      ? "✓ Project Completed"
                      : "Mark Project Complete"}
                  </button>
                </div>
              </div>

              {/* Help */}
              <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
                <h3 className="font-bold">
                  Stuck on the project?
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Try the steps and hint first. If you still need help,
                  CodeSupport SA can help you work through the problem.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/coding-help"
                    className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                  >
                    Get Coding Help
                  </Link>

                  <Link
                    href="/support"
                    className="rounded-xl bg-emerald-400 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
                  >
                    Book 1-on-1 Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:justify-between">
            <span>CodeSupport SA</span>
            <span>Learn. Practise. Build. Get Help.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}