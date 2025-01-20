function isEmptyString(string) {
    if (string.trim() === '')  {
        return true;
    } else {
        return false;
    }
}

export { isEmptyString };