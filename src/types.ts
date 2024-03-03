export type JSONArray = JSONNode[];

export type JSONObject = {
  [key: string]: JSONNode;
};

export type JSONArrayOrObject = JSONArray | JSONObject;

export type JSONNode = JSONValue | JSONObject | JSONArray;

export type JSONValue = boolean | number | string;
