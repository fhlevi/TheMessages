import AsyncStorage from "@react-native-async-storage/async-storage";

async function get(key: string, defaultValue: any = null) {
    try {
        let value: any = await AsyncStorage.getItem(key);

        if (value) {
            value = JSON.parse(value);
        }

        return value;
    } catch (err) {
        console.log('Could not save data: ' + key, err);
    }
}

async function set(key: string, value: any) {
    try {
        return await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.log('Could not save data: ' + key, err);
    }
}

async function remove(key: string) {}

async function clear() {
    try {
        return await AsyncStorage.clear(() => {
            console.log('cleared');
        });
    } catch(err) {
        console.log('Could not clear data ', err);
    }
}

export default {
    get,
    set,
    remove,
    clear,
}