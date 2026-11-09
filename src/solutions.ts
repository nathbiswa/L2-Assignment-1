// Problem 1

function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  }

  return value * multiplier;
}

// console.log(multiplyValue(10));
// console.log(multiplyValue(10, 5));
// console.log(multiplyValue(7, 0));

// Problem 2

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
}

// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));

// Problem 3

function formatCoordinate(value: readonly [number, number, string]): string {
  const latitude = value[0];
  const longitude = value[1];
  const locationName = value[2];

  return `Location: ${locationName} (${latitude},${longitude})`;
}

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));

// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

// We can use to both function

// function concatenateArrays<T>(...arrays: T[][]): T[] {
//   return arrays.flat();
// }

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return ([] as T[]).concat(...arrays);
}

// console.log(concatenateArrays(["a", "b"], ["c", "d"]));

// console.log(concatenateArrays([1, 2], [3, 4], [5]));

// Prblem 5

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter((course) => {
    return course.isPublished === true && course.students >= minStudents;
  });
}

// console.log(getPopularCourses(courses, 80));

// Problem 6
function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

// console.log(pluckValues(users, "name"));
// console.log(pluckValues(users, "id"));
