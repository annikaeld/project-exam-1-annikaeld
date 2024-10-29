function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get(param));
    return urlParams.get(param);
}

export { getQueryParam };