import { pythonChapter } from "./chapter";

export const dsa = pythonChapter("Python DSA", "Intermediate", [
  {
    title: "Python DSA",
    summary: "Compare the cost of operations as a collection grows.",
    content: [
      "A data structure organizes values. An algorithm supplies the steps that operate on them. Match the structure to the question: a sequence preserves positions, while a set supports membership checks.",
      "Measure work by counting comparisons. Looking for a missing item by scanning a list requires checking every entry, so doubling the list doubles that work.",
    ],
    examples: [{
      title: "Count comparisons in a scan",
      code: `def inspect(items, wanted):
    checks = 0
    for item in items:
        checks += 1
        if item == wanted:
            return True, checks
    return False, checks

print(inspect([6, 9, 2, 8], 2))
print(inspect([6, 9, 2, 8], 5))`,
      result: "The successful scan reports (True, 3). The missing value reports (False, 4).",
    }],
    quizzes: [{
      question: "For a list of 100 items, how many comparisons does this scan make for a missing value?",
      options: ["One","100","About seven"],
      answer: 1,
      explanation: "Every element must be compared before the scan can conclude that the value is absent.",
    }],
  },
  {
    title: "Lists and Arrays",
    summary: "Choose an indexed sequence and understand its element constraints.",
    content: [
      "Python lists store references and can mix element types. The standard library's array stores values of a declared numeric type. Both support indexing, appending and iteration. Inserting near the front can shift many existing positions.",
    ],
    examples: [{
      title: "Store a row of integer readings",
      code: `from array import array

labels = ["start", 12]
samples = array("i", [12, 17, 14])
samples.append(16)
print(labels[0], samples[1], samples.tolist())`,
      result: "The result is start, 17 and [12, 17, 14, 16]. The type code i selects signed integers.",
    }],
    quizzes: [{
      question: "What would samples.append('end') do?",
      options: ["Store the word","Store zero","Raise a TypeError"],
      answer: 2,
      explanation: "An integer array expects a compatible numeric value.",
    }],
  },
  {
    title: "Stacks",
    summary: "Reverse the order of operations with a last-in, first-out structure.",
    content: [
      "Push a value onto the end of a list with append and remove the most recent value with pop. An undo history uses this order because the last edit must be undone first. Check whether the stack is empty before popping.",
    ],
    examples: [{
      title: "Undo two edits",
      code: `history = []
for action in ["draw circle", "move circle", "color circle"]:
    history.append(action)

for _ in range(2):
    if history:
        print("Undo", history.pop())
print(history)`,
      result: "The color change is undone first, then the move. The draw action remains.",
    }],
    quizzes: [{
      question: "If a new resize action is pushed now, which action will pop next?",
      options: ["resize","draw circle","move circle"],
      answer: 0,
      explanation: "The newest item is at the top of the stack.",
    }],
  },
  {
    title: "Queues",
    summary: "Handle arrivals in first-in, first-out order.",
    content: [
      "A queue adds new items at the back and serves items at the front. collections.deque supports append and popleft efficiently at opposite ends. Removing from the front of a long list would shift the remaining elements.",
    ],
    examples: [{
      title: "Serve print jobs",
      code: `from collections import deque

jobs = deque(["poster", "ticket"])
jobs.append("map")
while jobs:
    print(jobs.popleft())`,
      result: "The jobs print in arrival order: poster, ticket, map.",
    }],
    quizzes: [{
      question: "Which pair implements this queue discipline?",
      options: ["append and pop","append and popleft","appendleft and popleft"],
      answer: 1,
      explanation: "Adding on the right and removing from the left serves the oldest item.",
    }],
  },
  {
    title: "Linked Lists",
    summary: "Follow links from one node to its successor.",
    content: [
      "Each node carries a value and a reference to the next node. A head reference gives access to the sequence. Prepending can change only the head and a single link, while finding an item by position requires following the intervening links.",
    ],
    examples: [{
      title: "Prepend a stop on a route",
      code: `class Stop:
    def __init__(self, name, next_stop=None):
        self.name = name
        self.next = next_stop

head = Stop("Park", Stop("Library"))
head = Stop("Station", head)
current = head
while current is not None:
    print(current.name)
    current = current.next`,
      result: "Traversal visits Station, Park and Library, then reaches None.",
    }],
    quizzes: [{
      question: "What must the new Station node reference?",
      options: ["Itself","None","The former head"],
      answer: 2,
      explanation: "Linking the new head to Park preserves the rest of the route.",
    }],
  },
  {
    title: "Hash Tables",
    summary: "Use a dictionary to update a value by key.",
    content: [
      "A hash table uses a key's hash to help locate its entry. Python dictionaries also compare keys to distinguish collisions. With suitable keys, lookups and updates take constant time on average. Keys must be hashable.",
    ],
    examples: [{
      title: "Count repeated tool bookings",
      code: `bookings = ["press", "lathe", "press", "saw", "press"]
counts = {}
for tool in bookings:
    counts[tool] = counts.get(tool, 0) + 1
print(counts["press"], counts.get("drill", 0))`,
      result: "The output is 3 and 0. The default supplies a starting count for an unseen tool.",
    }],
    quizzes: [{
      question: "Why call get(tool, 0) when updating?",
      options: ["A new tool needs an initial count","It sorts the keys","It deletes old bookings"],
      answer: 0,
      explanation: "The first occurrence has no existing dictionary entry.",
    }],
  },
  {
    title: "Trees",
    summary: "Traverse a hierarchy from a root through its children.",
    content: [
      "A rooted tree gives each node except the root one parent. Nodes with no children are leaves. A depth-first traversal can process the current node and then recursively visit each child's subtree.",
    ],
    examples: [{
      title: "List sections in a handbook",
      code: `children = {
    "Guide": ["Setup", "Recipes"],
    "Setup": [],
    "Recipes": ["Bread", "Soup"],
    "Bread": [], "Soup": [],
}

def visit(section, depth=0):
    print("  " * depth + section)
    for child in children[section]:
        visit(child, depth + 1)

visit("Guide")`,
      result: "Setup and Recipes appear one level below Guide. Bread and Soup are indented under Recipes.",
    }],
    quizzes: [{
      question: "Which node is the parent of Soup?",
      options: ["Guide","Recipes","Bread"],
      answer: 1,
      explanation: "Soup appears in the child list associated with Recipes.",
    }],
  },
  {
    title: "Binary Trees",
    summary: "Trace a tree in which each node has at most two children.",
    content: [
      "A binary tree distinguishes a left child and a right child. In an inorder traversal, visit the left subtree, then the node, then its right subtree. A missing child is a base case that requires no work.",
    ],
    examples: [{
      title: "Read an expression tree",
      code: `tree = ("+", ("x", None, None), ("y", None, None))

def inorder(node):
    if node is None:
        return
    value, left, right = node
    yield from inorder(left)
    yield value
    yield from inorder(right)

print(" ".join(inorder(tree)))`,
      result: "The traversal prints x + y. The operator appears between its operands.",
    }],
    quizzes: [{
      question: "Which traversal places the root first?",
      options: ["Inorder","Postorder","Preorder"],
      answer: 2,
      explanation: "Preorder visits the node before traversing either child.",
    }],
  },
  {
    title: "Binary Search Trees",
    summary: "Restrict a search to one subtree at each comparison.",
    content: [
      "In a binary search tree with distinct keys, every key in the left subtree is smaller than the node and every key in the right subtree is larger. That rule allows lookup to ignore one subtree on each step.",
      "The number of comparisons depends on height. A balanced tree has logarithmic height, while an increasingly ordered insertion sequence can create a chain in a plain search tree.",
    ],
    examples: [{
      title: "Look up a locker number",
      code: `tree = (8, (3, None, (6, None, None)), (12, None, None))

def contains(node, wanted):
    while node is not None:
        key, left, right = node
        if key == wanted:
            return True
        node = left if wanted < key else right
    return False

print(contains(tree, 6), contains(tree, 7))`,
      result: "The first search visits 8, 3 and 6 and succeeds. The second reaches a missing child and returns False.",
    }],
    quizzes: [{
      question: "After comparing 6 with the root 8, where does lookup go?",
      options: ["Into the left subtree","Into the right subtree","To both children"],
      answer: 0,
      explanation: "All possible keys below 8 lie in the root's left subtree.",
    }],
  },
  {
    title: "AVL Trees",
    summary: "Restore the height balance of a search tree with a rotation.",
    content: [
      "An AVL tree keeps the heights of each node's left and right subtrees within one of each other. A rotation changes local parent-child links while preserving sorted key order. Insertions and removals may require a single or double rotation.",
      "Inserting 30, 20 and 10 produces a left-left imbalance at 30. Promote its left child and move that child's former right subtree to the old root's left link.",
    ],
    examples: [{
      title: "Rotate a left-heavy subtree",
      code: `class Node:
    def __init__(self, key, left=None, right=None):
        self.key, self.left, self.right = key, left, right

def rotate_right(root):
    pivot = root.left
    root.left = pivot.right
    pivot.right = root
    return pivot

root = Node(30, Node(20, Node(10)))
root = rotate_right(root)
print(root.key, root.left.key, root.right.key)`,
      result: "The new root is 20 with children 10 and 30. Both child subtrees now have equal height.",
    }],
    quizzes: [{
      question: "Why transfer pivot.right to root.left?",
      options: ["It contains values above the old root","Its keys lie between the pivot and old root","It must become the largest subtree"],
      answer: 1,
      explanation: "Those keys exceed the pivot and are smaller than the old root, so this link preserves search order.",
    }],
  },
  {
    title: "Graphs",
    summary: "Explore connected vertices with breadth-first search.",
    content: [
      "Represent a graph with an adjacency list that names the neighbors of each vertex. Breadth-first search uses a queue to visit vertices in layers of distance from the start in an unweighted graph. Marking vertices when enqueued avoids repeated work around cycles.",
    ],
    examples: [{
      title: "Visit transit stops by distance",
      code: `from collections import deque

links = {"A": ["B", "C"], "B": ["A", "D"],
         "C": ["A", "D"], "D": ["B", "C"]}
seen = {"A"}
queue = deque(["A"])
while queue:
    stop = queue.popleft()
    print(stop)
    for neighbor in links[stop]:
        if neighbor not in seen:
            seen.add(neighbor)
            queue.append(neighbor)`,
      result: "The order is A, B, C, D. The second route to D does not add it again.",
    }],
    quizzes: [{
      question: "What prevents a cycle from sending the search back to A?",
      options: ["Alphabetical keys","The number of queue slots","The seen set"],
      answer: 2,
      explanation: "A is marked before traversal and visited neighbors are skipped.",
    }],
  },
  {
    title: "Linear Search",
    summary: "Locate the first matching value in an unsorted sequence.",
    content: [
      "A linear scan can start immediately without sorting or indexing the data. Return the index as soon as the value matches. A separate sentinel can identify an unsuccessful search, including one on an empty sequence.",
    ],
    examples: [{
      title: "Find a repeated shipment code",
      code: `def find_first(codes, target):
    for index, code in enumerate(codes):
        if code == target:
            return index
    return None

print(find_first(["Q", "B", "Q"], "Q"))
print(find_first([], "Q"))`,
      result: "The output is 0 for the first Q and None for the empty shipment list.",
    }],
    quizzes: [{
      question: "Why use 'is not None' to check for a successful result?",
      options: ["Index zero is valid but false in a truth test","Every index is a string","None means index zero"],
      answer: 0,
      explanation: "A generic truth test would accidentally discard a match at the first position.",
    }],
  },
  {
    title: "Binary Search",
    summary: "Halve the remaining search interval in a sorted sequence.",
    content: [
      "Maintain a lower and upper bound around all possible matches. This example uses a half-open interval with an excluded upper bound. Compare the middle element and keep only the half that could still contain the target.",
    ],
    examples: [{
      title: "Search sorted box numbers",
      code: `def locate(values, target):
    low, high = 0, len(values)
    while low < high:
        middle = (low + high) // 2
        if values[middle] == target:
            return middle
        if values[middle] < target:
            low = middle + 1
        else:
            high = middle
    return None

print(locate([2, 4, 8, 10, 13], 10))`,
      result: "The first midpoint contains 8. The remaining interval contains 10 and 13, and the search eventually returns index 3.",
    }],
    quizzes: [{
      question: "Why set low to middle + 1 after finding a smaller midpoint value?",
      options: ["The midpoint could still match","The midpoint and all smaller positions can be discarded","The high bound must become inclusive"],
      answer: 1,
      explanation: "Ascending order rules out every position up to and including that midpoint.",
    }],
  },
  {
    title: "Bubble Sort",
    summary: "Move large values toward the end using adjacent swaps.",
    content: [
      "Compare neighboring values and swap a pair when it is out of order. After a complete left-to-right pass the largest remaining value has reached its final position. Shrink the next pass by one position, and stop early when a pass makes no swaps.",
    ],
    examples: [{
      title: "Trace the end of each pass",
      code: `values = [4, 1, 3, 2]
for end in range(len(values) - 1, 0, -1):
    swapped = False
    for i in range(end):
        if values[i] > values[i + 1]:
            values[i], values[i + 1] = values[i + 1], values[i]
            swapped = True
    print(values)
    if not swapped:
        break`,
      result: "The first pass leaves [1, 3, 2, 4]. The next places 2 before 3, and the final pass confirms the order.",
    }],
    quizzes: [{
      question: "Which position is guaranteed correct after the first full pass?",
      options: ["The first","The middle","The last"],
      answer: 2,
      explanation: "A largest value is repeatedly moved right until it reaches the end.",
    }],
  },
  {
    title: "Selection Sort",
    summary: "Select the smallest remaining value for each position.",
    content: [
      "Treat the prefix as sorted and the suffix as unprocessed. Scan the whole suffix to find its minimum and exchange that value with the first unprocessed position. Even sorted input requires the minimum searches in this implementation.",
    ],
    examples: [{
      title: "Sort ticket numbers",
      code: `tickets = [12, 4, 9, 3]
for start in range(len(tickets) - 1):
    smallest = start
    for i in range(start + 1, len(tickets)):
        if tickets[i] < tickets[smallest]:
            smallest = i
    tickets[start], tickets[smallest] = tickets[smallest], tickets[start]
    print(tickets)`,
      result: "The first exchange gives [3, 4, 9, 12]. Later scans confirm the remaining positions.",
    }],
    quizzes: [{
      question: "After two outer iterations, which part is guaranteed to be final?",
      options: ["The first two positions","The last two positions","Only the middle position"],
      answer: 0,
      explanation: "Each iteration places the minimum remaining value at the next prefix position.",
    }],
  },
  {
    title: "Insertion Sort",
    summary: "Extend a sorted prefix by inserting one value at a time.",
    content: [
      "Save the next value before moving larger values one place to the right. Insert the saved value into the gap. On a nearly sorted sequence only a few items may need shifting. Comparing with strictly greater values preserves the relative order of equal keys.",
    ],
    examples: [{
      title: "Insert arrivals into an ordered row",
      code: `arrivals = [2, 5, 3, 4]
for i in range(1, len(arrivals)):
    value = arrivals[i]
    gap = i
    while gap > 0 and arrivals[gap - 1] > value:
        arrivals[gap] = arrivals[gap - 1]
        gap -= 1
    arrivals[gap] = value
    print(arrivals)`,
      result: "When 3 is inserted, 5 shifts right and the sequence becomes [2, 3, 5, 4]. The final insertion places 4 before 5.",
    }],
    quizzes: [{
      question: "Why store value before shifting?",
      options: ["It must become the largest item","A shift may overwrite its old position","Its index can never change"],
      answer: 1,
      explanation: "The saved value is needed after the gap has moved to its insertion point.",
    }],
  },
  {
    title: "Quick Sort",
    summary: "Partition values around a pivot and sort the smaller subproblems.",
    content: [
      "Split the values into those below, equal to and above a pivot. Sort the outer groups recursively, then concatenate. The equal group handles duplicate keys and guarantees progress. This teaching implementation allocates new lists.",
      "Balanced partitions yield O(n log n) work, while repeatedly uneven partitions can yield O(n²). Picking the value at the middle index does not guarantee balanced groups.",
    ],
    examples: [{
      title: "Keep duplicate priorities",
      code: `def quick_sort(values):
    if len(values) < 2:
        return values
    pivot = values[len(values) // 2]
    lower = [v for v in values if v < pivot]
    equal = [v for v in values if v == pivot]
    higher = [v for v in values if v > pivot]
    return quick_sort(lower) + equal + quick_sort(higher)

print(quick_sort([5, 2, 5, 1, 8]))`,
      result: "The first pivot is 5. Both fives enter the equal group and the result is [1, 2, 5, 5, 8].",
    }],
    quizzes: [{
      question: "Why is the equal group never sent into another recursive call?",
      options: ["Equal keys must be removed","It has only one item","Its items are already ordered relative to one another"],
      answer: 2,
      explanation: "Placing equal values together at the pivot position requires no more sorting.",
    }],
  },
  {
    title: "Counting Sort",
    summary: "Reconstruct an ordered sequence from integer frequencies.",
    content: [
      "When keys are integers in a known small range, count the occurrences of each key and emit each key that many times. The work is O(n + k) for n items and k potential keys. Memory for the count table grows with the range.",
    ],
    examples: [{
      title: "Sort ratings from one to five",
      code: `ratings = [4, 1, 4, 2, 5]
counts = [0] * 6
for rating in ratings:
    counts[rating] += 1

ordered = []
for rating in range(1, 6):
    ordered.extend([rating] * counts[rating])
print(counts[4], ordered)`,
      result: "The count at index 4 is 2, and the reconstructed order is [1, 2, 4, 4, 5].",
    }],
    quizzes: [{
      question: "What makes counting sort attractive for these ratings?",
      options: ["Only five possible keys need counts","The input is already sorted","Every key occurs once"],
      answer: 0,
      explanation: "A tiny key range keeps the count table small.",
    }],
  },
  {
    title: "Radix Sort",
    summary: "Sort nonnegative integers by processing one digit per pass.",
    content: [
      "Least-significant-digit radix sort first groups numbers by their ones digit, then tens, then higher places. Each pass must preserve arrival order within a bucket. This stability retains the lower-digit order established by earlier passes.",
    ],
    examples: [{
      title: "Sort tags by decimal digits",
      code: `def radix_sort(tags):
    tags = list(tags)
    highest = max(tags, default=0)
    place = 1
    while place <= highest:
        buckets = [[] for _ in range(10)]
        for value in tags:
            digit = (value // place) % 10
            buckets[digit].append(value)
        tags = [value for bucket in buckets for value in bucket]
        place *= 10
    return tags

print(radix_sort([31, 12, 21, 3, 11]))`,
      result: "After the ones pass the order is 31, 21, 11, 12, 3. The tens pass yields [3, 11, 12, 21, 31].",
    }],
    quizzes: [{
      question: "Why must 11 stay before 12 when both enter the tens bucket 1?",
      options: ["They have the same ones digit","The ones pass already ordered them","The larger number was inserted first"],
      answer: 1,
      explanation: "Keeping the order within a tens bucket preserves the earlier ones-digit comparison.",
    }],
  },
  {
    title: "Merge Sort",
    summary: "Divide a sequence into halves and merge each pair in order.",
    content: [
      "A sequence with at most one value is already sorted. Recursively sort two halves, then repeatedly take the smaller front value from either half. Once one half is exhausted, append the rest of the other half.",
      "Each merge level processes a total of n values, and repeated halving creates O(log n) levels. Choosing the left item on a tie preserves the original order of equal values.",
    ],
    examples: [{
      title: "Merge numbered cards",
      code: `def merge_sort(cards):
    if len(cards) < 2:
        return cards
    mid = len(cards) // 2
    left = merge_sort(cards[:mid])
    right = merge_sort(cards[mid:])
    i = j = 0
    ordered = []
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            ordered.append(left[i])
            i += 1
        else:
            ordered.append(right[j])
            j += 1
    return ordered + left[i:] + right[j:]

print(merge_sort([8, 3, 5, 3, 1]))`,
      result: "The result is [1, 3, 3, 5, 8]. The two equal threes retain their relative order.",
    }],
    quizzes: [{
      question: "During a merge, why can the remaining tail be appended in one step?",
      options: ["Its values are equal","It contains at most one value","It is already sorted and the other half is exhausted"],
      answer: 2,
      explanation: "No values remain in the other half to interleave with the sorted tail.",
    }],
  },
]);

