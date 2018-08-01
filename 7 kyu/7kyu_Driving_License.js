function driver(data) {
    let license = "",
        user = {
            "name": data[0],
            "midname": data[1],
            "surname": data[2],
            "date": {
                "day": data[3].split('-')[0],
                "month": data[3].split('-')[1],
                "year": data[3].split('-')[2]
            },
            "gender": data[4]
        }

    //Point 1: 1 -5
    license += user.surname.slice(0, 5).toUpperCase();
    if (license.length < 5) license += '9'.repeat(5 - license.length);
    //Point 2: 6
    license += user.date.year.substr(-2, 1);
    //Point 3: 7 - 8
    let months = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12"
    };
    if (user.gender === 'M') license += months[user.date.month.slice(0, 3)];
    else license += (+months[user.date.month.slice(0, 3)][0] + 5) + months[user.date.month.slice(0, 3)][1];
    //Point 4: 9 - 10
    license += user.date.day;
    //Point 5: 11
    license += user.date.year.slice(-1);
    //Point 6: 12 - 13
    license += (user.name[0] + (user.midname[0] !== '' ? user.midname[0] : 9)).toUpperCase();
    //Point 7-8: 14 - 16
    license += '9AA';

    return license;
}