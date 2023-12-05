export default async function fetchColleges() {
  try {
    const response = await fetch("/api/colleges/getColleges");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const colleges = await response.json();
    return colleges;
  } catch (error) {
    console.error("Error fetching colleges:", error);
  }
}
