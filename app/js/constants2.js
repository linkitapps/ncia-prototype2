'use strict';

var addTEmpData = {
    "nodes": [
        {
            data : {
                "id": "SVE_000036",
                "parent": 'police',
                "loaded": true,
                "style": {
                    "label": "모니터링서버"
                },
                "properties": {
                    "type": "서버",
                    "hw_id": "SVE_000036",
                    "name": "모니터링서버",
                    "IP": "210.136.71.108",
                    "date": "2015-02-20",
                    "OS": "WINDOWS",
                    "location": "대전전산센터 1층",
                    "admin_id": "jmil",
                    "admin_name": "일지매",
                    "department_code": "160000",
                    "division_code": "160301",
                    "admin": {
                        "id": "jmil",
                        "name": "일지매",
                        "phone": "010-9470-8657",
                        "auth": "관리자",
                        "note": "해당 프로젝트 서버 관리"
                    },
                    "department": {
                        "code": "160000",
                        "name": "경찰청"
                    },
                    "division": {
                        "code": "160301",
                        "name": "시스템관리부"
                    }
                },
                "visibility": {
                    "경찰청": true,
                    "미래창조부": false,
                    "국민안전처": false
                },
                "type": "server-monitor",
                "group": "160000-1"
            }
        },
        {
            data : {
                "id": "SVE_000037",
                "parent": 'police',
                "loaded": true,
                "style": {
                    "label": "CCTV영상서버",
                    "type": "server-cctv"
                },
                "properties": {
                    "type": "서버",
                    "hw_id": "SVE_000037",
                    "name": "CCTV영상서버",
                    "IP": "210.136.71.109",
                    "date": "2015-02-20",
                    "OS": "HPUX",
                    "location": "대전전산센터 1층",
                    "admin_id": "jmil",
                    "admin_name": "일지매",
                    "department_code": "160000",
                    "division_code": "160301",
                    "admin": {
                        "id": "jmil",
                        "name": "일지매",
                        "phone": "010-9470-8657",
                        "auth": "관리자",
                        "note": "해당 프로젝트 서버 관리"
                    },
                    "department": {
                        "code": "160000",
                        "name": "경찰청"
                    },
                    "division": {
                        "code": "160301",
                        "name": "시스템관리부"
                    }
                },
                "visibility": {
                    "경찰청": true,
                    "미래창조부": false,
                    "국민안전처": false
                },
                "type": "server-monitor",
                "group": "160000-1"
            }
        },
        {
            data : {
                "id": "SVE_000038",
                "parent": 'police',
                "loaded": true,
                "style": {
                    "label": "분석서버",
                    "type": "server-analysis"
                },
                "properties": {
                    "type": "서버",
                    "hw_id": "SVE_000038",
                    "name": "분석서버",
                    "IP": "210.136.71.110",
                    "date": "2015-02-20",
                    "OS": "HPUX",
                    "location": "대전전산센터 1층",
                    "admin_id": "jmil",
                    "admin_name": "일지매",
                    "department_code": "160000",
                    "division_code": "160301",
                    "admin": {
                        "id": "jmil",
                        "name": "일지매",
                        "phone": "010-9470-8657",
                        "auth": "관리자",
                        "note": "해당 프로젝트 서버 관리"
                    },
                    "department": {
                        "code": "160000",
                        "name": "경찰청"
                    },
                    "division": {
                        "code": "160301",
                        "name": "시스템관리부"
                    }
                },
                "visibility": {
                    "경찰청": true,
                    "미래창조부": false,
                    "국민안전처": false
                },
                "type": "server-monitor",
                "group": "160000-1"
            }
        }
    ],
    "edges": [
        {
            data : {
                "id": "link40",
                "source": "SVE_000303",
                "target": "SVE_000036",
                "type": "type1"
            }
        },
        {
            data : {
                "id": "link41",
                "source": "SVE_000303",
                "target": "SVE_000037",
                "type": "type1"
            }
        },
        {
            data : {
                "id": "link42",
                "source": "SVE_000303",
                "target": "SVE_000038",
                "type": "type1"
            }
        }
    ]
}

module.exports = addTEmpData;