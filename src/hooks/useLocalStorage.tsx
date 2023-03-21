import { useEffect, useState } from "react";

export const localStorageKeyObj = {
	token: "token",
};

const getLocalStorageItem = (key: string) => {
	const saved = localStorage.getItem(key);
	const parsedItem = saved ? JSON.parse(saved) : "";

	return parsedItem;
};

export const useLocalStorage = (
	key: string
): {
	localStorageValue: string;
	setLocalStorageValue: (value: string) => void;
	clearLocalStorage: () => void;
} => {
	const [localStorageValue, setLocalStorageValue] = useState<string>(() =>
		getLocalStorageItem(key)
	);

	useEffect(() => {
		key && localStorage.setItem(key, JSON.stringify(localStorageValue));
	}, [key, localStorageValue]);

	const clearLocalStorage = () => localStorage.clear();

	return { localStorageValue, setLocalStorageValue, clearLocalStorage };
};
