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

test("Resetting element does not increase length", () => {
  const map = new HashMap();
  map.set("feverish", "lax");
  map.set("feverish", "taut");
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
  expect(map.length()).toBe(0);
});

test("Map.get gets an element in the map", () => {
  const map = new HashMap();
  map.set("feverish", "lax");
  expect(map.get("feverish")).toBe("lax");
});

test("Map.get returns undefined for an element not in the map", () => {
  const map = new HashMap();
  map.set("feverish", "lax");
  expect(map.get("seven")).toBe(undefined);
});

test("Map.keys returns an empty array for an empty map", () => {
  const map = new HashMap();
  expect(map.keys()).toHaveLength(0);
});

test("Map.keys returns correct keys", () => {
  const map = new HashMap();
  map.set("feverish", "lax");
  map.set("alto", "discordant");
  const keys = map.keys();
  expect(keys).toContain("feverish");
  expect(keys).toContain("alto");
});

test("Map.values returns an empty array for an empty map", () => {
  const map = new HashMap();
  expect(map.values()).toHaveLength(0);
});

test("Map.values returns correct values", () => {
  const map = new HashMap();
  map.set("feverish", "lax");
  map.set("alto", "discordant");
  const values = map.values();
  expect(values).toContain("lax");
  expect(values).toContain("discordant");
});

test("Map.entries returns an empty array for an empty map", () => {
  const map = new HashMap();
  expect(map.entries()).toHaveLength(0);
});

test("Map.entries returns correct values", () => {
  const map = new HashMap();
  map.set("feverish", "lax");
  map.set("alto", "discordant");
  const entries = map.entries();
  expect(map.entries()).toHaveLength(2);
  expect(entries).toContainEqual(["feverish", "lax"]);
  expect(entries).toContainEqual(["alto", "discordant"]);
});

test("Clear works on an empty map", () => {
  const map = new HashMap();
  map.clear();
  expect(map.length()).toBe(0);
});

test("Map.entries returns correct values", () => {
  const map = new HashMap();
  map.set("feverish", "lax");
  map.set("alto", "discordant");
  map.clear();
  expect(map.length()).toBe(0);
});

test("Map rebalances when it hits load capacity", () => {
  const map = new HashMap();
  map.set("one", "value");
  map.set("two", "value");
  map.set("thr", "value");
  map.set("fou", "value");
  map.set("fiv", "value");
  map.set("six", "value");
  map.set("sev", "value");
  map.set("eig", "value");
  map.set("nin", "value");
  map.set("ten", "value");
  map.set("ele", "value");
  map.set("twe", "value");
  map.set("thirteen", "value");
  map.set("fourteen", "value");
  expect(map.capacity).toBe(32);
});

test("Map does not rebalance before hitting load capacity", () => {
  const map = new HashMap();
  map.set("one", "value");
  map.set("two", "value");
  map.set("thr", "value");
  map.set("fou", "value");
  map.set("fiv", "value");
  map.set("six", "value");
  map.set("sev", "value");
  map.set("eig", "value");
  map.set("nin", "value");
  map.set("ten", "value");
  map.set("ele", "value");
  map.set("twe", "value");
  expect(map.capacity).toBe(16);
});
