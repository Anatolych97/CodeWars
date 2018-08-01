function domainName(url) {
    let str = url.replace(new RegExp(/https:\/\/|http:\/\//), '');
    if (str.indexOf('www.')) str = str.slice(0, str.indexOf('.'));
    else str = str.slice(4, str.indexOf('.', 4));

    return str;
}