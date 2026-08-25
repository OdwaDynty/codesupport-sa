"use client";

import Link from "next/link";
import { useState } from "react";

type Project = {
  id: number;
  level: "Beginner" | "Intermediate" | "Challenge";
  language: "Java" | "Python";
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
      "Create a small Python program that collects basic information about a learner and displays it.",
    skills: [
      "Variables",
      "Input",
      "Output",
      "Strings",
    ],
    goal:
      "Create a Python program that asks for a learner's name, school and grade.",
    requirements: [
      "Ask for the learner's name.",
      "Ask for the school name.",
      "Ask for the learner's grade.",
      "Display all the information.",
    ],
    steps: [
      "Create a variable for the learner's name.",
      "Use input() to get the school.",
      "Get the learner's grade.",
      "Use print() to display the information.",
    ],
    hint:
      "Use input() to ask questions and store the answers in variables.",
    starterCode: `# Get learner information


# Display the learner information
`,
    solution: `name = input("Enter your name: ")
school = input("Enter your school: ")
grade = input("Enter your grade: ")

print("Learner:", name)
print("School:", school)
print("Grade:", grade)`,
    extensions: [
      "Ask for the learner's age.",
      "Ask for their favourite subject.",
      "Display all the information in one sentence.",
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