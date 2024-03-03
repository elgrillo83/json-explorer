type JSONArray = JSONNode[];

type JSONObject = {
  [key: string]: JSONNode;
};

type JSONArrayOrObject = JSONArray | JSONObject;

type JSONNode = JSONValue | JSONObject | JSONArray;

type JSONValue = boolean | number | string;
