import { pythonChapter } from "./chapter";

export const libraries = pythonChapter("Python Modules", "Intermediate", [
  {
    title: "NumPy Tutorial",
    summary: "Calculate totals for rows and columns of a numerical array.",
    content: [
      "In a virtual environment, install NumPy with python -m pip install numpy. Use np.array to turn rows of measurements into an array. A rectangular array has a shape describing the number of entries along each axis.",
      "Each row below records one day's sales at two counters. Summing along axis 0 combines days and leaves a total per counter. Summing along axis 1 combines counters and leaves a total per day.",
    ],
    examples: [{ title: "Read a two-day sales table", code: `import numpy as np

sales = np.array([[2, 5], [3, 7]])
print(sales.shape)
print(sales.sum(axis=0).tolist())
print(sales.sum(axis=1).tolist())`, result: "The shape is (2, 2). The counters sold [5, 12] items, and the daily totals were [7, 10]." }],
    quizzes: [{ question: "After adding a third day [4, 1], which expression gives the two counter totals?", options: ["sales.sum(axis=1)", "sales.sum(axis=0)", "sales.shape"], answer: 1, explanation: "Axis 0 runs down the rows. Combining the three days leaves one value for each of the two counters." }],
    reading: { title: "NumPy beginner guide", url: "https://numpy.org/doc/stable/user/absolute_beginners.html" },
  },
  {
    title: "Pandas Tutorial",
    summary: "Group rows by a label and summarize one column of a DataFrame.",
    content: [
      "Install pandas with python -m pip install pandas in your virtual environment. A DataFrame keeps related columns together. Constructing one from a dictionary uses the keys as column names and pairs values at matching positions into rows.",
      "Use groupby to collect rows that share a key. Selecting a numeric column and calling sum then produces one total for each group. The group labels become the index of the resulting Series.",
    ],
    examples: [{ title: "Total the pages read by each club", code: `import pandas as pd

log = pd.DataFrame({
    "club": ["Oak", "Pine", "Oak"],
    "pages": [12, 8, 5],
})
totals = log.groupby("club")["pages"].sum()
print(totals.to_dict())`, result: "The dictionary is {'Oak': 17, 'Pine': 8}. Both Oak entries contribute to its total." }],
    quizzes: [{ question: "How could you find the average pages per entry for each club?", options: ["Call log.shape", "Group by pages and count clubs", "Use mean() in place of sum()"], answer: 2, explanation: "The grouping still describes the clubs. Changing the aggregation calculates a different quantity for each club." }],
    reading: { title: "pandas guide to summary statistics", url: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/06_calculate_statistics.html" },
  },
  {
    title: "SciPy Tutorial",
    summary: "Express a target as a zero of a function and solve it numerically.",
    content: [
      "Install SciPy with python -m pip install scipy. The optimize package includes solvers for equations. To find the side of a square with area 10, define the area error as side squared minus 10. Its zero is the desired side.",
      "For a continuous function, brentq can locate a zero between endpoints with opposite signs. At side 3 the square is too small and at side 4 it is too large. Check the numerical solution by substituting it into the original equation.",
    ],
    examples: [{ title: "Find a side length from the area", code: `from scipy.optimize import brentq

def area_error(side):
    return side ** 2 - 10

side = brentq(area_error, 3, 4)
print(round(side, 3))
print(round(side ** 2, 3))`, result: "The side rounds to 3.162. Substitution gives an area that rounds to 10.0." }],
    quizzes: [{ question: "Why would the interval from 1 to 2 fail for this example?", options: ["Both endpoint errors are negative", "SciPy accepts only negative endpoints", "The function jumps at 2"], answer: 0, explanation: "The errors are -9 and -6. These values do not bracket the positive side length whose area is 10." }],
    reading: { title: "SciPy brentq reference", url: "https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.brentq.html" },
  },
  {
    title: "Django Tutorial",
    summary: "Route a request through a Django URL pattern to a Python view.",
    content: [
      "Install Django in your virtual environment with python -m pip install django. In an empty folder run python -m django startproject readingroom . to create manage.py and the readingroom package. Use the example as the contents of the new project's readingroom/urls.py.",
      "Django compares the path of each request with urlpatterns. The int converter captures a sequence of digits and passes its integer value to the view as a named argument. Run python manage.py runserver from the project folder, then open http://127.0.0.1:8000/shelf/3/.",
    ],
    examples: [{ title: "Return a numbered shelf as JSON", code: `from django.http import JsonResponse
from django.urls import path

def shelf(request, number):
    return JsonResponse({"shelf": number, "label": f"Shelf {number}"})

urlpatterns = [
    path("shelf/<int:number>/", shelf),
]`, result: "The development server responds to /shelf/3/ with a JSON object containing shelf 3 and the label Shelf 3. The route also handles other nonnegative integer shelf numbers." }],
    quizzes: [{ question: "What happens for /shelf/oak/ with just this URL pattern?", options: ["The view receives the number 0", "The integer converter rejects the path and Django returns 404", "The view receives a string"], answer: 1, explanation: "The path segment oak does not match the integer converter. No matching view remains in this URL configuration." }],
    reading: { title: "Django first application tutorial", url: "https://docs.djangoproject.com/en/stable/intro/tutorial01/" },
  },
  {
    title: "Playwright Tutorial",
    summary: "Test a visible interaction in a small page using a real browser.",
    content: [
      "Install the Python library with python -m pip install playwright, then install its browser with python -m playwright install chromium. The synchronous API lets a script perform browser actions in order. set_content supplies a local HTML fixture for the test.",
      "Locate the button by the role and name a user encounters. After clicking it, assert that its visible label has changed. A Playwright locator checks the current page when used, and the assertion waits for the expected text.",
    ],
    examples: [{ title: "Test a ticket reservation button", code: `from playwright.sync_api import expect, sync_playwright

with sync_playwright() as playwright:
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.set_content("""<button onclick="this.textContent='Reserved'">Reserve</button>""")
    page.get_by_role("button", name="Reserve", exact=True).click()
    expect(page.get_by_role("button")).to_have_text("Reserved")
    print("Reservation confirmed")
    browser.close()`, result: "A headless browser loads the fixture, clicks the button and checks the updated label. The script prints Reservation confirmed after the check passes." }],
    quizzes: [{ question: "Which change to the page would make the final text assertion fail?", options: ["Changing the button's color", "Adding a heading above the button", "Changing the click handler's text to Pending"], answer: 2, explanation: "The assertion checks the button's text after a click. A label of Pending would never satisfy the expected Reserved value." }],
    reading: { title: "Playwright Python library guide", url: "https://playwright.dev/python/docs/library" },
  },
]);
