export interface Item {
  name: string;
}

export const items: Item[] = [];

const load = async () => items;

load();

// Allowed: numbers in template literals
export const toPixels = (size: number) => `${size}px`;

export const greet = (name: string | undefined) => `Hello ${name}`;

export const getName = (item: Item) => item?.name;

const log = (message: string) => {
  console.info(message);
};

// Allowed: void-returning arrow function shorthand
export const onChange = (value: string) => log(value);
