export const memoize = fn => {
    const cache = {};

    return (...args) => {
        const stringifiedArgs = JSON.stringify(args);

        if (cache[stringifiedArgs]) {
            return cache[stringifiedArgs];
        }

        cache[stringifiedArgs] = fn(...args);

        return cache[stringifiedArgs];
    };
};
