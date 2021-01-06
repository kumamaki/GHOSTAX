export default (count) => {
    return Array(count).fill(null).map((_, index) => { return index + 1; });
};
