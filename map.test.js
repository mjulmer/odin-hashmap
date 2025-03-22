import { HashMap } from "./map.js";

test("New map has length 0", () => {
  const map = new HashMap();
  expect(map.length()).toBe(0);
});

test("Map with one element added has length 1", () => {
  const map = new HashMap();
  map.set("feverish", "lax");
  expect(map.length()).toBe(1);
});

test("Map.has returns false for missing element", () => {
  const map = new HashMap();
  map.set("feverish", "lax");
  expect(map.has("seven")).toBe(false);
});

test("Map.has returns true for element in the map", () => {
  const map = new HashMap();
  map.set("feverish", "lax");
  expect(map.has("feverish")).toBe(true);
});

test("Map.remove removes element from map", () => {
  const map = new HashMap();
  map.set("feverish", "lax");
  expect(map.has("feverish")).toBe(true);
  expect(map.remove("feverish")).not.toBe(false);
  expect(map.has("feverish")).toBe(false);
});
