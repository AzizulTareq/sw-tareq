import { writable } from "svelte/store";

export const countryDataStore = writable([]);
export const isLoading = writable(false);
