/**
 * 题目标签相关的操作
 */
let ProblemTag = jzcode.model('problem_tag')

app.get(jzcode.api + '/tags', async (req, res) => {
    try {
        tags = await ProblemTag.find()
        res.send({
            code: 200,
            message: '成功获取数据',
            data: tags
        })
    } catch (error) {
       
    }
})