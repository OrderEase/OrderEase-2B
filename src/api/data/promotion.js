export default [
    {
        id: '1',
        theme: '端午节活动',
        begin: '2008-11-22 03:22',
        end: '2009-01-11 11:11',
        isend: 1,
        rules: [
            {
                id: '1',
                mode: 1,
                requirement: 11,
                discount: 3
            },
            {
                id: '2',
                mode: 1,
                requirement: 33,
                discount: 1
            }
        ]
    },
    {
        id: '2',
        theme: '中秋节活动',
        begin: '2015-11-22 03:22',
        end: '2016-01-11 12:12',
        isend: 0,
        rules: [
            {
                id: '3',
                mode: 2,
                requirement: 11,
                discount: 0.33
            },
            {
                id: '4',
                mode: 2,
                requirement: 33,
                discount: 1
            }
        ]
    },
    {
        id: '3',
        theme: '啥活动',
        begin: '2018-06-12 03:22',
        end: '2018-08-11 14:14',
        isend: 0,
        rules: [
            {
                id: '5',
                mode: 1,
                requirement: 33,
                discount: 1
            }
        ]
    }
]
