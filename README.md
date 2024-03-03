# JSON Explorer

## Summary

A component to select keys from a JSON object that returns the keyʼs path and value.

## Task

Build a React Function Component that takes in JSON data as an argument and satisfies the following acceptance criteria.

## Acceptance Criteria

- The JSON data is correctly displayed: indention, (curly) brackets, commas, string values, number values, boolean values, arrays, objects, etc.
- All keys can be interacted with and are highlighted (e.g. color: blue)
- When a user clicks on a key, it shows its path and value:
  - Examples from video:
    - When a user clicks on `date` it shows `res.date` and `2021-10-27T07:49:14.896Z`
    - When a user clicks on `hasError` it shows `res.hasError` and `false`
    - When a user clicks on `prop` in the first object in the `fields` array, it shows `res.fields[0].prop` and `iban`
- Use Typescript
- The input field displays the correct value when given a path to the property (as seen in the video)

## Instructions

- Run `npm install`
- Run `npm run dev`
