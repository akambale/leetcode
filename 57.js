var insert = function (intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];
  if (newInterval.length === 0) return intervals;

  const [newStart, newEnd] = newInterval;

  // these next four edge cases are for if the new range is
  // at the start or end of the existing ranges
  if (newEnd < intervals[0][0]) {
    intervals.unshift(newInterval);
    return intervals;
  }

  if (newEnd == intervals[0][0]) {
    const [start, end] = intervals.shift();
    intervals.unshift([newStart, end]);
    return intervals;
  }

  if (newStart > intervals[intervals.length - 1][1]) {
    intervals.push(newInterval);
    return intervals;
  }

  if (newStart === intervals[intervals.length - 1][1]) {
    const [start, end] = intervals.pop();
    intervals.push([start, newEnd]);
    return intervals;
  }

  let startingIndex;
  const arr = [];
  let hasStarted = false;

  // this loop finds all intervals that conflict with the new interval
  // hasStarted indicates if the removal of the conflicting intervals "has started"
  for (i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (
      (newStart >= start && newStart <= end) ||
      (start > newStart && hasStarted === false)
    ) {
      hasStarted = true;
      if (startingIndex === undefined) startingIndex = i;
    }

    if (start > newEnd && hasStarted === true) hasStarted = false;
    if (hasStarted) {
      arr.push(intervals[i]);
      intervals.splice(i, 1);
      i--;
    }

    if (newEnd >= start && newEnd <= end) {
      hasStarted = false;
    }
  }

  // this condition indicates that no conflicting intervals have been found
  // therefore, we should should insert the new interval at the right palce
  if (arr.length === 0) {
    for (let i = 0; i < intervals.length; i++) {
      const [start, end] = intervals[i];
      if (newStart > end && newStart < intervals[i + 1][0]) {
        intervals.splice(i + 1, 0, [newStart, newEnd]);
        return intervals;
      }
    }
  }

  // create the new interval and insert it
  const newRangeStart = Math.min(arr[0][0], newStart);
  const newRangeEnd = Math.max(arr[arr.length - 1][1], newEnd);
  intervals.splice(startingIndex, 0, [newRangeStart, newRangeEnd]);
  return intervals;
};
