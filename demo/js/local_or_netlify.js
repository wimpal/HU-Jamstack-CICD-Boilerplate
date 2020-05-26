function determineOrigin(location) {
    if (location.includes("file:") || location.includes("localhost")) {
        return 'local';
    } else if (location.includes("netlify")) {
        return 'netlify';
    } else {
        return 'error';
    }
}

exports.isLocalOrNetlify = function(url) {
    const outcome = determineOrigin(url);
    return outcome;
};