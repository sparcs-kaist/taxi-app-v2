import {useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useCookies = () => {
    const [cookies, setCookies] = useState<Record<string, string>>({});

    const setCookie = async (key: string, value: string) => {
        setCookies((prev) => ({...prev, [key]: value}));
        await AsyncStorage.setItem(key, value);
    };

    const getCookie = async (key: string) => {
        if (cookies[key]) return cookies[key];
        const value = await AsyncStorage.getItem(key);
        if (value) {
            setCookies((prev) => ({...prev, [key]: value}));
            return value;
        }
        return null;
    };

    const removeCookie = async (key: string) => {
        setCookies((prev) => {
            const {[key]: _, ...rest} = prev;
            return rest;
        });
        await AsyncStorage.removeItem(key);
    };

    useEffect(() => {
        const loadCookies = async () => {
            const keys = await AsyncStorage.getAllKeys();
            const values = await AsyncStorage.multiGet(keys);
            const cookies: Record<string, string> = {};
            values.forEach(([key, value]) => {
                if (key && value) {
                    cookies[key] = value;
                }
            });
            setCookies(cookies);
        };
        loadCookies();
    }, []);


    return [cookies, setCookie];
};

export default useCookies;