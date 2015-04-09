'use strict';

var helloData = {
    "nodes": [
        {
            "id": "root",
            "loaded": true,
            "style": {
                "label": "인터넷",
                "type": "cloud",
                "x" : 0,
                "y" : 0
            },
            "properties": {
                "type": "인터넷"
            },
            "visibility": {
                "경찰청": true,
                "미래창조부": true,
                "국민안전처": true
            }
        },
        {
            "id": "future",
            "loaded": true,
            "style": {
                "label": "미래창조부",
                "type": "future",
                "x" : -200,
                "y" : -100
            },
            "properties": {
                "type": "미래창조부"
            },
            "visibility": {
                "경찰청": true,
                "미래창조부": true,
                "국민안전처": true
            }
        },
        {
            "id": "police",
            "loaded": true,
            "style": {
                "label": "경찰청",
                "type": "police",
                "x" : 200,
                "y" : -100
            },
            "properties": {
                "type": "경찰청"
            },
            "visibility": {
                "경찰청": true,
                "미래창조부": true,
                "국민안전처": true
            }
        },
        {
            "id": "mpss",
            "loaded": true,
            "style": {
                "label": "국민안전처",
                "type": "mpss",
                "x" : 0,
                "y" : 150
            },
            "properties": {
                "type": "국민안전처"
            },
            "visibility": {
                "경찰청": true,
                "미래창조부": true,
                "국민안전처": true
            }
        }
    ],
    "links": [
        {
            "id": "link00",
            "from": "root",
            "to": "future",
            "type": "type1"
        },
        {
            "id": "link01",
            "from": "root",
            "to": "police",
            "type": "type1"
        },
        {
            "id": "link02",
            "from": "root",
            "to": "mpss",
            "type": "type1"
        }
    ]
}

module.exports = helloData;